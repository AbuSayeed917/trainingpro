# Deployment Instructions for GitHub Pages

## Project Status
✅ **Build Successful** - Static export generated in `/out` directory
✅ **Code pushed to GitHub** - https://github.com/AbuSayeed917/trainingpro.git
✅ **Configuration Complete** - next.config.mjs configured for GitHub Pages

## GitHub Pages Setup (Manual Steps Required)

Since workflow files cannot be pushed via OAuth, you need to manually configure GitHub Pages:

### Option 1: Using GitHub Actions (Recommended)

1. **Go to your repository**: https://github.com/AbuSayeed917/trainingpro

2. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"

3. **Create the workflow file**:
   - Go to the "Actions" tab
   - Click "New workflow" or "set up a workflow yourself"
   - Create a file named `.github/workflows/deploy.yml`
   - Paste this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build with Next.js
        run: npm run build

      - name: Add .nojekyll file
        run: touch ./out/.nojekyll

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. **Commit the workflow** and push to trigger the deployment

### Option 2: Manual Deployment (Alternative)

1. **Build the project locally** (already done):
   ```bash
   npm run build
   ```

2. **Push to gh-pages branch**:
   ```bash
   cd out
   git init
   git add -A
   git commit -m "Deploy to GitHub Pages"
   git remote add origin https://github.com/AbuSayeed917/trainingpro.git
   git push -f origin HEAD:gh-pages
   ```

3. **Configure GitHub Pages**:
   - Go to Settings → Pages
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" and "/ (root)"
   - Save

## Your Site Will Be Available At

**🌐 https://abusayeed917.github.io/trainingpro/**

## Configuration Details

- **Base Path**: `/trainingpro` (configured in next.config.mjs)
- **Static Export**: Enabled (`output: 'export'`)
- **Image Optimization**: Disabled for static export
- **Build Output**: `/out` directory

## Testing Locally

To test the built site locally:

```bash
# Install a simple HTTP server
npm install -g serve

# Serve the out directory with the correct base path
serve out -p 3000
```

Then visit: http://localhost:3000

## Troubleshooting

### Images not loading
- Make sure `unoptimized: true` is set in next.config.mjs
- Check that image URLs are absolute (starting with https://)

### 404 errors
- Verify the basePath in next.config.mjs matches your repository name
- Check that all internal links use relative paths

### Build fails
- Run `npm run build` locally to check for errors
- Fix any TypeScript or linting errors before deploying

## Project Structure

```
/out              # Static build output (ready for deployment)
/src              # Source code
  /app            # Next.js app router pages
  /components     # Reusable components
  /styles         # Global styles
```

## Need Help?

If you encounter issues:
1. Check the GitHub Actions logs in the "Actions" tab
2. Verify all configuration files are correct
3. Test the build locally first with `npm run build`
