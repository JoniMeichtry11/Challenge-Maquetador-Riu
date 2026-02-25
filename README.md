# Challenge Maquetador - Riu News Portal

Este proyecto es una solución al reto técnico propuesto por Riu.

## Arquitectura y Decisiones Técnicas

### 1. Atomic Design como Sistema de Diseño

Implementé la metodología **Atomic Design** para organizar la interfaz. Esto permite que el sistema de diseño sea predecible y que los componentes sean altamente reutilizables:

- **Atoms (`a-`)**: Componentes base (Icono, Imagen, Botón) que no se pueden dividir más.
- **Molecules (`m-`)**: Combinaciones de átomos que forman unidades funcionales (NewsCard, ArticleCardFeatured).
- **Organisms (`o-`)**: Secciones complejas de la página que combinan moléculas y átomos (Hero, NewsGrid, FeaturedArticles).
- **Pages (`p-`)**: Vistas finales que ensamblan los organismos (Home).

### 2. BEM y Tailwind 4

El proyecto comenzó con un enfoque **Utility-First** (clases directas de Tailwind) para prototipar rápidamente la estructura y el layout según el diseño de Figma.

Una vez validada la fidelidad visual, realicé una **refactorización estructural** hacia **BEM + SCSS (@apply)**. 

### 3. Rendimiento y Assets

- **Imágenes Fluidas**: Implementación de contenedores con `aspect-ratio` para garantizar un layout estable mientras las imágenes cargan.
- **Componentes Standalone**: Arquitectura basada en Angular 20 para una carga más eficiente y modular.
- **Mobile First**: Desarrollo centrado en la respuesta fluida desde dispositivos móviles hasta pantallas Ultra-Wide.

### 4. Stack Tecnológico

- **Framework**: Angular 20 (Standalone Components).
- **Estilos**: Tailwind CSS 4 + SCSS (Metodología BEM).
- **Iconografía**: SVG optimizado.
- **Accesibilidad**: Uso de HTML5 semántico y roles ARIA para una navegación inclusiva.
