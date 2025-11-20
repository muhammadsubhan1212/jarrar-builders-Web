# Deployment Guide

## Quick Deploy to Vercel

### Method 1: Using Vercel CLI (Fastest)

1. **Login to Vercel:**
   ```bash
   vercel login
   ```
   This will open your browser for authentication.

2. **Deploy:**
   ```bash
   vercel --yes
   ```
   Follow the prompts. Your site will be live in seconds!

3. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Website (No CLI needed)

1. **Push to GitHub:**
   - Create a repository on GitHub
   - Run these commands:
   ```bash
   git remote add origin YOUR_GITHUB_REPO_URL
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign up/Login (free)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite - just click "Deploy"
   - Your site will be live in 1-2 minutes!

### Method 3: Other Hosting Options

**Netlify:**
- Similar to Vercel
- Go to https://netlify.com
- Drag & drop your `dist` folder after running `npm run build`

**GitHub Pages:**
- Requires additional configuration
- Good for static sites

## Build for Production

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

This builds and previews your production site locally.

## Environment Variables

If you need environment variables, add them in:
- Vercel Dashboard → Project Settings → Environment Variables
- Or create a `.env` file (don't commit sensitive data!)

## Custom Domain

After deployment, you can add a custom domain in:
- Vercel Dashboard → Project Settings → Domains

