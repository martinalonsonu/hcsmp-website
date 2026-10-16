# Hermandad de Cargadores de San Martín de Porres

Sitio institucional de la Hermandad de Cargadores de San Martín de Porres de Huacho. Está construido con Next.js y se publica como sitio estático en GitHub Pages, con el dominio [hermandadsanmartinhuacho.org](https://hermandadsanmartinhuacho.org/).

## Tecnologías

- Next.js 16 con App Router y exportación estática.
- React y TypeScript en modo estricto.
- Tailwind CSS para estilos.
- npm y `package-lock.json` para instalar dependencias.
- GitHub Actions y GitHub Pages para la publicación.

La exportación estática significa que la web publicada no necesita un servidor de Next.js en tiempo de ejecución. Las rutas dinámicas deben conocerse y generarse durante la compilación.

## Requisitos y comandos

Usa Node.js 22, igual que el workflow de despliegue. Desde la raíz del repositorio:

```bash
npm ci
npm run dev
```

El servidor local muestra la dirección en la que puedes revisar los cambios. Los comandos disponibles son:

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo local. |
| `npm run lint` | Revisa el código con ESLint. |
| `npm run build` | Compila y exporta el sitio estático en `out/`. |

Antes de publicar cambios, ejecuta lint y build. No edites `out/`: es una salida generada y se reemplaza en cada compilación. El proyecto no define actualmente un comando de pruebas automatizadas.

## Pruebas automatizadas

Las pruebas usan Vitest, React Testing Library y jsdom. Ejecuta `npm run test` para correr la suite o `npm run test:coverage` para correrla y generar el reporte en `coverage/`. Este segundo comando exige al menos 75% de cobertura en branches, funciones, lÃ­neas y sentencias.

El workflow de GitHub Actions ejecuta `npm run test:coverage` antes del build. Si una prueba falla o la cobertura queda bajo el umbral, el build y el despliegue se detienen. AÃ±ade las pruebas junto a los dominios existentes en `tests/` y mantÃ©n cubiertos los casos lÃ­mite y las ramas condicionales.

## Estructura del proyecto

| Ruta | Contenido |
| --- | --- |
| `app/` | Rutas, layouts, metadatos por página, sitemap y robots. |
| `components/` | Componentes de interfaz organizados por página o área funcional. |
| `components/shared/` | Elementos compartidos, como encabezado, pie de página y controles comunes. |
| `components/seo/` | Componentes para datos estructurados y SEO. |
| `models/` | Contenido y datos que consume la interfaz, agrupados por página o dominio. |
| `models/seo/` | Configuración del sitio y definiciones de esquemas estructurados. |
| `hooks/` | Hooks reutilizables con estado o comportamiento de React. |
| `utils/` | Funciones independientes y reutilizables. |
| `public/` | Archivos locales públicos, como documentos y audio. |
| `.github/workflows/` | Automatización de compilación y despliegue. |

El alias TypeScript `@/*` apunta a la raíz del proyecto. Por ejemplo, puedes importar un módulo con `@/models/home/...`.

### Rutas principales

- `app/page.tsx`: página de inicio.
- `app/contacto/page.tsx`: contacto.
- `app/vida/page.tsx`: vida de hermandad.
- `app/[...slug]/page.tsx`: páginas institucionales creadas desde el modelo de hermandad.
- `app/blog/[slug]/page.tsx`: artículos del blog.
- `app/layout.tsx`: estructura global, fuentes, navegación y metadatos base.
- `app/sitemap.ts` y `app/robots.ts`: sitemap y directivas para rastreadores.

## Cómo modificar contenido y páginas

La organización separa los datos de presentación. Para actualizar textos, listados o contenido editorial, empieza por el archivo correspondiente en `models/`; para cambiar su presentación, modifica el componente de `components/` usado por esa página.

- **Inicio:** datos en `models/home/`; secciones visuales en `components/home/`.
- **Hermandad e historia:** páginas en `models/hermandad/institutional-pages.ts`; presentación en `components/hermandad/`. Cada entrada define su ruta y contenido, y la ruta dinámica genera las páginas durante el build.
- **Blog:** artículos en `models/blog/news.ts`; presentación en los componentes de blog/hermandad y ruta `app/blog/[slug]/page.tsx`. Usa un `slug` único y completa título, resumen, fecha, categoría y contenido. Las fechas deben reflejar información confirmada.
- **Contacto:** datos en `models/contacto/`; interfaz en `components/contacto/`.
- **Vida de hermandad:** contenido en `models/vida/`; interfaz en `components/vida/`.
- **Archivo:** listados en `models/archivo/`; interfaz en `components/archivo/`.
- **San Martín y festividad:** contenido en `models/san-martin/` y `models/fiesta/`; componentes en las carpetas homónimas.
- **Navegación:** enlaces compartidos en `models/shared/navigation.ts`; estructura visual en los componentes compartidos.

### Añadir una sección a una página existente

1. Añade o actualiza los datos en el modelo de esa página. Si no hay datos separados todavía, crea un archivo en la carpeta adecuada de `models/`.
2. Crea el componente de la sección dentro de la carpeta correspondiente a la página. Mantén cada componente centrado en una responsabilidad y reutiliza los componentes compartidos cuando proceda.
3. Incluye el componente en la vista o página que compone las secciones, conservando el orden y los estilos actuales.
4. Revisa los estados adaptables, los enlaces, el texto alternativo de imágenes y el comportamiento con teclado.

### Añadir una página institucional

Añade una entrada a `models/hermandad/institutional-pages.ts` con una ruta única, título, descripción y secciones. La ruta dinámica la incorpora a la exportación estática. Si la página requiere una presentación distinta, adapta o crea el componente de vista correspondiente en `components/hermandad/`. Revisa también sus metadatos y que aparezca en la navegación cuando corresponda.

### Añadir un artículo

Añade una entrada en `models/blog/news.ts` con un `slug` único, título, resumen, fecha y contenido. La página se genera desde la ruta dinámica del blog. Incluye imágenes con texto alternativo y enlaces válidos; no inventes fechas ni datos históricos.

### Crear una ruta completamente nueva

Crea su archivo `page.tsx` bajo `app/` y añade metadatos propios. Para rutas dinámicas, proporciona los parámetros estáticos que Next.js debe compilar y confirma que la página quede incluida en el sitemap. El hosting actual es estático, así que una página que dependa de datos disponibles solo al recibir una petición requiere cambiar la arquitectura de publicación.

## Interfaz y recursos

- Los estilos globales están en `app/globals.css`; conserva allí solo reglas globales y coloca estilos específicos junto a los componentes según el patrón ya usado.
- Mantén la interfaz adaptable y respeta el diseño, interacciones y navegación existentes al hacer refactors.
- Guarda archivos locales en `public/` y referencia sus rutas públicas. Los documentos y audios locales se incluyen en la exportación.
- Las URL de recursos remotos se centralizan en `models/shared/assets.ts`. Usa sus helpers en vez de duplicar direcciones de medios.
- La configuración actual de Next.js muestra imágenes sin optimización del servidor, compatible con exportación estática.

## SEO y datos estructurados

- La configuración compartida del sitio está en `models/seo/site.ts`; allí se centralizan el dominio canónico y valores usados por SEO.
- Los esquemas están en `models/seo/schemas.ts` y se insertan mediante `components/seo/json-ld.tsx`.
- Define metadatos únicos y fieles al contenido de cada página: título, descripción y URL canónica. Para páginas institucionales, completa esos campos en el modelo de contenido que genera la página.
- Mantén `app/sitemap.ts` y `app/robots.ts` alineados con las rutas publicadas.
- Los datos estructurados deben corresponder a información visible y verificable en la página. Evita agregar fechas, direcciones, contactos o valoraciones no confirmados.

## Despliegue

El workflow `.github/workflows/deploy.yml` compila y publica `out/` en GitHub Pages al actualizar la rama `main` (también permite ejecución manual). En la configuración del repositorio, establece **Settings → Pages → Build and deployment → Source** en **GitHub Actions**.

El workflow configura el dominio de producción mediante `NEXT_PUBLIC_SITE_URL` y `NEXT_PUBLIC_BASE_PATH`. Si cambia el dominio, actualiza esos valores en el workflow y en la configuración del dominio de GitHub Pages. El sitio está configurado para servirse desde la raíz del dominio personalizado; para publicarlo bajo una subruta de proyecto, ajusta también la configuración `basePath` de Next.js y comprueba los enlaces y recursos exportados.

## Guía para contribuir

1. Identifica la página y modifica su modelo o componente correspondiente.
2. Mantén datos, UI, lógica reutilizable y SEO en sus ubicaciones respectivas.
3. Ejecuta `npm run lint` y `npm run build`.
4. Comprueba localmente las rutas modificadas y revisa que la exportación incluya sus páginas y recursos.
5. Envía los cambios a `main` para activar el workflow de GitHub Pages.

Al compilar, Next.js puede necesitar descargar las fuentes declaradas en el proyecto. Si la compilación falla al resolverlas, verifica la conexión de red del entorno de build.
