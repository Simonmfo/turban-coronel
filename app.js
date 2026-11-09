/**
 * CORONEL | TURBAN (@turbancoronel) — Interactive Architectural Experience
 */

const PROJECTS_DATA = {
  ayelen: {
    code: "01 / SALTO · 28 HECTÁREAS",
    title: "Ayelén Venue",
    location: "Salto, Uruguay",
    area: "28 ha · 1.450 m²",
    authors: "Arq @juankturban & Arq @die.coronel",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85",
    description:
      "Complejo multipropósito en un predio rural de 28 hectáreas citrícolas en Salto. Fusiona arte escultórico, arquitectura pabellonal de hormigón y acero y paisaje natural.",
    svg: `
      <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="360" x2="760" y2="360" stroke="currentColor" stroke-width="2"/>
        <line x1="110" y1="130" x2="690" y2="130" stroke="currentColor" stroke-width="4"/>
        <line x1="190" y1="130" x2="190" y2="360" stroke="currentColor" stroke-width="2"/>
        <line x1="400" y1="130" x2="400" y2="360" stroke="currentColor" stroke-width="2"/>
        <line x1="610" y1="130" x2="610" y2="360" stroke="currentColor" stroke-width="2"/>
        <rect x="190" y="145" width="420" height="215" stroke="currentColor" stroke-dasharray="6 6"/>
        <circle cx="400" cy="245" r="85" stroke="currentColor" stroke-dasharray="4 4"/>
        <text x="115" y="110" fill="currentColor" font-family="JetBrains Mono" font-size="13">CORTE TECTÓNICO // LOSA +4.20m</text>
        <text x="115" y="390" fill="currentColor" font-family="JetBrains Mono" font-size="13">AYELÉN VENUE · 28 HA · SALTO, UY</text>
      </svg>
    `
  },
  centripeta: {
    code: "02 / MONTEVIDEO · 1° PREMIO ARQATÓN",
    title: "Proyecto «Centrípeta» — Plaza Lluís Companys",
    location: "Buceo, Montevideo",
    area: "1° Premio Nacional · BAQ Quito",
    authors: "Arq @juankturban & Arq @die.coronel",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    description:
      "Primer Premio en el Concurso Nacional Arqatón (Feria de la Construcción & Universidad ORT) y representación en la Bienal Panamericana de Arquitectura de Quito. Reorganiza el borde verde como filtro urbano para liberar un corazón cívico barrial.",
    svg: `
      <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="120" y="60" width="560" height="330" stroke="currentColor" stroke-dasharray="6 6"/>
        <circle cx="400" cy="225" r="125" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="400" cy="225" r="65" stroke="currentColor" stroke-dasharray="4 4"/>
        <line x1="120" y1="60" x2="310" y2="170" stroke="currentColor" stroke-width="1.5"/>
        <line x1="680" y1="60" x2="490" y2="170" stroke="currentColor" stroke-width="1.5"/>
        <line x1="120" y1="390" x2="310" y2="280" stroke="currentColor" stroke-width="1.5"/>
        <line x1="680" y1="390" x2="490" y2="280" stroke="currentColor" stroke-width="1.5"/>
        <text x="135" y="90" fill="currentColor" font-family="JetBrains Mono" font-size="13">ESTRATEGIA CENTRÍPETA // 1° PREMIO ARQATÓN</text>
        <text x="330" y="230" fill="currentColor" font-family="JetBrains Mono" font-size="13">VACÍO CÍVICO</text>
      </svg>
    `
  },
  nave: {
    code: "03 / PAYSANDÚ · RUTA 3 & AV. DE LAS AMÉRICAS",
    title: "Planta Industrial Metalúrgica",
    location: "Paysandú, Uruguay",
    area: "3.200 m² · Gran Escala",
    authors: "Arq @juankturban & Arq @die.coronel",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    description:
      "Proyecto y diseño de planta industrial metalúrgica y bloque administrativo sobre Ruta 3 y Avenida de las Américas en Paysandú. Pórticos modulados de gran luz libre y fachadas ventiladas.",
    svg: `
      <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="50" y1="365" x2="750" y2="365" stroke="currentColor" stroke-width="2"/>
        <polygon points="110,365 110,165 290,110 470,165 470,365" stroke="currentColor" stroke-width="2.5"/>
        <rect x="500" y="205" width="190" height="160" stroke="currentColor" stroke-width="2"/>
        <line x1="110" y1="165" x2="470" y2="165" stroke="currentColor" stroke-dasharray="5 5"/>
        <text x="180" y="265" fill="currentColor" font-family="JetBrains Mono" font-size="13">PÓRTICO METÁLICO LUZ LIBRE 26m</text>
        <text x="110" y="395" fill="currentColor" font-family="JetBrains Mono" font-size="13">RUTA 3 Y AV. DE LAS AMÉRICAS · PAYSANDÚ</text>
      </svg>
    `
  },
  casario: {
    code: "04 / LITORAL OESTE · VIVIENDA",
    title: "Casa del Litoral",
    location: "Paysandú, Uruguay",
    area: "380 m²",
    authors: "Arq @juankturban & Arq @die.coronel",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    description:
      "Una losa continua de hormigón visto gravita sobre muros de piedra local y parasoles de lapacho, protegiendo las galerías del sol poniente y abriendo la vivienda hacia el Río Uruguay.",
    svg: `
      <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 320 L420 320 L620 370 L750 380" stroke="currentColor" stroke-width="2"/>
        <rect x="140" y="155" width="460" height="18" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
        <rect x="190" y="173" width="70" height="147" stroke="currentColor" stroke-width="2"/>
        <line x1="510" y1="173" x2="510" y2="342" stroke="currentColor" stroke-width="2"/>
        <text x="145" y="138" fill="currentColor" font-family="JetBrains Mono" font-size="13">VOLADIZO HORMIGÓN VISTO // CONTROL SOLAR OESTE</text>
      </svg>
    `
  }
};

