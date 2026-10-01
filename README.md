# Hermandad de Cargadores de San Martín de Porres

Web institucional construida con Next.js y exportada como archivos estáticos para GitHub Pages.

## Desarrollo local

```bash
npm ci
npm run dev
```

## Despliegue

El workflow `.github/workflows/deploy.yml` compila el sitio al hacer push a `main` y publica `out/` en GitHub Pages. Configura **Settings > Pages > Build and deployment > Source** como **GitHub Actions**. Si la rama principal no se llama `main`, actualiza el filtro del workflow.

La subruta de Pages se detecta automáticamente. Para un dominio personalizado, define `NEXT_PUBLIC_SITE_URL` en **Settings > Secrets and variables > Actions > Variables** con el origen, por ejemplo `https://www.ejemplo.org`. El sitio se publica en la raíz del dominio; define también `NEXT_PUBLIC_BASE_PATH` solo si se usa una subruta.

Las imágenes se sirven desde el alojamiento externo definido en `app/data/assets.ts`; la web exportada no requiere un servidor de Next.js.
