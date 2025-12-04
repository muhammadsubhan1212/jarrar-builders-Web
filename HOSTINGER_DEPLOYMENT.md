# Automatic Deployment to Hostinger from GitHub

This guide will help you set up automatic deployment from GitHub to Hostinger for this React/Vite project.

You have **two options**:
- **Option A (recommended): Hostinger Git integration + GitHub Actions (no FTP, more secure)**
- **Option B: FTP deployment via GitHub Actions (uses FTP credentials)**

The repository is: `https://github.com/muhammadsubhan1212/jarrar-builders-Web.git`

---

## Option A (Recommended): Hostinger Git Integration + GitHub Actions

With this option:
- GitHub Actions builds your Vite app and pushes the static files to a `build` branch.
- Hostinger Git integration automatically pulls the `build` branch into `/public_html` when it receives a webhook.

### A.1 Configure Git in Hostinger

1. **Login to Hostinger**
   - Go to https://hpanel.hostinger.com and login.

2. **Open Git integration**
   - Go to **Hosting → Your Website → Advanced → GIT**.

3. **Create a new Git deployment**
   - **Repository address**: `https://github.com/muhammadsubhan1212/jarrar-builders-Web.git`
   - **Branch**: `build`
   - **Install path**: leave empty to deploy into `/public_html/`
   - Enable/Click **Auto-deployment** and copy the **Webhook URL** shown.

> If your repository is private, generate an SSH key in Hostinger Git screen and add it as a Deploy Key in GitHub (`Settings → Deploy keys`).

### A.2 Add the Webhook in GitHub

1. Go to your GitHub repo: `https://github.com/muhammadsubhan1212/jarrar-builders-Web`
2. Go to **Settings → Webhooks → Add webhook**
3. Paste the Hostinger **Webhook URL**
4. **Content type**: `application/x-www-form-urlencoded`
5. **Events**: choose **Just the push event**
6. Click **Add webhook**

Now Hostinger will auto-pull the `build` branch whenever you push to it.

### A.3 GitHub Actions workflow: build and push to `build` branch

A workflow is already created at:
- `.github/workflows/publish.yml`

This workflow:
1. Triggers on push to `main`
2. Installs dependencies with `npm ci`
3. Builds the Vite app (`npm run build`)
4. Uses `s0/git-publish-subdir-action` to push the `dist` folder to the `build` branch

You can see and edit it in GitHub under **Actions** or `.github/workflows/publish.yml`.

### A.4 Usage

1. Develop normally on the `main` branch.
2. When you push:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```
3. GitHub Actions will:
   - Build the project
   - Push the contents of `dist` to the `build` branch
4. Hostinger will receive the webhook and automatically:
   - Pull the latest `build` branch into `/public_html`
5. Your site will be updated with the new build.

### A.5 Troubleshooting (Git Integration)

- **Hostinger doesn’t update**
  - Check the **Git** section in Hostinger and make sure:
    - The repository URL is correct
    - The branch is set to `build`
    - Auto-deployment is enabled
  - Check Webhooks in GitHub and confirm delivery status.

- **GitHub Actions build fails**
  - Open the **Actions** tab in GitHub
  - Open the latest run for `Generate build and push to build branch for Hostinger`
  - Check logs for dependency or build errors.

---

## Option B: FTP Deployment via GitHub Actions

This option uses FTP credentials stored as GitHub secrets and a workflow that deploys via FTP.

### B.1 Prerequisites

- Hostinger hosting account with FTP access
- FTP account created in hPanel

### B.2 Get Your Hostinger FTP Credentials

1. **Login to Hostinger**
   - Go to https://hpanel.hostinger.com and login

2. **Get FTP Details**
   - Go to **Files → FTP Accounts** (or **File Manager**)
   - If you don't have an FTP account, create one:
     - Click **Create FTP Account**
     - Set a username and password
     - Note down the FTP host (usually `ftp.yourdomain.com` or an IP address)
   - You'll need:
     - **FTP Host**
     - **FTP Username**
     - **FTP Password**
     - **Deployment Path** (usually `/public_html/`)

### B.3 Set Up GitHub Secrets (FTP)

1. Go to your GitHub repository:
   - `https://github.com/muhammadsubhan1212/jarrar-builders-Web`

2. Open **Settings → Secrets and variables → Actions**

3. Add these secrets:
   - `HOSTINGER_FTP_HOST` → your FTP host
   - `HOSTINGER_FTP_USERNAME` → your FTP username
   - `HOSTINGER_FTP_PASSWORD` → your FTP password

### B.4 FTP Workflow File

The FTP-based workflow is already created at:
- `.github/workflows/deploy-hostinger.yml`

This workflow will:
1. Trigger on push to `main` branch
2. Install Node.js and dependencies
3. Build your React app (`npm run build`)
4. Deploy the `dist` folder to Hostinger via FTP into `/public_html/`

### B.5 Troubleshooting (FTP)

- **Connection refused / login failed**
  - Check FTP host, username, and password
  - Make sure FTP is enabled in Hostinger

- **Files not uploading**
  - Check that `server-dir` is correct (default `/public_html/`)
  - Verify the FTP account has write permissions

- **Build fails**
  - Check Node.js version and dependencies
  - Inspect GitHub Actions logs for the `Deploy to Hostinger` workflow

---

## Security Notes

- Never commit any credentials (FTP or SSH keys) into the repository
- Use GitHub Secrets for all sensitive data
- Prefer **Option A (Git integration)** over raw FTP when possible (more secure and simpler once configured)

---

After setup (either option):
- Every push to `main` will trigger a build in GitHub Actions
- Your site on Hostinger will stay up-to-date with the latest code


