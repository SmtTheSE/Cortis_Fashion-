# Fashion! - Cortis Style Fashion E-commerce

This repository contains a Vue.js e-commerce website for Cortis-inspired fashion.

## Project Structure

The Vue.js application is located in the `greenlife-vue` directory.

## Deployment

To deploy this project on Netlify, you have two options:

### Option 1: Using the root-level configuration (Recommended)
The repository now includes a root-level package.json and netlify.toml that will automatically handle the build process.

### Option 2: Configure in Netlify UI
If you prefer to configure directly in the Netlify UI:
1. Set the base directory to `greenlife-vue/`
2. Set the build command to `npm run build`
3. Set the publish directory to `greenlife-vue/dist/`

## Local Development

To run the project locally:

```bash
cd greenlife-vue
npm install
npm run dev
```

To build the project for production:

```bash
cd greenlife-vue
npm run build
```

Or from the root directory:

```bash
npm run build
```

## Important Notes

1. The `node_modules` directories are excluded from the repository via `.gitignore` files
2. Netlify will perform a clean install using `npm ci` to avoid platform-specific binary issues
3. Make sure to commit any changes to `package-lock.json` files when dependencies are updated