# Verden Farms 🌱

A modern, responsive, production-ready website for **Verden Farms** — an agritech
company building climate-smart vertical farming systems for African environments.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- ⚡ **Next.js 14 App Router** — fast, SEO-friendly, deploy-ready
- 🎨 **Tailwind CSS** with a custom Verden Farms brand theme (deep farm green / cream / lime accent)
- 🎬 **Framer Motion** — tasteful entrance, scroll, hover and counter animations
- 📱 **Mobile-first & fully responsive** across all breakpoints
- 🔍 **SEO optimised** — metadata, Open Graph, Twitter cards, JSON-LD, sitemap & robots
- ♿ **Accessible** — semantic HTML, skip link, focus states, reduced-motion support
- 🧩 **Reusable component architecture** with clean folder structure
- 🖼️ **Optimised image placeholders** ready to swap for real photography
- ⬆️ Sticky navbar, smooth scrolling, scroll-to-top button, animated counters
- 💬 WhatsApp + email contact integration

---

## 📂 Project Structure

```
verden-farms/
├── app/
│   ├── layout.js          # Root layout: SEO metadata, fonts, navbar/footer
│   ├── page.js            # Home page composing all sections
│   ├── globals.css        # Tailwind + base styles
│   ├── icon.svg           # Favicon
│   ├── robots.js          # Dynamic robots.txt
│   └── sitemap.js         # Dynamic sitemap.xml
├── components/
│   ├── Navbar.js          # Sticky responsive nav + mobile menu
│   ├── Hero.js            # Hero with animated tower graphic
│   ├── ImpactHighlights.js# Animated stat counters
│   ├── About.js           # Split layout
│   ├── Services.js        # Hover-animated service cards
│   ├── WhyVerden.js       # Animated progress bars
│   ├── OurImpact.js       # Green gradient impact grid
│   ├── Projects.js        # Timeline + image carousel
│   ├── Team.js            # Team cards
│   ├── FAQ.js             # Accordion
│   ├── Gallery.js         # Responsive image grid
│   ├── Partners.js        # Logo placeholders
│   ├── Contact.js         # Form + WhatsApp/email
│   ├── FinalCTA.js        # Closing call to action
│   ├── Footer.js          # Footer
│   ├── ScrollToTop.js     # Floating scroll-to-top
│   └── ui/                # Reusable primitives (Button, Logo, SectionHeading, ...)
├── hooks/
│   ├── useCountUp.js       # Scroll-triggered number animation
│   └── useScrollPosition.js
├── utils/
│   ├── data.js            # All site content (single source of truth)
│   └── motion.js          # Framer Motion variants
├── public/                # Static assets (og-image, manifest, images/)
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml           # Netlify config
└── jsconfig.json          # @/ path alias
```

---

## 🚀 Getting Started (Local)

Requires **Node.js 18.17+**.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm run start
```

---

## ▲ Deploy to Vercel (recommended)

1. Push this folder to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects **Next.js** — no configuration needed.
4. Click **Deploy**. Done. ✅

Or via CLI:

```bash
npm i -g vercel
vercel
```

---

## ◈ Deploy to Netlify

This project includes a `netlify.toml` pre-configured with the official Next.js plugin.

1. Push this folder to a Git repository.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Select the repository. Netlify reads `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Plugin:** `@netlify/plugin-nextjs`
4. Click **Deploy site**. ✅

Or via CLI:

```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

> The `@netlify/plugin-nextjs` plugin is installed automatically by Netlify during
> the build based on `netlify.toml` — no manual install required.

---

## 🖼️ Adding Real Images

Image areas currently use a styled `ImagePlaceholder` component. To use real photos:

1. Drop optimised images into `public/images/`.
2. Replace a placeholder with Next.js `<Image>`:

```jsx
import Image from "next/image";

<div className="relative aspect-[4/5] w-full">
  <Image
    src="/images/tower.jpg"
    alt="Verden Farms vertical tower"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="rounded-3xl object-cover"
    loading="lazy"
  />
</div>
```

`next/image` handles lazy-loading and optimisation automatically.

---

## ✏️ Editing Content

All copy, stats, team members, FAQs and contact details live in **`utils/data.js`** —
edit that one file to update content across the whole site.

Update contact details (WhatsApp number, email, location) in the `CONTACT` object.

---

## 📨 Wiring Up the Contact Form

By default the form opens a pre-filled WhatsApp message. To collect submissions
directly, choose one of:

- **Netlify Forms** — add `data-netlify="true"` to a static form, or
- **Formspree** — `action="https://formspree.io/f/your-id"`, or
- A **Next.js API route** (`app/api/contact/route.js`) that emails or stores submissions.

See `components/Contact.js` (`handleSubmit`) for where to plug this in.

---

## 🎨 Brand

| Token        | Value     |
|--------------|-----------|
| Forest green | `#166534` |
| Deep green   | `#0d3a22` |
| Lime accent  | `#bef264` |
| Cream        | `#f7f6ef` |
| Ink (black)  | `#0a0f0b` |

Display font: **Bricolage Grotesque** · Body font: **Plus Jakarta Sans** (Google Fonts).

---

© Verden Farms · Iringa, Tanzania
