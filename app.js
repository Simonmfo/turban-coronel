/**
 * turban | coronel — Estudio de Arquitectura & Urbanismo
 * Interactive Application Logic & Modern Web Platform Fallbacks
 */

const PROJECTS_DATA = {
  ayelen: {
    code: "TC-01",
    category: "CULTURAL & PAISAJE",
    title: "Ayelén Venue",
    location: "Salto, Uruguay",
    year: "2023 — 2024",
    area: "1.450 m² cubiertos + paisaje",
    scale: "ESC 1:100",
    authors: "Arq. Juan Turban, Arq. Diego Coronel",
    materials: "Hormigón visto, perfilería de acero negro, vidrio laminado y flora citrícola nativa",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85",
    description:
      "Ubicado en un entorno de chacras de cítricos en las afueras de la ciudad de Salto, Ayelén Venue se concibe como un pabellón horizontal que articula arquitectura, arte escultórico y naturaleza. La cubierta flota sobre cerramientos vidriados continuos, disolviendo el límite entre el salón principal y el paisaje productivo del norte uruguayo.",
    svg: `
      <svg viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="125" x2="580" y2="125" stroke="currentColor" stroke-width="1.5"/>
        <line x1="60" y1="42" x2="540" y2="42" stroke="currentColor" stroke-width="3"/>
        <line x1="120" y1="42" x2="120" y2="125" stroke="currentColor" stroke-width="1.5"/>
        <line x1="300" y1="42" x2="300" y2="125" stroke="currentColor" stroke-width="1.5"/>
        <line x1="480" y1="42" x2="480" y2="125" stroke="currentColor" stroke-width="1.5"/>
        <rect x="120" y="48" width="360" height="77" stroke="currentColor" stroke-dasharray="3 3"/>
        <text x="65" y="32" fill="currentColor" font-family="JetBrains Mono" font-size="10">VOLADIZO SUR +4.20m</text>
        <text x="430" y="32" fill="currentColor" font-family="JetBrains Mono" font-size="10">GALERÍA NORTE</text>
      </svg>
    `
  },
  centripeta: {
    code: "TC-02",
    category: "ESPACIO PÚBLICO · 1° PREMIO ARQATÓN",
    title: "Proyecto «Centrípeta» — Plaza Lluís Companys",
    location: "Barrio Buceo, Municipio CH, Montevideo",
    year: "2023 (Concurso Nacional / BAQ Quito)",
    area: "3.800 m² de intervención urbana",
    scale: "ESC 1:250",
    authors: "Arq. Juan Turban, Arq. Diego Coronel",
    materials: "Pavimentos drenantes continuos, equipamiento en hormigón prefabricado y estrato arbóreo nativo",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    description:
      "Primer Premio en la segunda edición del Concurso Nacional Arqatón (Feria de la Construcción & Universidad ORT). La estrategia «Centrípeta» reorganiza la masa vegetal hacia los bordes perimetrales para amortiguar el tránsito vehicular y libera un gran vacío cívico central que potencia la apropiación comunitaria, el juego y la permanencia vecinal.",
    svg: `
      <svg viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="80" y="18" width="440" height="114" stroke="currentColor" stroke-dasharray="4 4"/>
        <circle cx="300" cy="75" r="46" stroke="currentColor" stroke-width="1.75"/>
        <circle cx="300" cy="75" r="24" stroke="currentColor" stroke-dasharray="2 2"/>
        <path d="M140 35 L255 62 M460 35 L345 62 M140 115 L255 88 M460 115 L345 88" stroke="currentColor" stroke-width="1.2"/>
        <text x="92" y="34" fill="currentColor" font-family="JetBrains Mono" font-size="10">BORDE VERDE AMORTIGUADOR</text>
        <text x="252" y="78" fill="currentColor" font-family="JetBrains Mono" font-size="10">NÚCLEO CÍVICO</text>
      </svg>
    `
  },
  casario: {
    code: "TC-03",
    category: "VIVIENDA UNIFAMILIAR",
    title: "Casa del Litoral",
    location: "Litoral Oeste, Uruguay",
    year: "2024",
    area: "380 m²",
    scale: "ESC 1:75",
    authors: "Arq. Juan Turban, Arq. Diego Coronel",
    materials: "Losa casetonada de hormigón visto, basamento de piedra local y parasoles de lapacho",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Implantada sobre una barranca suave hacia el Río Uruguay, la vivienda se organiza bajo una única cubierta horizontal que resuelve los aleros de control solar al poniente. Los paquetes de servicio se agrupan en dos muros pétreos ciegos, liberando las visuales cruzadas entre el patio de acceso y el horizonte ribereño.",
    svg: `
      <svg viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 110 L260 110 L420 132 L580 138" stroke="currentColor" stroke-width="1.5"/>
        <rect x="110" y="52" width="330" height="8" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/>
        <rect x="145" y="60" width="45" height="50" stroke="currentColor" stroke-width="1.5"/>
        <line x1="360" y1="60" x2="360" y2="122" stroke="currentColor" stroke-width="1.5"/>
        <text x="115" y="42" fill="currentColor" font-family="JetBrains Mono" font-size="10">LOSA CONTINUA H°A°</text>
        <text x="435" y="100" fill="currentColor" font-family="JetBrains Mono" font-size="10">VISUALES AL RÍO →</text>
      </svg>
    `
  },
  nave: {
    code: "TC-04",
    category: "INFRAESTRUCTURA & TRABAJO",
    title: "Polo Productivo & Oficinas Litoral",
    location: "Paysandú, Uruguay",
    year: "2024",
    area: "3.200 m²",
    scale: "ESC 1:200",
    authors: "Arq. Juan Turban, Arq. Diego Coronel",
    materials: "Estructura metálica de alma llena, paneles termoacústicos y envolvente de policarbonato alveolar",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    description:
      "Proyecto de infraestructura industrial y bloque administrativo concebido desde la racionalidad constructiva y el confort ambiental. El sistema de pórticos modulados cada 7,50 metros permite flexibilidad operativa total, mientras que un patio longitudinal introduce iluminación natural difusa a las áreas de oficina y laboratorio.",
    svg: `
      <svg viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="128" x2="570" y2="128" stroke="currentColor" stroke-width="1.5"/>
        <polygon points="80,128 80,55 210,36 340,55 340,128" stroke="currentColor" stroke-width="1.5"/>
        <rect x="370" y="68" width="140" height="60" stroke="currentColor" stroke-width="1.5"/>
        <line x1="80" y1="55" x2="340" y2="55" stroke="currentColor" stroke-dasharray="3 3"/>
        <text x="135" y="95" fill="currentColor" font-family="JetBrains Mono" font-size="10">NAVE LUZ LIBRE 26m</text>
        <text x="385" y="100" fill="currentColor" font-family="JetBrains Mono" font-size="10">BLOQUE TÉCNICO</text>
      </svg>
    `
  },
  patiocordon: {
    code: "TC-05",
    category: "RECICLAJE & VIVIENDA",
    title: "Casa Patio en trama consolidada",
    location: "Montevideo, Uruguay",
    year: "2025",
    area: "215 m²",
    scale: "ESC 1:50",
    authors: "Arq. Juan Turban, Arq. Diego Coronel",
    materials: "Mampostería cerámica recuperada, perfiles IPN a la vista, pisos monolíticos y carpintería de cedro",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Operación de acupuntura doméstica sobre un padrón largo y estrecho entre medianeras. Mediante el vaciamiento estratégico del tercio central y la incorporación de una estructura liviana de acero, la vivienda multiplica su ganancia de sol norte y articula la vida cotidiana en torno a un patio con vegetación caduca.",
    svg: `
      <svg viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="30" width="140" height="98" stroke="currentColor" stroke-width="1.5"/>
        <rect x="230" y="75" width="110" height="53" stroke="currentColor" stroke-dasharray="3 3"/>
        <rect x="340" y="45" width="160" height="83" stroke="currentColor" stroke-width="1.5"/>
        <line x1="255" y1="22" x2="285" y2="68" stroke="currentColor" stroke-dasharray="2 2"/>
        <line x1="285" y1="22" x2="315" y2="68" stroke="currentColor" stroke-dasharray="2 2"/>
        <text x="242" y="65" fill="currentColor" font-family="JetBrains Mono" font-size="10">PATIO LUZ NORTE</text>
      </svg>
    `
  },
  mirador: {
    code: "TC-06",
    category: "HOSPITALIDAD & PAISAJE",
    title: "Pabellones de Basalto & Agua",
    location: "Salto, Uruguay",
    year: "2025",
    area: "640 m²",
    scale: "ESC 1:100",
    authors: "Arq. Juan Turban, Arq. Diego Coronel",
    materials: "Muros de piedra basáltica en seco, estructura de eucalipto grandis laminado y espejos de agua",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    description:
      "Conjunto de pabellones de descanso y contemplación termal que emergen de la geología basáltica del norte uruguayo. Los muros de piedra local anclan el proyecto a la topografía mientras que los entramados de madera laminada certificada resuelven las cubiertas ventiladas de rápida montaje en seco.",
    svg: `
      <svg viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="122" x2="560" y2="122" stroke="currentColor" stroke-width="1.5"/>
        <rect x="110" y="58" width="150" height="64" stroke="currentColor" stroke-width="1.5"/>
        <rect x="320" y="58" width="150" height="64" stroke="currentColor" stroke-width="1.5"/>
        <line x1="260" y1="115" x2="320" y2="115" stroke="currentColor" stroke-width="3"/>
        <text x="125" y="48" fill="currentColor" font-family="JetBrains Mono" font-size="10">MÓDULO BASALTO 01</text>
        <text x="335" y="48" fill="currentColor" font-family="JetBrains Mono" font-size="10">MÓDULO BASALTO 02</text>
      </svg>
    `
  }
};

