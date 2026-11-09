# turban | coronel — Estudio de Arquitectura & Urbanismo

Sitio web oficial del estudio de arquitectura **turban | coronel** ([`@turbancoronel`](https://www.instagram.com/turbancoronel/)), fundado por los arquitectos **Juan Turban** y **Diego Coronel** (Montevideo & Salto, Uruguay).

## Características principales

- **Archivo de Obras & Concursos**: Galería filtrable por tipología (*Vivienda*, *Cultural & Paisaje*, *Espacio Público & Urbano*), incluyendo **Ayelén Venue** (Salto) y el **Proyecto «Centrípeta» — Plaza Lluís Companys** (1° Premio Nacional Arqatón 2023 y representación en la Bienal Panamericana de Arquitectura de Quito - BAQ).
- **Modo Vista CAD**: Conmutador interactivo que superpone ejes, cotas y grillas técnicas sobre el diseño editorial.
- **Fichas Técnicas con Esquemas SVG**: Modal nativo `<dialog closedby="any">` con diagramas axonométricos y cortes constructivos para cada proyecto.
- **Simulador de Prefactibilidad & Alcance**: Herramienta interactiva para estimar plazos de anteproyecto/ejecutivo, tiempos de obra y entregables según $\text{m}^2$, tipología y sistema constructivo, vinculada directamente al formulario de contacto.
- **Tema Claro / Oscuro Adaptativo**: Basado en `color-scheme: light dark` y `light-dark()` sin destellos de carga (FOUC).

## Despliegue en Vercel

El proyecto es estático de cero dependencias de compilación y cuenta con configuración lista en `vercel.json`:

1. Importar el repositorio [`Simonmfo/turban-coronel`](https://github.com/Simonmfo/turban-coronel) en [Vercel](https://vercel.com/new).
2. Hacer clic en **Deploy**.