/* ==========================================================================
   1. INTERACTIVE X-RAY SPOTLIGHT REVEAL (interactive-content-reveal)
   ========================================================================== */
const initSpotlightCanvas = () => {
  const container = document.getElementById("heroSpotlight");
  const hudCoords = document.getElementById("hudCoords");
  if (!container) return;

  let rect = container.getBoundingClientRect();
  const resizeObserver = new ResizeObserver(() => {
    rect = container.getBoundingClientRect();
  });
  resizeObserver.observe(container);

  container.addEventListener("pointermove", (e) => {
    rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

    container.style.setProperty("--mouse-x", `${x}%`);
    container.style.setProperty("--mouse-y", `${y}%`);

    if (hudCoords) {
      hudCoords.textContent = `X:${String(Math.round(x)).padStart(3, "0")} Y:${String(Math.round(y)).padStart(3, "0")}`;
    }
  });

  container.addEventListener("pointerdown", () => {
    container.classList.add("is-active");
  });
  container.addEventListener("pointerup", () => {
    container.classList.remove("is-active");
  });
};

/* ==========================================================================
   2. SCROLL SURPRISES: ELEVATION ALTIMETER, ROTATING EMBLEM & FALLBACKS
   ========================================================================== */
const initScrollEffects = () => {
  const hudElevation = document.getElementById("hudElevation");
  const rotatingEmblem = document.getElementById("rotatingEmblem");
  const progress = document.getElementById("scrollProgress");
  const supportsScrollTimeline = CSS.supports("animation-timeline", "scroll()");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener(
    "scroll",
    () => {
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrolled = window.scrollY;
      const ratio = Math.max(0, Math.min(1, scrolled / scrollable));

      // Update live architectural section elevation (from ±0.00m to +12.40m)
      if (hudElevation) {
        const meters = (ratio * 12.4).toFixed(2);
        hudElevation.textContent = ratio <= 0.01 ? "±0.00 m" : `+${meters} m`;
      }

      // Gently rotate official CORONEL | TURBAN emblem on scroll
      if (rotatingEmblem && !prefersReducedMotion) {
        rotatingEmblem.style.transform = `rotate(${(scrolled * 0.14).toFixed(1)}deg)`;
      }

      // Fallback for scroll progress indicator if animation-timeline: scroll() is unsupported
      if (!supportsScrollTimeline && progress) {
        progress.style.transform = `scaleX(${ratio})`;
      }
    },
    { passive: true }
  );

  if (prefersReducedMotion) return;

  // Fallback for Scrollytelling isometric assembly in browsers without scroll-driven animations
  if (!CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)")) {
    const animatedPlanes = document.querySelectorAll("#animated .iso-plane");
    const trackedSteps = Array.from(document.querySelectorAll("#tracked section"));

    const scrollyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = trackedSteps.indexOf(entry.target);
          if (idx !== -1 && animatedPlanes[idx]) {
            const r = entry.intersectionRatio;
            animatedPlanes[idx].style.opacity = String(0.2 + r * 0.8);
            animatedPlanes[idx].style.transform = `translateY(${(1 - r) * 40}px) scale(${0.9 + r * 0.1})`;
          }
        });
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );

    trackedSteps.forEach((step) => scrollyObserver.observe(step));
  }

  // Fallback for Monumental Works entry reveal
  if (!CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
    const workObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const r = entry.intersectionRatio;
            entry.target.style.opacity = String(0.25 + r * 0.75);
            entry.target.style.transform = `translateY(${Math.round((1 - r) * 32)}px)`;
          }
        }
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );

    document.querySelectorAll(".monumental-item").forEach((el) => workObserver.observe(el));
  }
};