/* ==========================================================================
   1. DARK MODE TWO-STATE TOGGLE & SYSTEM PREFERENCE SYNC
   ========================================================================== */
const initThemeControl = () => {
  const themeToggle = document.getElementById("themeToggle");
  const metaScheme = document.querySelector('meta[name="color-scheme"]');
  const systemDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const getEffectiveTheme = () => {
    const pinned = document.documentElement.dataset.theme;
    if (pinned === "light" || pinned === "dark") return pinned;
    return systemDarkQuery.matches ? "dark" : "light";
  };

  const applyTheme = (targetScheme) => {
    document.documentElement.dataset.theme = targetScheme;
    if (metaScheme) {
      metaScheme.content = targetScheme;
    }
    localStorage.setItem("color-scheme", targetScheme);
  };

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = getEffectiveTheme();
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  // Listen for OS theme changes when no explicit override is pinned
  systemDarkQuery.addEventListener("change", () => {
    const saved = localStorage.getItem("color-scheme");
    if (!saved && metaScheme) {
      metaScheme.content = "light dark";
    }
  });
};

/* ==========================================================================
   2. CAD BLUEPRINT MODE TOGGLE & MOBILE NAVIGATION DRAWER
   ========================================================================== */
const initHeaderControls = () => {
  const blueprintToggle = document.getElementById("blueprintToggle");
  if (blueprintToggle) {
    blueprintToggle.addEventListener("click", () => {
      const isActive = document.body.classList.toggle("cad-mode");
      blueprintToggle.setAttribute("aria-pressed", String(isActive));
    });
  }

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const expanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", String(!expanded));
      mobileNavDrawer.hidden = expanded;
    });

    mobileNavDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileNavDrawer.hidden = true;
      });
    });
  }
};

