gsap.registerPlugin(ScrollTrigger);

// Banner: reveal hero text
gsap.set("#bannerRest", { opacity: 0, y: 36 });

gsap.to("#bannerRest", {
  delay: 0.5,
  duration: 1.2,
  opacity: 1,
  y: 0,
  ease: "power2.out"
});

// Mobile navigation
const siteBurger = document.querySelector("#siteBurger");
const siteNavMobile = document.querySelector("#siteNavMobile");

function closeMobileNav() {
  if (!siteBurger || !siteNavMobile) return;
  siteBurger.classList.remove("is-open");
  siteBurger.setAttribute("aria-expanded", "false");
  siteBurger.setAttribute("aria-label", "Открыть меню");
  siteNavMobile.classList.remove("is-open");
  siteNavMobile.hidden = true;
  document.body.classList.remove("nav-open");
}

if (siteBurger && siteNavMobile) {
  siteBurger.addEventListener("click", () => {
    const isOpen = siteBurger.classList.toggle("is-open");
    siteNavMobile.classList.toggle("is-open", isOpen);
    siteNavMobile.hidden = !isOpen;
    siteBurger.setAttribute("aria-expanded", String(isOpen));
    siteBurger.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
    document.body.classList.toggle("nav-open", isOpen);
  });

  siteNavMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) closeMobileNav();
  });
}

// Shrinking header on scroll
const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const updateHeaderOnScroll = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
}

// Company Section - Title
gsap.set(".company-section .title, #compDescription", {
  opacity: 0,
  y: -200
});
gsap.to(".company-section .title, #compDescription", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".company-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Company section - Image
gsap.set(".compy-box", {
  opacity: 0,
  scale: 0
});
gsap.to(".compy-box", {
  duration: 1.6,
  delay: 0.1,
  opacity: 1,
  scale: 1,
  transformOrigin: "top right",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".company-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Designers section - Title
gsap.set(".designer-section .title, #designDescription", {
  y: -200,
  opacity: 0
});
gsap.to(".designer-section .title, #designDescription", {
  duration: 1.6,
  y: 0,
  opacity: 1,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".designer-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Designer section - white border
gsap.set(".box-border", {
  opacity: 0,
  scale: 0.6,
  rotate: 15
});
gsap.to(".box-border", {
  duration: 1.5,
  opacity: 1,
  scale: 1,
  rotate: 0,
  ease: "power.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".designer-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Designer section - Image - left
gsap.set(".team1, .team3", {
  opacity: 0,
  rotate: 45,
  scale: 0.5
});
gsap.to(".team1, .team3", {
  duration: 1.6,
  delay: 0.2,
  opacity: 1,
  rotate: 0,
  scale: 1,
  ease: "power2.inOut",
  transformOrigin: "top",
  yoyo: true,
  scrollTrigger: {
    trigger: ".designer-section",
    start: "top center",
    end: "center",
    markers: false
  }
});
// right
gsap.set(".team2", {
  opacity: 0,
  rotate: -45,
  scale: 0.5
});
gsap.to(".team2", {
  duration: 1.6,
  delay: 0.2,
  opacity: 1,
  rotate: 0,
  scale: 1,
  ease: "power2.inOut",
  transformOrigin: "top",
  yoyo: true,
  scrollTrigger: {
    trigger: ".designer-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Projects section - Title
gsap.set(".projects-section .title", {
  y: -200,
  opacity: 0
});
gsap.to(".projects-section .title", {
  duration: 1.6,
  y: 0,
  opacity: 1,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Projects section - Left
gsap.set(".pbox-left", {
  opacity: 0,
  x: -800
});
gsap.to(".pbox-left", {
  duration: 1.6,
  x: 0,
  opacity: 1,
  scale: 1,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Projecr section - Right
gsap.set(".pbox-right", {
  x: 500
});
gsap.to(".pbox-right", {
  duration: 1.6,
  x: 0,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top center",
    end: "center",
    marker: false
  }
});

// Project section - content section
gsap.set(".project-content", {
  x: -200,
  y: -200,
  opacity: 0
});
gsap.to(".project-content", {
  duration: 1.6,
  x: 0,
  y: 0,
  opacity: 1,
  delay: 0.2,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Testimonial section - Title
gsap.set(".testimonial-section .title", {
  y: -200,
  opacity: 0
});
gsap.to(".testimonial-section .title", {
  duration: 1.6,
  y: 0,
  opacity: 1,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Testimonial section - Left Content
gsap.set(".left-row", {
  opacity: 0,
  xPercent: -100
});
gsap.to(".left-row", {
  duration: 1.6,
  opacity: 1,
  xPercent: 0,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Testimonial section - Right Content
gsap.set(".right-row", {
  opacity: 0,
  xPercent: 100
});
gsap.to(".right-row", {
  duration: 1.6,
  opacity: 1,
  xPercent: 0,
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top center",
    end: "center",
    markers: false
  }
});

// Contact section - Box & Border
gsap.set(".contact-box, .contact-border", {
  opacity: 0,
  scale: 0
});
gsap.to(".contact-box, .contact-border", {
  duration: 1.6,
  opacity: 1,
  scale: 1,
  transformOrigin: "top right",
  ease: "power2.inOut",
  yoyo: true,
  scrollTrigger: {
    trigger: ".contact-us",
    start: "top center",
    end: "bottom",
    markers: false
  }
});
