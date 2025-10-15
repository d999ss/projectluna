# 🌙 Luna Template - Quick Start Guide

## View the Luna Template

### Development Mode
```bash
npm run dev
```
Then visit:
- **Luna Template**: http://localhost:3000/luna
- **Templates Gallery**: http://localhost:3000/templates
- **Default Template**: http://localhost:3000/

### Production Build
```bash
npm run build
npm start
```

## 🎨 What is Luna?

Luna is an elegant landing page template with a **moonlit aesthetic** featuring:
- 🌙 Purple and blue gradients
- ✨ Cosmic visual effects
- 🎭 Smooth animations
- 💫 Professional polish

## 📁 File Structure

```
app/
├── luna/
│   └── page.tsx              # Luna template page
├── templates/
│   └── page.tsx              # Templates gallery
└── page.tsx                  # Default template

components/
└── sections/
    ├── hero/
    │   ├── default.tsx       # Default hero
    │   └── luna.tsx          # Luna-themed hero ✨
    └── cta/
        ├── default.tsx       # Default CTA
        └── luna.tsx          # Luna-themed CTA ✨
```

## 🚀 Quick Customization

### Change Hero Title
Edit `app/luna/page.tsx`:
```tsx
<Hero
  title="Your Custom Title Here"
  description="Your custom description"
/>
```

### Update Colors
Replace purple with your brand color in:
- `components/sections/hero/luna.tsx`
- `components/sections/cta/luna.tsx`

Search for: `purple-500` and `blue-500`
Replace with: your color (e.g., `green-500`, `red-500`)

### Modify Features
Edit the `items` array in `app/luna/page.tsx`:
```tsx
items={[
  {
    icon: <YourIcon className="size-5 stroke-1" />,
    title: "Your Feature",
    description: "Feature description",
  },
  // ... more features
]}
```

### Update Pricing
Modify the `plans` array in `app/luna/page.tsx`

### Change FAQ
Edit the `items` array in the FAQ section

## 🎯 Mix and Match

You can use Luna sections in other pages:
```tsx
import Hero from "../../components/sections/hero/luna";
import CTA from "../../components/sections/cta/default"; // Mix with default

export default function MyPage() {
  return (
    <main>
      <Hero title="Luna Hero" />
      {/* Other sections */}
      <CTA title="Default CTA" />
    </main>
  );
}
```

## 📖 Full Documentation

- **Detailed Guide**: See [LUNA_README.md](LUNA_README.md)
- **Creation Summary**: See [LUNA_TEMPLATE_SUMMARY.md](LUNA_TEMPLATE_SUMMARY.md)
- **Main Docs**: See [README.md](README.md)

## 🎨 Templates Available

| Template | Route | Description |
|----------|-------|-------------|
| Default | `/` | Classic professional design |
| Luna 🌙 | `/luna` | Moonlit purple-blue theme |
| Gallery | `/templates` | Browse all templates |

## ✅ Production Ready

✓ TypeScript compiled  
✓ ESLint passed  
✓ Build successful  
✓ Static generation working  
✓ Responsive design  
✓ Dark mode compatible  

## 🎉 You're All Set!

The Luna template is ready to use. Start customizing and make it your own!

---

**Need Help?** Check the detailed documentation in LUNA_README.md