/* ==========================================================================
   3. ARCHITECTURAL ARCHIVE FILTERING
   ========================================================================== */
const initProjectFilters = () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  const filterStatus = document.getElementById("filterStatus");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.filter;

      filterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });

      let visibleCount = 0;
      cards.forEach((card) => {
        const matches = category === "all" || card.dataset.category === category;
        card.hidden = !matches;
        if (matches) visibleCount++;
      });

      if (filterStatus) {
        filterStatus.textContent = `MOSTRANDO ${visibleCount} ${visibleCount === 1 ? "PROYECTO" : "PROYECTOS"}`;
      }
    });
  });
};

/* ==========================================================================
   4. MODAL DIALOG WITH LIGHT-DISMISS & TOP-LAYER ANIMATION FALLBACKS
   ========================================================================== */
const initProjectDialog = () => {
  const dialog = document.getElementById("projectDialog");
  if (!dialog) return;

  const closeBtn = document.getElementById("closeDialogBtn");
  const consultBtn = document.getElementById("dialogConsultBtn");

  const els = {
    code: document.getElementById("dialogCode"),
    category: document.getElementById("dialogCategory"),
    title: document.getElementById("dialogProjectTitle"),
    description: document.getElementById("dialogDescription"),
    location: document.getElementById("dialogLocation"),
    year: document.getElementById("dialogYear"),
    area: document.getElementById("dialogArea"),
    scale: document.getElementById("dialogScale"),
    authors: document.getElementById("dialogAuthors"),
    materials: document.getElementById("dialogMaterials"),
    image: document.getElementById("dialogImage"),
    svgBox: document.getElementById("dialogSvgBlueprint")
  };

  // Feature detection for top-layer animations
  const supportsTopLayerAnimation =
    window.CSS &&
    CSS.supports("transition-behavior", "allow-discrete") &&
    CSS.supports("overlay", "auto");

  const closeDialogSafely = () => {
    if (!supportsTopLayerAnimation) {
      dialog.classList.add("is-closing");
      dialog.close();
      dialog.classList.remove("is-closing");
      return;
    }
    dialog.close();
  };

  const openProjectModal = (projectId) => {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    els.code.textContent = data.code;
    els.category.textContent = data.category;
    els.title.textContent = data.title;
    els.description.textContent = data.description;
    els.location.textContent = data.location;
    els.year.textContent = data.year;
    els.area.textContent = data.area;
    els.scale.textContent = data.scale;
    els.authors.textContent = data.authors;
    els.materials.textContent = data.materials;
    els.image.src = data.image;
    els.image.alt = `${data.title} — ${data.location}`;
    els.svgBox.innerHTML = data.svg;

    // MANDATORY: Open modal dialogs with showModal()
    dialog.showModal();
  };

  document.querySelectorAll("[data-open-project]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openProjectModal(trigger.dataset.openProject);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDialogSafely);
  }

  if (consultBtn) {
    consultBtn.addEventListener("click", () => {
      closeDialogSafely();
    });
  }

  // MANDATORY: Fallback for browsers without <dialog closedby="any"> support (e.g. Safari)
  if (!("closedBy" in HTMLDialogElement.prototype)) {
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;

      const rect = dialog.getBoundingClientRect();
      const isDialogContent =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (isDialogContent) return;

      closeDialogSafely();
    });
  }
};

