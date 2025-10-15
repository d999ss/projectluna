# 🔒 LUNA DESIGN SYSTEM - COMPLETE LOCKDOWN

## ✅ System Status: PRODUCTION LOCKED

**Location:** `/Users/donnysmith/CC/Project Luna`  
**Server:** http://localhost:3001  
**Design System:** http://localhost:3001/design-system  

---

## 🎯 What You Now Have

### **Complete Tiger BioSciences Site**
- ✅ **10 Core Routes** - All pages working with glass cards
- ✅ **28 Products** - Full MDX-powered product catalog  
- ✅ **4 Divisions** - Dynamic division pages
- ✅ **Search & Filters** - Products and companies filterable
- ✅ **Theme Toggle** - Light/dark mode switcher in nav
- ✅ **Design System Page** - Visual reference at `/design-system`

### **Strictness Enforced**
- 🔒 **Typography Tokens** - Required utilities (text-h1, text-h2, text-lead, text-body)
- 🔒 **ESLint Rules** - Blocks tables, hr, ad-hoc text sizes, inline styles
- 🔒 **Theme Tokens** - 8 required CSS variables validated
- 🔒 **Quality Scripts** - Automated checks for drift
- 🔒 **CI/CD Pipeline** - GitHub Actions workflow
- 🔒 **Visual Tests** - Playwright test suite

---

## 📐 Typography Token System

### **Required Utilities** (in `app/globals.css`)

```css
.text-h1    /* Responsive: 36px → 48px → 60px */
.text-h2    /* Responsive: 30px → 40px */
.text-h3    /* Responsive: 24px → 32px */
.text-lead  /* 18px, line-height: 1.6 */
.text-body  /* 16px, line-height: 1.5 */
```

### **CSS Variables**

```css
--h1-size, --h1-weight, --h1-tracking, --h1-line
--h2-size, --h2-weight, --h2-tracking, --h2-line
--h3-size, --h3-weight, --h3-tracking, --h3-line
--lead-size, --lead-line
--body-size, --body-line
```

### **Usage**

```tsx
// ✅ DO THIS
<h1 className="text-h1">Heading</h1>
<p className="text-lead">Lead paragraph</p>
<p className="text-body">Body text</p>

// ❌ DON'T DO THIS (ESLint will error)
<h1 className="text-4xl">Heading</h1>
<p className="text-lg">Text</p>
<p className="text-[18px]">Text</p>
```

---

## 🎨 Design Tokens Reference

### Color System
- **Primary:** `purple-600` / `purple-700` (hover)
- **Secondary:** `blue-600` / `blue-700` (hover)
- **Gradients:** `from-purple-500 via-purple-600 to-blue-500`
- **Text Gradient:** `bg-gradient-to-r from-foreground via-purple-600 to-foreground bg-clip-text text-transparent`

### Glass Cards
```tsx
// Standard glass card
<Card>
  <CardBody>
    {/* Content */}
  </CardBody>
</Card>

// StatCard with value
<StatCard 
  value="100%" 
  title="Title" 
  description="Description"
/>
```

**Specs:**
- `rounded-2xl` borders
- `border-black/10` light / `border-white/10` dark
- `bg-white/55` light / `bg-white/5` dark
- `backdrop-blur-xl`
- Inset white highlight shadow

### Grid Layouts
```tsx
// 2-column
<div className="grid gap-6 md:grid-cols-2">

// 3-column
<div className="grid gap-6 md:grid-cols-3">

// 4-column responsive
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
```

### Buttons
```tsx
// Primary
<button className="rounded-lg bg-purple-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg">

// Secondary  
<button className="rounded-lg border border-border bg-background/50 px-8 py-3 text-base font-semibold transition-all hover:bg-background/80">

// Gradient
<button className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-base font-semibold text-white">
```

---

## 🚫 Banned Patterns (ESLint will error)

### Blocked Forever
```tsx
// ❌ Tables for layout
<table><tr><td>...</td></tr></table>

// ❌ Horizontal rules
<hr />

// ❌ Ad-hoc text sizes
className="text-3xl text-[20px]"

// ❌ Inline styles (except in primitives)
style={{ fontSize: '20px' }}

// ❌ node:fs in client components
import fs from 'node:fs' // in "use client"
```

