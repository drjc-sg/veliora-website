# Veliora 1815 OÜ

A minimalist single-page website for the boutique advisory firm Veliora 1815 OÜ.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- `next/font` (Cormorant Garamond + Inter)

## Local development

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deployment

The site is deployed on Vercel and rebuilds automatically on every push to `main`.

## Connecting a custom domain

1. In the Vercel dashboard, open the project and go to **Settings → Domains**.
2. Click **Add** and enter your domain (e.g. `veliora1815.com`).
3. Vercel will display the DNS records you need to set at your registrar:
   - For an apex domain (`example.com`): an `A` record pointing to `76.76.21.21`.
   - For a `www` subdomain: a `CNAME` record pointing to `cname.vercel-dns.com`.
4. Add those records at your domain registrar (e.g. Namecheap, GoDaddy, Cloudflare). DNS usually propagates within a few minutes; Vercel auto-issues an SSL certificate once it verifies the records.
5. Optionally, in **Settings → Domains**, set the primary domain (apex vs. www) and configure a redirect for the other.