/* ==========================================================================
   5. SCROLL-DRIVEN ANIMATIONS & SCROLL PROGRESS FALLBACKS
   ========================================================================== */
const initScrollRevealFallback = () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll Progress Bar Fallback for browsers without animation-timeline: scroll()
  if (!CSS.supports("animation-timeline", "scroll()")) {
    const progress = document.querySelector("#scrollProgress");
    if (progress) {
      window.addEventListener(
        "scroll",
        () => {
          const scrollable = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          const progressPercentage = scrollable > 0 ? scrolled / scrollable : 0;
          progress.style.transform = `scaleX(${progressPercentage})`;
        },
        { passive: true }
      );
    }
  }

  if (prefersReducedMotion) return;

  if (!CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = String(0.2 + entry.intersectionRatio * 0.8);
            entry.target.style.transform = `translateY(${Math.round((1 - entry.intersectionRatio) * 20)}px)`;
          }
        }
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20)
      }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });
  }
};

/* ==========================================================================
   5B. PRE-FEASIBILITY & SCOPE CONFIGURATOR
   ========================================================================== */
const initScopeEstimator = () => {
  const simType = document.getElementById("simType");
  const simArea = document.getElementById("simArea");
  const simAreaOutput = document.getElementById("simAreaOutput");
  const simDesignMonths = document.getElementById("simDesignMonths");
  const simBuildMonths = document.getElementById("simBuildMonths");
  const simDeliverablesList = document.getElementById("simDeliverablesList");
  const transferBtn = document.getElementById("transferToContactBtn");

  if (!simType || !simArea) return;

  const calculateEstimate = () => {
    const area = Number(simArea.value) || 240;
    const selectedOption = simType.options[simType.selectedIndex];
    const rate = Number(selectedOption?.dataset.rate) || 1;
    const systemInput = document.querySelector('input[name="simSystem"]:checked');
    const speedFactor = Number(systemInput?.dataset.speed) || 1;
    const scopeInput = document.querySelector('input[name="simScope"]:checked');
    const phases = Number(scopeInput?.dataset.phases) || 4;

    if (simAreaOutput) {
      simAreaOutput.textContent = `${area.toLocaleString("es-UY")} m²`;
    }

    const designMonths = Math.max(1.5, Math.min(6, +(1.5 + (area / 450) * rate).toFixed(1)));
    const buildMonths = Math.max(4, Math.round((4.5 + (area / 90) * rate) * speedFactor));

    if (simDesignMonths) {
      simDesignMonths.textContent = `${designMonths} meses`;
    }
    if (simBuildMonths) {
      simBuildMonths.textContent = phases === 4 ? `${buildMonths} meses` : "A licitar";
    }

    if (simDeliverablesList) {
      const items = [
        "Implantación solar, volumetría 3D y memoria descriptiva (ESC 1:200 / 1:100)",
        "Recaudos gráficos ejecutivos BIM, planillas de carpinterías y estructura (ESC 1:50)",
        "Detalles constructivos tectónicos y pliego de condiciones (ESC 1:20 / 1:5)"
      ];
      if (phases === 4) {
        items.push("Dirección de obra en sitio, control de certificaciones y entrega llave en mano (ESC 1:1)");
      }
      simDeliverablesList.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
    }
  };

  simType.addEventListener("change", calculateEstimate);
  simArea.addEventListener("input", calculateEstimate);
  document.querySelectorAll('input[name="simSystem"], input[name="simScope"]').forEach((radio) => {
    radio.addEventListener("change", calculateEstimate);
  });

  if (transferBtn) {
    transferBtn.addEventListener("click", () => {
      const area = simArea.value;
      const systemVal = document.querySelector('input[name="simSystem"]:checked')?.value || "";
      const scopeVal = document.querySelector('input[name="simScope"]:checked')?.value || "";

      const projectTypeSelect = document.getElementById("projectType");
      const projectMessage = document.getElementById("projectMessage");

      if (projectTypeSelect) {
        projectTypeSelect.value = simType.value;
      }
      if (projectMessage) {
        projectMessage.value = `Configuración preliminar: Superficie aprox. de ${area} m², sistema constructivo en ${systemVal}, alcance solicitado: ${scopeVal}.`;
      }

      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
      document.getElementById("clientName")?.focus();
    });
  }

  calculateEstimate();
};

