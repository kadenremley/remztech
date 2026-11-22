# RemzTech Website

Handbuilt software solutions website for RemzTech — built with Next.js 14, TypeScript, Tailwind CSS, and Decap CMS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS (custom RemzTech color palette)
- **Animations**: Framer Motion
- **CMS**: Decap CMS (Netlify CMS) - Git-based, free
- **Hosting**: Vercel (free tier)
- **Forms**: Netlify Forms (free)
- **Icons**: Lucide React

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| White | `#FFFFFF` | Backgrounds |
| Amber | `#F1B24A` | Primary CTAs, accents |
| Dark Teal | `#164A41` | Headers, footers, primary text |
| Forest | `#4D774E` | Secondary buttons, cards |
| Sage | `#9DC88D` | Light backgrounds, hover states |

## 📁 Project Structure

```
remztech/
├── public/
│   ├── admin/              # Decap CMS admin UI
│   │   ├── config.yml      # CMS configuration
│   │   └── index.html      # CMS entry point
│   └── images/             # CMS media uploads
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── page.tsx        # Home
│   │   ├── about/          # About Us
│   │   ├── services/       # Services index + detail pages
│   │   ├── journey/        # Portfolio/Case Studies
│   │   └── contact/        # Contact form
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   ├── layout/         # Header, Footer, Container
│   │   └── animations/     # ScrollReveal, Stagger
│   ├── content/            # Decap CMS collections (YAML/MD)
│   ├── lib/                # Utilities, constants, icons
│   └── styles/             # Global CSS, Tailwind config
├── .env.example            # Environment variables template
├── next.config.js          # Security headers, CSP, image config
├── tailwind.config.ts      # Custom theme with RemzTech colors
└── package.json
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start

# Lint
npm run lint

# Format
npm run format
```

## 🔐 Security Features

- **Zero secrets in code** — All config via Vercel Environment Variables
- **Strict CSP** — Configured in `next.config.js`
- **Security headers** — X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS
- **Input validation** — Zod schemas for all forms
- **XSS protection** — React's built-in escaping + DOMPurify for CMS content
- **Form spam protection** — Honeypot field + Netlify Forms spam filtering

## 📝 Content Management (Decap CMS)

1. Deploy to Netlify or Vercel with Netlify Identity enabled
2. Enable **Git Gateway** in Netlify dashboard
3. Invite yourself as a user in Netlify Identity
4. Access CMS at `https://remztech.co.za/admin`
5. Edit content: Services, Case Studies, Testimonials, Site Settings

### Collections
- **Settings** — Global site content (hero, contact info, etc.)
- **Services** — All 6 services with full detail pages
- **Case Studies** — Portfolio projects with industry filtering
- **Testimonials** — Client quotes for trust signals
- **Blog Posts** — Optional articles/insights

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables from `.env.example`
4. Deploy — automatic HTTPS, global CDN, custom domain support

### Custom Domain (remztech.co.za)
1. Add domain in Vercel dashboard
2. Configure DNS:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`
3. Vercel provisions SSL automatically

## 📞 Contact Configuration

| Channel | Value |
|---------|-------|
| WhatsApp | `+27 69 753 0923` |
| Email | `remztech@gmail.com` |
| Phone | `+27 69 753 0923` |
| Location | Durban, KwaZulu-Natal, South Africa |

## 🎯 Key Features

- ✅ **5 Pages**: Home, About, Services (6 detail pages), Journey, Contact
- ✅ **Mobile-first responsive** design
- ✅ **Smooth animations** with Framer Motion
- ✅ **Decap CMS** for non-technical content editing
- ✅ **Security hardened** with CSP, headers, validation
- ✅ **Accessible** — WCAG 2.1 AA compliant
- ✅ **SEO optimized** — Meta tags, Open Graph, sitemap
- ✅ **Free hosting** on Vercel (only pay for domain)

## 📄 License

MIT License — Built for RemzTech