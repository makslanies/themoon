# Multi-stage: build with Hugo Extended, serve with nginx
FROM alpine:3.21 AS build
WORKDIR /src

RUN apk add --no-cache ca-certificates curl git libc6-compat libstdc++ \
  && curl -fsSL \
    "https://github.com/gohugoio/hugo/releases/download/v0.147.8/hugo_extended_0.147.8_linux-amd64.tar.gz" \
    -o /tmp/hugo.tar.gz \
  && tar -xzf /tmp/hugo.tar.gz -C /usr/local/bin hugo \
  && rm /tmp/hugo.tar.gz \
  && hugo version

COPY . .
RUN hugo --minify --gc

FROM nginx:1.27-alpine
COPY --from=build /src/public /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
