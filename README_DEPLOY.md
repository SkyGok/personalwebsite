# GitHub Pages Deployment Guide

## Quick Fix for MIME Type Error

The error occurs because GitHub Pages needs the correct base path configuration.

## Steps to Deploy:

1. **Update vite.config.js** - Already done! The base path is set to `/personalwebsite/`

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under "Source", select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

3. **Build and Deploy:**
   ```bash
   npm run build
   ```

4. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

5. **Wait for GitHub Actions:**
   - Go to the **Actions** tab in your repository
   - Wait for the workflow to complete (usually 1-2 minutes)
   - Your site will be available at: `https://skygok.github.io/personalwebsite/`

## If your repository name is different:

If your repository is NOT named "personalwebsite", update the `base` in `vite.config.js`:
- If repo is `my-portfolio` → `base: '/my-portfolio/'`
- If repo is `skygok.github.io` → `base: '/'` (for custom domain)

## Troubleshooting:

- If you see 404 errors, make sure the base path matches your repository name exactly
- Clear your browser cache after deployment
- Check the Actions tab for any build errors

