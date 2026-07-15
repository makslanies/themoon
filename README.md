# The Moon

Hugo-сайт дизайн-студии интерьеров The Moon.

## Автор

Maksim Lanies <max0rikk@gmail.com>

## Структура

- `hugo.toml` - настройки сайта, SEO и базовый URL.
- `data/site.yaml` - основной контент лендинга: тексты, навигация, услуги, контакты и медиа.
- `layouts/` - Hugo-шаблоны и секции страницы.
- `static/` - CSS, JavaScript, изображения, иконки и видео.
- `Dockerfile`, `docker-compose.yml`, `docker/nginx.conf` - контейнерная сборка и запуск через nginx.

## Локальная разработка

```bash
hugo server --bind 0.0.0.0 --baseURL http://localhost:1313/ --disableFastRender
```

Сайт будет доступен по адресу:

```text
http://localhost:1313/
```

## Сборка

```bash
hugo --minify --gc
```

Результат сборки появляется в `public/`. Эта папка является артефактом и не коммитится.

## Docker

```bash
docker build --network=host -t themoon-web:latest .
docker run --rm -p 1314:80 themoon-web:latest
```

После запуска сайт доступен по адресу:

```text
http://localhost:1314/
```

Через Compose:

```bash
HOST_PORT=1314 docker compose up --build
```

## Контент

Основные тексты и пути к изображениям редактируются в `data/site.yaml`.

Кастомные стили лежат в `static/css/style.css`. Ссылка на CSS автоматически получает версию по содержимому файла, чтобы браузер не держал старый кэш после изменений.
