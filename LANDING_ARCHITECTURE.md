# 🏗️ LexFlow Landing Page - Architecture

## 📊 Project Overview

**Migration from**: Figma-exported monolithic React app
**To**: Modern, SEO-optimized, component-based landing page

---

## 🎯 Goals

1. ✅ **Component-based architecture** - разбить монолитный App.tsx (832 строки)
2. ✅ **SEO-ready** - meta tags, structured data (schema.org), Open Graph
3. ✅ **Performance** - lazy loading, оптимизация изображений
4. ✅ **Maintainability** - понятная структура, легко добавлять/менять секции
5. ✅ **Modern stack** - React 19, Vite 7, TypeScript

---

## 📁 Directory Structure

```
lex-flow-landing/
├── public/
│   ├── images/              # Оптимизированные изображения (WebP, lazy loading)
│   ├── fonts/               # Web fonts (если нужны кастомные)
│   ├── robots.txt           # SEO: индексация
│   └── sitemap.xml          # SEO: карта сайта
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Навигация + logo
│   │   │   └── Footer.tsx           # Футер с ссылками
│   │   │
│   │   ├── sections/                # Секции лендинга (в порядке на странице)
│   │   │   ├── HeroSection.tsx              # Hero с CTA
│   │   │   ├── ProblemSection.tsx           # "Знакомые проблемы?"
│   │   │   ├── FeaturesSection.tsx          # "Вся работа юриста"
│   │   │   ├── DocumentVersioningSection.tsx # Killer Feature - версионность
│   │   │   ├── HowItWorksSection.tsx        # "Как это работает"
│   │   │   ├── ForWhomSection.tsx           # "Для кого LexFlow"
│   │   │   ├── PricingSection.tsx           # Тарифы
│   │   │   ├── TrustSection.tsx             # "Безопасность"
│   │   │   └── CTASection.tsx               # Финальный CTA
│   │   │
│   │   └── ui/                      # shadcn/ui компоненты (переиспользуемые)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── ...                  # Остальные UI компоненты
│   │
│   ├── lib/
│   │   └── utils.ts                 # Утилиты (cn(), formatters)
│   │
│   ├── styles/
│   │   └── globals.css              # Глобальные стили + Tailwind
│   │
│   ├── App.tsx                      # Главный компонент (собирает секции)
│   └── main.tsx                     # Entry point
│
├── index.html                       # HTML с SEO meta tags
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js               # Tailwind конфиг
└── postcss.config.js                # PostCSS для Tailwind
```

---

## 🧩 Component Breakdown

### Layout Components

**Header** (`components/layout/Header.tsx`):
- Logo + название
- Навигация: Возможности, Цены, Блог
- CTA кнопки: Войти, Попробовать

**Footer** (`components/layout/Footer.tsx`):
- Логотип + описание
- Ссылки: Продукт, Компания, Юридическое
- Copyright

### Section Components

Каждая секция - отдельный компонент:

1. **HeroSection** - Hero с главным CTA
2. **ProblemSection** - 4 карточки проблем
3. **FeaturesSection** - 6 модулей (Клиенты, Кейсы, Документы, Календарь, Аналитика, AI)
4. **DocumentVersioningSection** - Killer feature с визуализацией diff
5. **HowItWorksSection** - 4 шага workflow
6. **ForWhomSection** - Для кого: Соло-юристы, Малые бюро, Ассистенты
7. **PricingSection** - 3 тарифа (Basic, Pro, Pro Max)
8. **TrustSection** - Безопасность (3 карточки)
9. **CTASection** - Финальный призыв к действию

---

## 🎨 Design System

**Colors** (Tailwind classes):
- Primary: `blue-600`, `purple-600` (градиенты)
- Backgrounds: `gray-50`, `gray-900`
- Text: `gray-600`, `gray-900`
- Accent colors для карточек: blue, purple, green, orange, indigo, pink

**Typography**:
- H1: `text-5xl sm:text-6xl lg:text-7xl`
- H2: `text-4xl lg:text-5xl`
- H3: `text-2xl`
- Body: `text-base`, `text-xl`

**Spacing**:
- Sections: `py-24 lg:py-32`
- Cards: `p-8`, `p-10`

---

## 📦 Dependencies Migration

**Из старого проекта** (React 18, старые версии):
```json
{
  "react": "^18.3.1",
  "vite": "6.3.5",
  "@radix-ui/*": "старые версии"
}
```