/* ==========================================================================
   3. MODAL DIALOG WITH BEFORE/AFTER CAD SLIDER & LIGHT-DISMISS FALLBACK
   ========================================================================== */
const initProjectModal = () => {
  const dialog = document.getElementById("projectDialog");
  const closeBtn = document.getElementById("closeDialogBtn");
  const slider = document.getElementById("comparisonSlider");
  const viewer = document.getElementById("comparisonViewer");
  if (!dialog) return;

  const els = {
    code: document.getElementById("dialogCode"),
    title: document.getElementById("dialogProjectTitle"),
    description: document.getElementById("dialogDescription"),
    location: document.getElementById("dialogLocation"),
    area: document.getElementById("dialogArea"),
    authors: document.getElementById("dialogAuthors"),
    image: document.getElementById("dialogImage"),
    svg: document.getElementById("dialogSvgBlueprint")
  };

  const openModal = (id) => {
    const data = PROJECTS_DATA[id];
    if (!data) return;

    els.code.textContent = data.code;
    els.title.textContent = data.title;
    els.description.textContent = data.description;
    els.location.textContent = data.location;
    els.area.textContent = data.area;
    els.authors.textContent = data.authors;
    els.image.src = data.image;
    els.image.alt = `${data.title} — ${data.location}`;
    els.svg.innerHTML = data.svg;

    if (slider && viewer) {
      slider.value = "55";
      viewer.style.setProperty("--split", "55%");
    }

    // MANDATORY: Open modal dialogs with showModal()
    dialog.showModal();
  };

  document.querySelectorAll("[data-open-project]").forEach((el) => {
    el.addEventListener("click", () => openModal(el.dataset.openProject));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(el.dataset.openProject);
      }
    });
  });

  if (slider && viewer) {
    slider.addEventListener("input", () => {
      viewer.style.setProperty("--split", `${slider.value}%`);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => dialog.close());
  }

  // MANDATORY: Fallback for browsers without <dialog closedby="any"> support
  if (!("closedBy" in HTMLDialogElement.prototype)) {
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isInside =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInside) dialog.close();
    });
  }
};

/* ==========================================================================
   4. THEME TOGGLE & MAGNETIC CTA
   ========================================================================== */
const initThemeAndMagnetic = () => {
  const themeToggle = document.getElementById("themeToggle");
  const metaScheme = document.querySelector('meta[name="color-scheme"]');
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current =
        document.documentElement.dataset.theme || (systemDark.matches ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      if (metaScheme) metaScheme.content = next;
      localStorage.setItem("color-scheme", next);
    });
  }

  const magneticBtn = document.getElementById("magneticCta");
  if (magneticBtn && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    magneticBtn.addEventListener("pointermove", (e) => {
      const r = magneticBtn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.22;
      magneticBtn.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
    });
    magneticBtn.addEventListener("pointerleave", () => {
      magneticBtn.style.transform = "translate(0, 0)";
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  initSpotlightCanvas();
  initScrollEffects();
  initProjectModal();
  initThemeAndMagnetic();
});