### What to Use Instead
```tsx
// ✅ Cards for layout
<Card><CardBody>...</CardBody></Card>

// ✅ Spacing/borders for separation
<div className="border-t border-border my-8" />

// ✅ Token utilities for text
className="text-h1 text-h2 text-h3 text-lead text-body"

// ✅ CSS variables for styles
className="text-foreground bg-background"
```

---

## 🔧 Quality Scripts

### Run Before Every Commit
```bash
npm run prepush
```

**What it checks:**
1. ESLint (blocks tables, ad-hoc sizes, inline styles)
2. Theme tokens present (--h1-size, --background, etc.)
3. No table/hr elements in app/
4. All MDX frontmatter validates

### Individual Checks
```bash
npm run check:theme    # Validates typography + color tokens
npm run check:layout   # Finds any tables/hr
npm run check:content  # Validates 28 products + companies
npm run check:tables   # Legacy table check
npm run test:visual    # Playwright visual tests
```

---

## 🤖 CI/CD Pipeline

**File:** `.github/workflows/quality.yml`

**Runs on:**
- Push to `main` or `develop`
- Pull requests to `main`

**Gates:**
1. ✅ Theme token validation
2. ✅ Layout validation (no tables)
3. ✅ Content validation (MDX frontmatter)
4. ✅ ESLint (strict rules)
5. ✅ TypeScript check
6. ✅ Build verification
7. ✅ Playwright visual tests

---

## 🎨 Design System Page

**URL:** http://localhost:3001/design-system

**Features:**
- Live examples of all components
- Color tokens with swatches
- Typography scale with code
- Button variants
- Glass card patterns
- Form elements
- Grid layouts
- Gradients
- Spacing scale
- Border radius options
- Usage guidelines (do's and don'ts)

**Footer Link Added:** "Design System" in Legal section

**How to Use:**
1. View `/design-system` to see all styles
2. Change typography tokens in `app/globals.css`
3. Update once, changes apply globally
4. All pages automatically use new sizes

---

## 📁 Key Files

### Design System Core
- `app/globals.css` - Typography + color tokens (SINGLE SOURCE OF TRUTH)
- `lib/design-tokens.ts` - Programmatic token access
- `app/design-system/page.tsx` - Visual reference page

### Quality Enforcement
- `.eslintrc.cjs` - Strict rules (tables, text sizes, inline styles banned)
- `.github/workflows/quality.yml` - CI/CD pipeline
- `playwright.config.ts` - Visual test config
- `tests/luna-visual.spec.ts` - 7-route visual tests

### Components
- `components/ui/Card.tsx` - Glass card primitive
- `components/ui/ThemeToggle.tsx` - Dark mode toggle ✨ NEW
- `components/site/Nav.tsx` - With theme toggle ✨ UPDATED
- `components/site/StatCard.tsx` - Stat display card
- `components/dev/ThemeGuard.tsx` - Runtime token validator

---

## 🎛️ How to Update Globally

### Change Headline Size Everywhere
Edit `app/globals.css`:
```css
:root {
  --h1-size: 3rem; /* Change from 2.25rem */
  --h1-weight: 700; /* Change from 600 */
}
```

**Result:** All `text-h1` utilities update instantly across entire site!

### Change Primary Color
Edit `app/globals.css` (or create CSS variable):
```css
:root {
  --color-primary: purple-700; /* instead of purple-600 */
}
```

Then update `lib/design-tokens.ts`:
```ts
colors: {
  primary: "purple-700", // Changed here
}
```

### Change Card Styling
Edit `components/ui/Card.tsx`:
```tsx
// Change border opacity, blur amount, background opacity, etc.
// All cards update globally
```

---

## 📊 Current Site Stats

| Metric | Count |
|--------|-------|
| **Core Pages** | 10 |
| **Products** | 28 |
| **Companies** | 1 |
| **Divisions** | 4 |
| **Quality Scripts** | 7 |
| **ESLint Rules** | 6 strict |
| **CSS Tokens** | 15+ |
| **CI Jobs** | 2 (lint + visual) |

---

## 🚀 Routes Available

