# Deploying to Netlify

This guide explains how to deploy the Fashion! Vue.js website to Netlify.

## Prerequisites

1. A Netlify account (free tier available)
2. The project codebase

## Deployment Steps

### Option 1: Deploy with Git (Recommended)

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Log in to your Netlify account
3. Click "New site from Git"
4. Select your repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Deploy Manually

1. Build the project locally:
   ```
   npm run build
   ```
2. This will create a `dist` folder with all production-ready files
3. Drag and drop the `dist` folder to your Netlify dashboard

## Configuration

The project includes a `netlify.toml` file with the following configuration:

- Build command: `npm run build`
- Publish directory: `dist`
- Redirects all routes to `index.html` for client-side routing
- Sets cache headers for assets
- Specifies Node.js version

## Image Optimization

Images are handled efficiently with:
- Proper file organization in the `assets` directory
- Optimized build configuration that separates image assets
- Caching headers for improved performance
- Support for both PNG and JPG formats

### Important Notes on Image Sizes

Some images in the project are quite large and should be optimized for production:

1. **Hero background image** (`src/assets/gp.png`) - This 17MB image should be compressed for web use
2. **Style Dashboard image** (`src/assets/style-dashboard.png`) - 520KB, consider compression
3. **Fashion Community image** (`src/assets/fashion-community.png`) - 366KB, consider compression

For optimal performance, consider:
- Using image compression tools like TinyPNG, ImageOptim, or Squoosh
- Converting PNG images to JPG where transparency is not needed
- Resizing images to appropriate dimensions for their display size
- Using modern formats like WebP for better compression

### Recommended Optimization Steps

1. Optimize large images before deployment:
   ```bash
   # Example using ImageMagick to resize and compress
   convert src/assets/gp.png -resize 1920x1080 -quality 80 src/assets/gp-optimized.jpg
   
   # Or using online tools like TinyPNG
   # Visit https://tinypng.com/ and upload your images
   ```

2. Update image references in the code if you change formats:
   ```javascript
   // In components where you change from PNG to JPG
   // Update the file extension accordingly
   ```

## Environment Variables

If you need to use environment variables, add them in the Netlify dashboard under:
Site settings > Build & deploy > Environment

## Troubleshooting

Common issues and solutions:

1. **Routing issues**: The `netlify.toml` redirects configuration handles client-side routing
2. **Asset loading**: All assets are properly bundled with hashed filenames to prevent caching issues
3. **Build failures**: Ensure all dependencies are correctly listed in `package.json`
4. **Large bundle size**: Optimize images as described in the Image Optimization section

## Custom Domain

To use a custom domain:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Follow the DNS configuration instructions provided by Netlify

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Documentation](https://vitejs.dev/guide/static-deploy.html#netlify)
- [Image Optimization Guide](https://developers.google.com/web/tools/lighthouse/audits/image-optimization)