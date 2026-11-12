/**
 * CORONEL | TURBAN (@turbancoronel) — Interactive Architectural Engine
 * "Exploramos la fusión entre precisión y fantasía en la Arquitectura"
 * Arq @juankturban & Arq @die.coronel
 */

const PROJECTS_DB = {
  ayelen: {
    code: "01 / SALTO · 28 HECTÁREAS",
    title: "Ayelén Venue",
    location: "Salto, Uruguay",
    area: "Predio de 28 ha citrícolas",
    authors: "Arq @juankturban & Arq @die.coronel",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85",
    description:
      "Espacio multipropósito concebido como una experiencia donde se fusionan arte, arquitectura y naturaleza en un predio rural de 28 hectáreas citrícolas en Salto. Pabellones de luz controlada, espejos de agua y recorridos paisajísticos.",
    svg: `
      <svg viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="675" fill="#eef3ff"/>
        <g stroke="#0047ff" stroke-width="1.6" opacity="0.9">
          <line x1="60" y1="530" x2="1140" y2="530" stroke-width="2.5"/>
          <rect x="170" y="250" width="860" height="280" fill="#ffffff" fill-opacity="0.6"/>
          <line x1="110" y1="250" x2="1090" y2="250" stroke-width="3.5"/>
          <line x1="390" y1="250" x2="390" y2="530" stroke-dasharray="6 6"/>
          <line x1="620" y1="250" x2="620" y2="530" stroke-dasharray="6 6"/>
          <line x1="840" y1="250" x2="840" y2="530" stroke-dasharray="6 6"/>
          <circle cx="600" cy="390" r="195" stroke-dasharray="5 5" opacity="0.55"/>
          <text x="175" y="222" fill="#d94e1f" font-family="JetBrains Mono" font-weight="500" font-size="15">CORTE LONGITUDINAL A-A' // AYELÉN VENUE (28 HA - SALTO)</text>
          <text x="175" y="568" fill="#0047ff" font-family="JetBrains Mono" font-weight="500" font-size="14">NIVEL ESPEJO DE AGUA ±0.00m · CORONEL | TURBAN (@turbancoronel)</text>
        </g>
      </svg>
    `,
  },
  centripeta: {
    code: "02 / MONTEVIDEO · 1° PREMIO ARQATÓN",
    title: "Proyecto «Centrípeta» — Plaza Lluís Companys",
    location: "Montevideo, Uruguay (Buceo)",
    area: "Espacio Público / BAQ Quito",
    authors: "Arq @juankturban & Arq @die.coronel",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    description:
      "Propuesta ganadora del 1° Premio en el Concurso Nacional Arqatón y seleccionada para representar a Uruguay en la Bienal Panamericana de Arquitectura de Quito (BAQ). Geometría radial que ordena flujos peatonales, topografía verde y anfiteatro urbano.",
    svg: `
      <svg viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="675" fill="#eef3ff"/>
        <g stroke="#0047ff" stroke-width="1.6" opacity="0.9">
          <circle cx="600" cy="338" r="245" stroke-width="2.5" fill="#ffffff" fill-opacity="0.55"/>
          <circle cx="600" cy="338" r="170" stroke-dasharray="8 6"/>
          <circle cx="600" cy="338" r="92"/>
          <line x1="120" y1="338" x2="1080" y2="338" stroke-dasharray="4 6"/>
          <line x1="600" y1="50" x2="600" y2="625" stroke-dasharray="4 6"/>
          <line x1="300" y1="110" x2="900" y2="566" opacity="0.45"/>
          <line x1="300" y1="566" x2="900" y2="110" opacity="0.45"/>
          <text x="140" y="95" fill="#d94e1f" font-family="JetBrains Mono" font-weight="500" font-size="15">PLANTA VECTORIAL CENTRÍPETA // 1° PREMIO NACIONAL ARQATÓN</text>
          <text x="140" y="618" fill="#0047ff" font-family="JetBrains Mono" font-weight="500" font-size="14">PLAZA LLUÍS COMPANYS · SELECCIÓN OFICIAL BAQ QUITO</text>
        </g>
      </svg>
    `,
  },
  nave: {
    code: "03 / PAYSANDÚ · RUTA 3 & AV. DE LAS AMÉRICAS",
    title: "Planta Industrial Metalúrgica",
    location: "Paysandú, Uruguay",
    area: "Gran Luz Estructural",
    authors: "Arq @juankturban & Arq @die.coronel",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    description:
      "Complejo industrial y nave metalúrgica ubicada estratégicamente en Ruta 3 y Av. de las Américas, Paysandú. Pórticos metálicos de gran luz libre, modulación racional de cerramientos e iluminación cenital controlada.",
    svg: `
      <svg viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="675" fill="#eef3ff"/>
        <g stroke="#0047ff" stroke-width="1.6" opacity="0.9">
          <polygon points="150,530 150,240 600,145 1050,240 1050,530" fill="#ffffff" fill-opacity="0.6"/>
          <line x1="150" y1="240" x2="1050" y2="240" stroke-dasharray="8 6"/>
          <line x1="375" y1="193" x2="375" y2="530" stroke-dasharray="5 5"/>
          <line x1="600" y1="145" x2="600" y2="530" stroke-dasharray="5 5"/>
          <line x1="825" y1="193" x2="825" y2="530" stroke-dasharray="5 5"/>
          <text x="150" y="115" fill="#d94e1f" font-family="JetBrains Mono" font-weight="500" font-size="15">PÓRTICO METÁLICO DE GRAN LUZ // RUTA 3 &amp; AV. DE LAS AMÉRICAS</text>
          <text x="150" y="575" fill="#0047ff" font-family="JetBrains Mono" font-weight="500" font-size="14">COTA +11.40m CUMBRERA · PAYSANDÚ, URUGUAY</text>
        </g>
      </svg>
    `,
  },
  casario: {
    code: "04 / LITORAL OESTE · RÍO URUGUAY",
    title: "Casa del Litoral",
    location: "Paysandú, Uruguay",
    area: "Vivienda Unifamiliar",
    authors: "Arq @juankturban & Arq @die.coronel",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    description:
      "Vivienda unifamiliar proyectada desde la tectónica del hormigón armado visto, piedra local y parasoles de lapacho. Una losa horizontal en voladizo enmarca el horizonte del litoral uruguayo y protege las galerías del asoleamiento oeste.",
    svg: `
      <svg viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="675" fill="#eef3ff"/>
        <g stroke="#0047ff" stroke-width="1.6" opacity="0.9">
          <rect x="130" y="210" width="940" height="28" fill="#0047ff" fill-opacity="0.16"/>
          <rect x="230" y="238" width="660" height="282" fill="#ffffff" fill-opacity="0.65"/>
          <line x1="80" y1="520" x2="1120" y2="520" stroke-width="2.5"/>
          <line x1="890" y1="238" x2="1070" y2="520" stroke-dasharray="6 6" stroke="#d94e1f"/>
          <text x="130" y="182" fill="#d94e1f" font-family="JetBrains Mono" font-weight="500" font-size="15">LOSA EN VOLADIZO H°A° +3.60m // CASA DEL LITORAL</text>
          <text x="130" y="562" fill="#0047ff" font-family="JetBrains Mono" font-weight="500" font-size="14">ARQ @JUANKTURBAN &amp; ARQ @DIE.CORONEL · @TURBANCORONEL</text>
        </g>
      </svg>
    `,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  // Dynamic Footer Year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // =========================================================================
  // 1. LUMINOUS LIGHT-FIRST THEME TOGGLE (Modern Web Guidance: dark-mode)
  // =========================================================================
  const themeToggle = document.getElementById("themeToggle");
  const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentAttr = root.dataset.theme || "light";
      const nextScheme = currentAttr === "dark" ? "light" : "dark";

      root.dataset.theme = nextScheme;
      if (colorSchemeMeta) colorSchemeMeta.content = nextScheme;
      localStorage.setItem("tc-color-scheme", nextScheme);
    });
  }

  // =========================================================================
  // 2. CUSTOM MAGNETIC ARCHITECTURAL CURSOR FOLLOWER
  // =========================================================================
  const archCursor = document.getElementById("archCursor");
  const cursorLabel = document.getElementById("cursorLabel");
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  if (archCursor && finePointer) {
    window.addEventListener(
      "pointermove",
      (e) => {
        archCursor.classList.add("is-visible");
        archCursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      },
      { passive: true }
    );

    document.querySelectorAll("[data-cursor]").forEach((el) => {
      el.addEventListener("pointerenter", () => {
        const text = el.getAttribute("data-cursor") || "VER";
        if (cursorLabel) cursorLabel.textContent = text;
        archCursor.classList.add("is-expanded");
      });
      el.addEventListener("pointerleave", () => {
        archCursor.classList.remove("is-expanded");
      });
    });
  }

  // =========================================================================
  // 3. ACTO I: PORTAL SCENE SWITCHER, X-RAY LOUPE & STRUCTURAL HOTSPOTS
  // =========================================================================
  const PORTAL_SCENES = {
    litoral: {
      code: "OBRA 01 // HORMIGÓN VISTO & AGUA",
      span: "VOLADIZO LIBRE 6.40m",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
      alt: "Pabellón contemporáneo de hormigón arquitectónico blanco, cristal y espejo de agua por CORONEL | TURBAN",
      hotspotTitle: "Losa en Voladizo Postensada (+4.80m)",
      hotspotSpec:
        "Hormigón armado visto con 6.40m de vuelo libre sin apoyos esquineros sobre el espejo de agua.",
    },
    ayelen: {
      code: "OBRA 02 // AYELÉN VENUE · SALTO",
      span: "PREDIO 28 HECTÁREAS",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=90",
      alt: "Ayelén Venue en Salto — Arquitectura pabellonal en 28 hectáreas citrícolas por CORONEL | TURBAN",
      hotspotTitle: "Pabellón Multipropósito en 28 Hectáreas",
      hotspotSpec:
        "Fusión de arquitectura, arte y paisaje rural citrícola en Salto con gran luz libre y galerías abiertas.",
    },
    centripeta: {
      code: "OBRA 03 // CENTRÍPETA · 1° PREMIO ARQATÓN",
      span: "SELECCIÓN BAQ QUITO",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=90",
      alt: "Proyecto Centrípeta — 1° Premio Nacional Arqatón en Plaza Lluís Companys por CORONEL | TURBAN",
      hotspotTitle: "Geometría Radial & Anfiteatro Urbano",
      hotspotSpec:
        "1° Premio Concurso Nacional Arqatón en Plaza Lluís Companys (Montevideo) y representante en la BAQ Quito.",
    },
  };

  const heroSpotlight = document.getElementById("heroSpotlight");
  const hudCoords = document.getElementById("hudCoords");
  const xrayLoupe = document.getElementById("xrayLoupe");
  const loupeCoordTag = document.getElementById("loupeCoordTag");
  const solarPhoto = document.getElementById("solarPhoto");
  const solarBlueprintPhoto = document.getElementById("solarBlueprintPhoto");
  const portalSceneCode = document.getElementById("portalSceneCode");
  const portalSceneSpan = document.getElementById("portalSceneSpan");
  const hotspotDetailTitle = document.getElementById("hotspotDetailTitle");
  const hotspotDetailSpec = document.getElementById("hotspotDetailSpec");

  document.querySelectorAll("[data-portal-scene]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.getAttribute("data-portal-scene");
      const scene = PORTAL_SCENES[key];
      if (!scene) return;

      document.querySelectorAll("[data-portal-scene]").forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      if (solarPhoto) {
        solarPhoto.src = scene.image;
        solarPhoto.alt = scene.alt;
      }
      if (solarBlueprintPhoto) solarBlueprintPhoto.src = scene.image;
      if (portalSceneCode) portalSceneCode.textContent = scene.code;
      if (portalSceneSpan) portalSceneSpan.textContent = scene.span;
      if (hotspotDetailTitle) hotspotDetailTitle.textContent = scene.hotspotTitle;
      if (hotspotDetailSpec) hotspotDetailSpec.textContent = scene.hotspotSpec;
    });
  });

  document.querySelectorAll(".arch-hotspot").forEach((spot) => {
    const activateSpot = () => {
      document.querySelectorAll(".arch-hotspot").forEach((s) => s.classList.remove("is-selected"));
      spot.classList.add("is-selected");
      const title = spot.getAttribute("data-hotspot-title");
      const spec = spot.getAttribute("data-hotspot-spec");
      if (hotspotDetailTitle && title) hotspotDetailTitle.textContent = title;
      if (hotspotDetailSpec && spec) hotspotDetailSpec.textContent = spec;
    };
    spot.addEventListener("click", activateSpot);
    spot.addEventListener("pointerenter", activateSpot);
  });

  if (heroSpotlight) {
    heroSpotlight.addEventListener(
      "pointermove",
      (e) => {
        const rect = heroSpotlight.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        heroSpotlight.style.setProperty("--mouse-x", `${x}px`);
        heroSpotlight.style.setProperty("--mouse-y", `${y}px`);

        if (xrayLoupe) {
          xrayLoupe.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1)`;
        }

        const cadX = Math.max(0, Math.min(1200, Math.round((x / rect.width) * 1200)));
        const cadY = Math.max(0, Math.min(720, Math.round((y / rect.height) * 720)));
        if (loupeCoordTag) {
          loupeCoordTag.textContent = `CAD 1:50 · X:${cadX} Y:${cadY}`;
        }

        if (hudCoords) {
          const nx = Math.max(0, Math.min(999, Math.round((x / rect.width) * 999)));
          const ny = Math.max(0, Math.min(999, Math.round((y / rect.height) * 999)));
          hudCoords.textContent = `${String(nx).padStart(3, "0")} · ${String(ny).padStart(3, "0")}`;
        }
      },
      { passive: true }
    );
  }

  // =========================================================================
  // 4. ACTO I: INTERACTIVE SOLAR HELIODON (DAY-TO-DUSK SUN SIMULATOR)
  // =========================================================================
  const sunSlider = document.getElementById("sunSlider");
  const sunTimeOutput = document.getElementById("sunTimeOutput");
  const hudSunAngle = document.getElementById("hudSunAngle");
  const sunArcOrb = document.getElementById("sunArcOrb");
  const sunArcHalo = document.getElementById("sunArcHalo");

  function updateSolarHeliodon(decimalHour) {
    const hours = Math.floor(decimalHour);
    const minutes = Math.round((decimalHour - hours) * 60);
    const timeStr = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

    // Map 6:00 -> 21:00 to solar angle, arc position & lighting mood
    const t = Math.max(0, Math.min(1, (decimalHour - 6) / 15));
    const beamAngle = Math.round(65 + t * 135);
    const elevationDeg = Math.round(Math.sin(t * Math.PI) * 68);

    // Quadratic Bezier point along M 14 46 Q 110 -12 206 46
    const omt = 1 - t;
    const arcX = omt * omt * 14 + 2 * omt * t * 110 + t * t * 206;
    const arcY = omt * omt * 46 + 2 * omt * t * -12 + t * t * 46;
    if (sunArcOrb) {
      sunArcOrb.setAttribute("cx", arcX.toFixed(1));
      sunArcOrb.setAttribute("cy", arcY.toFixed(1));
    }
    if (sunArcHalo) {
      sunArcHalo.setAttribute("cx", arcX.toFixed(1));
      sunArcHalo.setAttribute("cy", arcY.toFixed(1));
    }

    let warmth = 0.05;
    let brightness = 1.04;
    let contrast = 1.05;
    let phaseLabel = "SOL DIRECTO";

    if (decimalHour < 9) {
      warmth = 0.18;
      brightness = 0.98;
      phaseLabel = "AMANECER ESTE";
    } else if (decimalHour >= 9 && decimalHour < 15.5) {
      warmth = 0.04;
      brightness = 1.06;
      contrast = 1.06;
      phaseLabel = "SOL DIRECTO";
    } else if (decimalHour >= 15.5 && decimalHour <= 18.75) {
      warmth = 0.28;
      brightness = 1.02;
      contrast = 1.1;
      phaseLabel = "LUZ DORADA OESTE";
    } else {
      warmth = 0.14;
      brightness = 0.78;
      contrast = 1.18;
      phaseLabel = "CREPÚSCULO AZUL";
    }

    root.style.setProperty("--sun-angle", `${beamAngle}deg`);
    root.style.setProperty("--sun-warmth", String(warmth));
    root.style.setProperty("--sun-brightness", String(brightness));
    root.style.setProperty("--sun-contrast", String(contrast));

    if (sunTimeOutput) {
      sunTimeOutput.textContent = `${timeStr} HS · ${phaseLabel}`;
    }
    if (hudSunAngle) {
      hudSunAngle.textContent = `${timeStr} · ${elevationDeg}°`;
    }
  }

  if (sunSlider) {
    sunSlider.addEventListener("input", (e) => {
      updateSolarHeliodon(parseFloat(e.target.value));
    });
    updateSolarHeliodon(parseFloat(sunSlider.value));
  }

  // =========================================================================
  // 5. ACTO II: 3D VOLUMETRIC MAQUETA (ORBIT, CAMERA PRESETS, WIREFRAME & ISOLATOR)
  // =========================================================================
  const scene3d = document.getElementById("scene3d");
  const buildingRig = document.getElementById("buildingRig");
  const explodeToggleBtn = document.getElementById("explodeToggleBtn");
  const wireframeToggleBtn = document.getElementById("wireframeToggleBtn");
  const explodeRange = document.getElementById("explodeRange");

  let rotX = 60;
  let rotZ = -38;
  let isDragging3d = false;
  let userPinnedCamera = false;
  let startX = 0;
  let startY = 0;

  if (explodeToggleBtn && buildingRig) {
    explodeToggleBtn.addEventListener("click", () => {
      const exploded = buildingRig.classList.toggle("is-exploded");
      const gapVal = exploded ? 138 : 68;
      buildingRig.style.setProperty("--explode-gap", `${gapVal}px`);
      if (explodeRange) explodeRange.value = String(gapVal);
      explodeToggleBtn.setAttribute("aria-pressed", String(exploded));
      explodeToggleBtn.textContent = exploded
        ? "[ COMPACTAR MAQUETA 3D ]"
        : "[ EXPLOTAR MAQUETA 3D ]";
    });
  }

  if (explodeRange && buildingRig) {
    explodeRange.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      buildingRig.classList.add("is-exploded");
      buildingRig.style.setProperty("--explode-gap", `${val}px`);
      if (explodeToggleBtn) {
        explodeToggleBtn.setAttribute("aria-pressed", String(val > 95));
        explodeToggleBtn.textContent =
          val > 95 ? "[ COMPACTAR MAQUETA 3D ]" : "[ EXPLOTAR MAQUETA 3D ]";
      }
    });
  }

  if (wireframeToggleBtn && buildingRig) {
    wireframeToggleBtn.addEventListener("click", () => {
      const wf = buildingRig.classList.toggle("is-wireframe");
      wireframeToggleBtn.setAttribute("aria-pressed", String(wf));
      wireframeToggleBtn.textContent = wf
        ? "MODO: RAYOS-X CAD"
        : "MODO: ACRÍLICO & H°A°";
    });
  }

  // Camera Angle Presets (ISO, PLANTA, FACHADA, PEATÓN)
  const CAMERA_PRESETS = {
    iso: { x: 60, z: -38, scale: 1 },
    plan: { x: 18, z: 0, scale: 0.96 },
    front: { x: 78, z: 0, scale: 1.02 },
    low: { x: 72, z: -56, scale: 1.08 },
  };

  document.querySelectorAll("[data-cam]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const presetKey = btn.getAttribute("data-cam");
      const preset = CAMERA_PRESETS[presetKey];
      if (!preset || !buildingRig) return;

      userPinnedCamera = presetKey !== "iso";
      rotX = preset.x;
      rotZ = preset.z;
      buildingRig.style.setProperty("--rot-x", `${rotX}deg`);
      buildingRig.style.setProperty("--rot-z", `${rotZ}deg`);
      buildingRig.style.setProperty("--rig-scale", String(preset.scale));

      document.querySelectorAll("[data-cam]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });

  // Level Isolator Pills (TODOS, 03 CUBIERTA, 02 PLANTA NOBLE, 01 BASAMENTO)
  document.querySelectorAll("[data-filter-level]").forEach((pill) => {
    pill.addEventListener("click", () => {
      const level = pill.getAttribute("data-filter-level");
      if (!buildingRig) return;

      if (!level || level === "all") {
        delete buildingRig.dataset.isolate;
      } else {
        buildingRig.dataset.isolate = level;
      }

      document.querySelectorAll("[data-filter-level]").forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");
    });
  });

  if (scene3d && buildingRig) {
    scene3d.addEventListener("pointerdown", (e) => {
      isDragging3d = true;
      userPinnedCamera = true;
      startX = e.clientX;
      startY = e.clientY;
      buildingRig.classList.add("is-dragging");
      scene3d.setPointerCapture(e.pointerId);
    });

    scene3d.addEventListener("pointermove", (e) => {
      if (!isDragging3d) {
        // Subtle autonomous tilt when hovering without dragging
        const rect = scene3d.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        buildingRig.style.setProperty("--rot-z", `${(rotZ + relX * 16).toFixed(1)}deg`);
        buildingRig.style.setProperty("--rot-x", `${(rotX - relY * 12).toFixed(1)}deg`);
        return;
      }
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      rotZ = rotZ + dx * 0.42;
      rotX = Math.max(12, Math.min(82, rotX - dy * 0.28));
      startX = e.clientX;
      startY = e.clientY;

      buildingRig.style.setProperty("--rot-z", `${rotZ.toFixed(1)}deg`);
      buildingRig.style.setProperty("--rot-x", `${rotX.toFixed(1)}deg`);
    });

    const stopDrag = () => {
      isDragging3d = false;
      buildingRig.classList.remove("is-dragging");
    };
    scene3d.addEventListener("pointerup", stopDrag);
    scene3d.addEventListener("pointercancel", stopDrag);
  }

  // =========================================================================
  // 6. UNIFIED HIGH-FLOW SCROLL ENGINE (PORTAL + 3D + HORIZONTAL GALLERY)
  // =========================================================================
  const portalSection = document.getElementById("portal");
  const maquetaSection = document.getElementById("maqueta");
  const obrasSection = document.getElementById("obras");
  const horizontalTrack = document.getElementById("horizontalTrack");
  const activeSlideNum = document.getElementById("activeSlideNum");
  const hudElevation = document.getElementById("hudElevation");
  const rotatingEmblem = document.getElementById("rotatingEmblem");
  const compassEmblem = document.getElementById("compassEmblem");

  let lastScrollY = window.scrollY;
  let ticking = false;

  function onScrollFrame() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
    const globalProgress = Math.max(0, Math.min(1, scrollY / maxScroll));

    // A. Velocity Skew & Altimeter HUD
    const delta = scrollY - lastScrollY;
    lastScrollY = scrollY;
    const clampedSkew = Math.max(-6, Math.min(6, delta * 0.12));
    root.style.setProperty("--scroll-skew", `${clampedSkew.toFixed(2)}deg`);

    if (hudElevation) {
      const meters = (globalProgress * 28).toFixed(2);
      hudElevation.textContent = `+${meters}m`;
    }

    // Rotate official CORONEL | TURBAN emblems smoothly with scroll
    const deg = (scrollY * 0.14).toFixed(1);
    if (rotatingEmblem) rotatingEmblem.style.transform = `rotate(${deg}deg)`;
    if (compassEmblem) compassEmblem.style.transform = `rotate(${-deg * 0.5}deg)`;

    // B. Acto I: Portal Expansion & Split Kinetic Typography
    if (portalSection) {
      const rect = portalSection.getBoundingClientRect();
      const totalScrollable = Math.max(1, portalSection.offsetHeight - vh);
      const p = Math.max(0, Math.min(1, -rect.top / totalScrollable));

      const scale = 0.9 + p * 0.1;
      const radius = Math.round(28 * (1 - p));
      const shift = Math.round(p * 180);

      root.style.setProperty("--portal-scale", scale.toFixed(3));
      root.style.setProperty("--portal-radius", `${radius}px`);
      root.style.setProperty("--kinetic-shift", `${shift}px`);
    }

    // C. Acto II: Scroll-linked 3D Slab Expansion & Orbit
    if (maquetaSection && buildingRig && !isDragging3d) {
      const rect = maquetaSection.getBoundingClientRect();
      const total = Math.max(1, maquetaSection.offsetHeight - vh);
      const mProgress = Math.max(0, Math.min(1, -rect.top / total));

      if (!buildingRig.classList.contains("is-exploded")) {
        const dynamicGap = Math.round(52 + Math.sin(mProgress * Math.PI) * 86);
        buildingRig.style.setProperty("--explode-gap", `${dynamicGap}px`);
        if (explodeRange) explodeRange.value = String(dynamicGap);
      }
      if (!userPinnedCamera) {
        const scrollOrbitZ = -38 + mProgress * 56;
        rotZ = scrollOrbitZ;
        buildingRig.style.setProperty("--rot-z", `${scrollOrbitZ.toFixed(1)}deg`);
      }
    }

    // D. Acto III: Sticky Horizontal Scroll Gallery
    if (obrasSection && horizontalTrack) {
      if (window.innerWidth > 760) {
        const rect = obrasSection.getBoundingClientRect();
        const scrollable = Math.max(1, obrasSection.offsetHeight - vh);
        const hProgress = Math.max(0, Math.min(1, -rect.top / scrollable));

        const maxTranslate = Math.max(0, horizontalTrack.scrollWidth - window.innerWidth + 96);
        const translateX = -hProgress * maxTranslate;
        horizontalTrack.style.transform = `translate3d(${translateX.toFixed(1)}px, 0, 0)`;

        if (activeSlideNum) {
          const idx = Math.min(4, Math.max(1, Math.floor(hProgress * 3.99) + 1));
          activeSlideNum.textContent = `0${idx} / 04`;
        }
      } else {
        horizontalTrack.style.transform = "none";
      }
    }

    // Reset skew smoothly when scroll settles
    setTimeout(() => {
      root.style.setProperty("--scroll-skew", "0deg");
    }, 90);

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(onScrollFrame);
        ticking = true;
      }
    },
    { passive: true }
  );
  onScrollFrame();

  // =========================================================================
  // 7. MODAL <dialog closedby="any"> + BEFORE/AFTER CAD COMPARISON SLIDER
  // =========================================================================
  const dialog = document.getElementById("projectDialog");
  const closeDialogBtn = document.getElementById("closeDialogBtn");
  const comparisonViewer = document.getElementById("comparisonViewer");
  const comparisonSlider = document.getElementById("comparisonSlider");

  const dialogCode = document.getElementById("dialogCode");
  const dialogProjectTitle = document.getElementById("dialogProjectTitle");
  const dialogImage = document.getElementById("dialogImage");
  const dialogSvgBlueprint = document.getElementById("dialogSvgBlueprint");
  const dialogDescription = document.getElementById("dialogDescription");
  const dialogLocation = document.getElementById("dialogLocation");
  const dialogArea = document.getElementById("dialogArea");
  const dialogAuthors = document.getElementById("dialogAuthors");

  function openProjectModal(key) {
    const data = PROJECTS_DB[key];
    if (!data || !dialog) return;

    if (dialogCode) dialogCode.textContent = data.code;
    if (dialogProjectTitle) dialogProjectTitle.textContent = data.title;
    if (dialogImage) {
      dialogImage.src = data.image;
      dialogImage.alt = data.title;
    }
    if (dialogSvgBlueprint) dialogSvgBlueprint.innerHTML = data.svg;
    if (dialogDescription) dialogDescription.textContent = data.description;
    if (dialogLocation) dialogLocation.textContent = data.location;
    if (dialogArea) dialogArea.textContent = data.area;
    if (dialogAuthors) dialogAuthors.textContent = data.authors;

    if (comparisonSlider && comparisonViewer) {
      comparisonSlider.value = "52";
      comparisonViewer.style.setProperty("--split", "52%");
    }

    dialog.showModal();
  }

  document.querySelectorAll("[data-open-project]").forEach((card) => {
    card.addEventListener("click", () => {
      openProjectModal(card.getAttribute("data-open-project"));
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(card.getAttribute("data-open-project"));
      }
    });
  });

  if (closeDialogBtn && dialog) {
    closeDialogBtn.addEventListener("click", () => dialog.close());
  }

  // Fallback for browsers without native closedby="any" support (light-dismiss-a-dialog)
  if (dialog && !("closedBy" in dialog)) {
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
  }

  if (comparisonSlider && comparisonViewer) {
    comparisonSlider.addEventListener("input", (e) => {
      comparisonViewer.style.setProperty("--split", `${e.target.value}%`);
    });
  }
});