```
/                          → Home (hero, stats, links)
/design-system             → Style guide ✨ NEW
/solutions                 → Solutions overview  
/divisions                 → Division cards
/divisions/[slug]          → regentx|wound|aesthetics|international
/products                  → 28 products (searchable)
/products/[slug]           → Product detail pages
/companies                 → Company index
/companies/[slug]          → Company profiles
/careers                   → Job listings
/contact                   → Contact form
/luna                      → Luna demo template
/templates                 → Template gallery
/tiger                     → Tiger demo
/sitemap.xml               → Auto-generated
/robots.txt                → SEO directives
```

---

## 🛡️ Strictness Level: MAXIMUM

### ESLint Will Block:
1. ❌ `<table>`, `<tr>`, `<td>`, `<hr>` tags
2. ❌ `text-xl`, `text-3xl`, `text-[20px]` (use token utilities)
3. ❌ `node:fs`, `node:path` in client components
4. ❌ Inline `style={{}}` (except in primitives)

### CI Will Fail If:
1. ❌ Theme tokens missing from CSS
2. ❌ Tables/hr found in app/
3. ❌ MDX frontmatter invalid
4. ❌ TypeScript errors
5. ❌ Build fails
6. ❌ Visual tests fail

### What's Allowed:
1. ✅ Token utilities (text-h1, text-h2, text-h3, text-lead, text-body)
2. ✅ Tailwind utility classes (colors, spacing, etc.)
3. ✅ Glass cards everywhere
4. ✅ Grid layouts
5. ✅ Controlled styles in `components/ui/**`

---

## 🎯 Developer Workflow

### Making Changes
```bash
# 1. Update design tokens (if changing typography/colors)
vim app/globals.css

# 2. Make your changes to pages/components

# 3. Run quality checks
npm run prepush

# 4. Commit if all pass
git add .
git commit -m "Your changes"
git push
```

### Adding New Products
```bash
# Option A: Add to stub generator
vim scripts/generate-product-stubs.mjs
npm run generate:content

# Option B: From CSV
npm run generate:csv products.csv companies.csv

# Verify
npm run check:content
```

### Testing Locally
```bash
npm run dev              # Start server
npm run check:theme      # Validate tokens
npm run check:layout     # Check for tables
npm run test:visual      # Run Playwright
```

---

## 📖 Documentation Pages

1. **LUNA_README.md** - Luna template overview
2. **LUNA_TEMPLATE_SUMMARY.md** - Luna creation details
3. **QUICK_START_LUNA.md** - Luna quick start
4. **TIGER_BIO_COMPLETE.md** - Tiger Bio system overview
5. **LOCKDOWN_COMPLETE.md** - This file
6. **/design-system** - Live visual reference ✨

---

## 🌟 Single Source of Truth

**Want to change the headline size across the entire site?**

1. Go to http://localhost:3001/design-system
2. See current H1 size in the Typography section
3. Edit `app/globals.css` → `--h1-size: 4rem`
4. Save
5. **EVERY headline using `text-h1` updates instantly!**

**No more:**
- ❌ Hunting through 50 files
- ❌ Inconsistent sizes
- ❌ Manual find/replace
- ❌ Forgetting a page

**Now:**
- ✅ One change
- ✅ Global update
- ✅ Enforced by linting
- ✅ Validated by CI

---

## 🔐 Security Features

- ✅ Zod validates all content
- ✅ TypeScript enforces types
- ✅ ESLint blocks dangerous patterns
- ✅ No HTML injection in MDX
- ✅ Server/client boundary enforced
- ✅ No dynamic code execution

---

## 🎉 You're Done!

**The Tiger BioSciences site is:**
- 🔒 **Locked down** - ESLint + CI enforcing standards
- 🎨 **Theme-safe** - All styles tokenized
- 📱 **Responsive** - Mobile-first glass cards
- 🌗 **Dark mode** - Theme toggle in nav
- 📊 **Scalable** - 28 products, easy to add more
- 🚀 **Production ready** - No tables, no drift
- 📖 **Documented** - Design system page live

**To change the headline everywhere:**
1. Edit `app/globals.css` → `--h1-size`
2. Done! ✅

**View your design system:**
http://localhost:3001/design-system

🐯✨ **Tiger BioSciences on Luna - COMPLETE!**

