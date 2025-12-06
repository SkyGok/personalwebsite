# Fix GitHub Pages MIME Type Error

## The Problem
GitHub Pages is trying to load `/src/main.jsx` directly, which means it's serving source files instead of built files.

## Solution Steps:

### 1. Check GitHub Pages Settings
Go to your repository: https://github.com/SkyGok/personalwebsite
- Click **Settings** → **Pages**
- Under **Source**, make sure it says **"GitHub Actions"** (NOT "Deploy from a branch")
- If it says "Deploy from a branch", change it to **"GitHub Actions"**
- Save the settings

### 2. Check GitHub Actions Workflow
- Go to the **Actions** tab in your repository
- Make sure the workflow ran successfully after your last push
- If it failed, check the error logs

### 3. Access the Correct URL
Your site should be at: **https://skygok.github.io/personalwebsite/**

NOT at: https://skygok.github.io/ (that's the root)

### 4. If Still Not Working - Manual Fix:

If GitHub Actions isn't working, you can deploy manually:

```bash
# Build the project
npm run build

# Create a gh-pages branch with dist folder
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

# Switch back to main
git checkout main
```

Then in GitHub Settings → Pages, select "Deploy from a branch" and choose `gh-pages` branch.

### 5. Clear Browser Cache
After deployment, clear your browser cache or use incognito mode to see the changes.