/* ==========================================================================
   6. VALIDATE INPUT AFTER INTERACTION (:user-invalid Fallback & ARIA Sync)
   ========================================================================== */
const UserInvalidFallback = (() => {
  const dirtyState = new WeakMap();

  const updateState = (input) => {
    const isValid = input.checkValidity();
    input.classList.toggle("user-invalid-fallback", !isValid);
    input.classList.toggle("user-valid-fallback", isValid);

    if (!isValid) {
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }
  };

  const handleEvent = (event) => {
    const input = event.target;

    if (event.type === "reset") {
      const controls = input.elements || [];
      for (const control of controls) {
        dirtyState.delete(control);
        control.classList.remove("user-invalid-fallback", "user-valid-fallback");
        control.removeAttribute("aria-invalid");
      }
      return;
    }

    if (!input.checkValidity) return;

    if (event.type === "input" || event.type === "change") {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(input, state);
      if (state.hasBlurred) {
        updateState(input);
      }
    } else if (event.type === "blur") {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(input, state);
      if (state.hasInteracted) {
        updateState(input);
      }
    }
  };

  const init = (root = document) => {
    if (CSS.supports("selector(:user-invalid)")) return;
    root.addEventListener("blur", handleEvent, true);
    root.addEventListener("input", handleEvent);
    root.addEventListener("change", handleEvent);
    root.addEventListener("reset", handleEvent, true);
  };

  return { init };
})();

const initInquiryForm = () => {
  const form = document.getElementById("projectInquiryForm");
  const feedback = document.getElementById("formFeedback");
  if (!form) return;

  UserInvalidFallback.init(form);

  // Sync aria-invalid with native :user-invalid state
  const syncAria = (el) => {
    if (!el || typeof el.matches !== "function") return;
    if (CSS.supports("selector(:user-invalid)")) {
      el.setAttribute("aria-invalid", el.matches(":user-invalid") ? "true" : "false");
    }
  };

  form.addEventListener("blur", (e) => syncAria(e.target), true);
  form.addEventListener("input", (e) => {
    if (e.target && e.target.hasAttribute && e.target.hasAttribute("aria-invalid")) {
      syncAria(e.target);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) {
        firstInvalid.focus();
        syncAria(firstInvalid);
      }
      return;
    }

    const formData = new FormData(form);
    const clientName = formData.get("clientName");
    const projectType = formData.get("projectType");

    if (feedback) {
      feedback.hidden = false;
      feedback.textContent = `Gracias, ${clientName}. Recibimos tu consulta sobre «${projectType}». Los arquitectos Juan Turban y Diego Coronel se pondrán en contacto a la brevedad.`;
    }

    form.reset();
  });
};

/* ==========================================================================
   INITIALIZE APPLICATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  initThemeControl();
  initHeaderControls();
  initProjectFilters();
  initProjectDialog();
  initScrollRevealFallback();
  initScopeEstimator();
  initInquiryForm();
});