**В новый проект** (React 19, современные версии):
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "vite": "^7.2.4",

  // UI
  "@radix-ui/react-*": "последние версии",
  "lucide-react": "^0.487.0",
  "tailwind-merge": "^2.x",
  "clsx": "^2.x",
  "class-variance-authority": "^0.7.x",

  // Tailwind
  "tailwindcss": "^3.x",
  "autoprefixer": "^10.x",
  "postcss": "^8.x"
}
```

---

## 🔍 SEO Strategy

### 1. Meta Tags (index.html)

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Primary Meta Tags -->
<title>LexFlow - Система управления юридической практикой</title>
<meta name="title" content="LexFlow - Система управления юридической практикой">
<meta name="description" content="Организуй работу как профессионал. Клиенты, дела, документы с версионностью, календарь и аналитика — всё под контролем.">
<meta name="keywords" content="юридическая практика, CRM для юристов, управление делами, версионность документов, документооборот">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://lex-flow.com/">
<meta property="og:title" content="LexFlow - Система управления юридической практикой">
<meta property="og:description" content="Организуй работу как профессионал. Клиенты, дела, документы с версионностью, календарь и аналитика — всё под контролем.">
<meta property="og:image" content="https://lex-flow.com/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://lex-flow.com/">
<meta property="twitter:title" content="LexFlow - Система управления юридической практикой">
<meta property="twitter:description" content="Организуй работу как профессионал. Клиенты, дела, документы с версионностью, календарь и аналитика — всё под контролем.">
<meta property="twitter:image" content="https://lex-flow.com/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

### 2. Structured Data (JSON-LD)

Добавить в `index.html` или в отдельный компонент:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LexFlow",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "7",
    "highPrice": "70",
    "priceCurrency": "USD",
    "offerCount": "3"
  },
  "description": "Система управления юридической практикой для юристов",
  "featureList": [
    "Управление клиентами",
    "Управление делами",
    "Версионность документов",
    "Календарь встреч",
    "Аналитика и отчеты",
    "AI-помощник"
  ]
}
</script>
```

### 3. robots.txt

```
User-agent: *
Allow: /

Sitemap: https://lex-flow.com/sitemap.xml
```

### 4. sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lex-flow.com/</loc>
    <lastmod>2026-01-09</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## ⚡ Performance Optimizations

1. **Lazy Loading**:
   - Images: `loading="lazy"` attribute
   - Components: `React.lazy()` для секций (если лендинг станет очень большим)

2. **Image Optimization**:
   - Использовать WebP формат
   - Responsive images: `srcset`
   - Сжатие изображений

3. **Code Splitting**:
   - Vite автоматически делает code splitting
   - Отдельные chunks для UI библиотек

4. **CSS**:
   - Tailwind с PurgeCSS (удаляет неиспользуемые классы)
   - Минификация в production

---

## 🚀 Deployment

**Build for production**:
```bash
npm run build
```

**Outputs**:
- `dist/` - статические файлы для деплоя
- Minified HTML, CSS, JS
- Оптимизированные assets

**Deploy to**:
- Cloudflare Pages (рекомендуется - бесплатный CDN, SSL, быстрый)
- Netlify
- Vercel
- Nginx (статика)

---

## 📈 Migration Steps

### Phase 1: Setup ✅
1. ✅ Install dependencies (Tailwind, shadcn/ui, lucide-react)
2. ✅ Configure Tailwind
3. ✅ Setup globals.css
4. ✅ Add SEO meta tags to index.html

### Phase 2: Components ⏳
1. Create layout components (Header, Footer)
2. Create section components (9 sections)
3. Migrate UI components from old project
4. Test each section independently

### Phase 3: Integration ⏳
1. Assemble App.tsx with all sections
2. Add smooth scroll for anchor links
3. Test responsive design
4. Cross-browser testing

### Phase 4: SEO & Optimization ⏳
1. Add structured data (JSON-LD)
2. Optimize images
3. Add robots.txt, sitemap.xml
4. Performance audit (Lighthouse)

### Phase 5: Production ⏳
1. Build for production
2. Deploy to Cloudflare Pages
3. Setup domain (app.lex-flow.com)
4. Monitor analytics

---

## ✅ Quality Checklist

- [ ] All sections responsive (mobile, tablet, desktop)
- [ ] SEO meta tags complete
- [ ] Structured data (JSON-LD) added
- [ ] Images optimized (WebP, lazy loading)
- [ ] Smooth scroll navigation working
- [ ] All links functional
- [ ] Lighthouse score: 90+ (Performance, SEO, Accessibility)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] No console errors
- [ ] Fast load time (<3s)

---

**Created**: January 9, 2026
**Status**: In Progress (Phase 1)
**Next**: Install dependencies and create component structure
