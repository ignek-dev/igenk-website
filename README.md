# Ignek.com - Digital Experience Platform

Transform your digital experience with Ignek's cutting-edge solutions. Built with performance and speed as the primary focus through static site generation (SSG).

## 🚀 Overview

Ignek.com is a high-performance website built using a hybrid static-dynamic approach, combining the speed of static generation with the flexibility of dynamic content management. This architecture ensures lightning-fast loading times while maintaining excellent SEO performance and user experience.

## 🏗️ Architecture

### Hybrid Static-Dynamic Approach

**Static Pages (95% of site):**

- Company pages
- Services pages
- Solutions pages
- Hiring pages
- About pages
- Case studies
- Contact pages

**Dynamic Section:**

- Blog posts and content management

## 🛠️ Technology Stack

### Frontend Framework

- **Next.js** with Static Site Generation (SSG)
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Component-based** design system

### Performance & Optimization

- **Global CDN** for lightning-fast content delivery
- **Image optimization** and lazy loading
- **Automatic sitemap generation**
- **Meta tags optimization**
- **Schema markup**
- **Progressive Web App (PWA)** capabilities

### Development Tools

- **ESLint & Prettier** for code quality
- **Vitest & React Testing Library** for testing
- **Playwright** for end-to-end testing
- **Storybook** for component development
- **Bundle analyzer** for performance monitoring

## 📊 Performance Targets

- **Page Load Time:** < 2 seconds
- **First Contentful Paint:** < 1.5 seconds
- **Lighthouse Score:** 95+ on all metrics
- **Core Web Vitals:** All green scores

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ignek/ignek-website.git

# Navigate to project directory
cd ignek-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript checks

# Testing
pnpm test         # Run unit tests
pnpm test:watch   # Run tests in watch mode
pnpm test:e2e     # Run end-to-end tests

# Storybook
pnpm storybook    # Start Storybook development server
pnpm build-storybook  # Build Storybook for production
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
├── styles/               # Global styles and Tailwind config
├── docs/                 # Documentation
├── e2e/                  # End-to-end tests
└── public/               # Static assets
```

## 🎨 Design System

The website follows a modern, clean design approach with:

- **Responsive design** for all device sizes
- **Dark/Light mode** support
- **Consistent typography** and spacing
- **Accessible components** following WCAG guidelines
- **Modern UI patterns** and animations

## 🔧 Content Management

### Static Pages

Developer → Code Changes → Git → Auto Deploy → Live Site

### Blog Content (Future Implementation)

Content Editor → WordPress/CMS → API → Auto Rebuild → Live Blog

## 📈 Monitoring & Analytics

- **Performance monitoring** with Core Web Vitals tracking
- **Real User Monitoring (RUM)**
- **Bundle size analysis**
- **SEO monitoring tools**
- **Uptime monitoring**

## 🚀 Deployment

The website is optimized for deployment on:

- **Vercel** (recommended)
- **Netlify**
- Any static hosting provider

### Deployment Pipeline

Code Push → Build Process → Static Files → CDN Deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved by Ignek.

## 🆘 Support

For support and questions:

- Email: support@ignek.com
- Website: [ignek.com](https://www.ignek.com)

---

**Built with ❤️ by the Ignek Team**

_Transform your digital experience with Ignek today!_
