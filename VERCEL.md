# Deploying to Vercel

## GitHub → Vercel (first time)

1. **Create a GitHub repository** (empty, no README if you will push existing code): [github.com/new](https://github.com/new). Pick a name (e.g. `clandestine-mfg-landing`).

2. **Push this project** from your machine (replace `YOUR_USER` and `YOUR_REPO`):

   ```bash
   cd /path/to/mfg
   git init
   git add .
   git commit -m "Initial commit: manufacturing landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
   git push -u origin main
   ```

   Use SSH if you prefer: `git@github.com:YOUR_USER/YOUR_REPO.git`

3. **Import on Vercel**: Sign in at [vercel.com](https://vercel.com) → **Add New…** → **Project** → **Import** your GitHub repo. Allow Vercel to access the repo if prompted.

4. **Build settings** (usually auto-detected from [`vercel.json`](vercel.json)):
   - **Framework Preset:** Vite  
   - **Build Command:** `npm run build`  
   - **Output Directory:** `dist`  
   - **Install Command:** `npm install`

5. Click **Deploy**. After it finishes, you get a `*.vercel.app` URL.

## Custom domain

1. In Vercel: your project → **Settings** → **Domains** → add your domain (e.g. `www.example.com` and/or `example.com`).

2. Vercel shows **DNS records** to add at your registrar (Namecheap, GoDaddy, Cloudflare, etc.):
   - Often **A** record for `@` to Vercel’s IPs, or **CNAME** for `www` to `cname.vercel-dns.com` (follow the exact values Vercel displays).

3. Wait for DNS to propagate (minutes to 48 hours). Vercel will provision HTTPS automatically when the domain verifies.

4. Optional: redirect apex → `www` (or the reverse) in the same Domains UI.

## Recommended (matches this repo)

Vercel detects **Vite** from `package.json` and runs `npm run build`, which outputs static files to **`dist/`**. [`vercel.json`](vercel.json) sets the same explicitly so dashboard overrides are not required.

`dist/` is listed in `.gitignore`; production builds run on Vercel, so you do not commit `dist/` to GitHub.

## Local parity

- **Development:** `npm run dev` (Vite dev server).
- **Production preview:** `npm run build` then `npm run preview`.

## Static-only alternative (no build)

If you ever need to deploy raw HTML at the repo root without a build step, use Framework **Other**, leave the build command empty, and set the output directory to **`.`**. The current setup is preferred so CSS/HTML are processed and `public/` assets are copied into `dist`.
