# 🌙 Luna Template

A beautiful, elegant landing page template with a moonlit aesthetic theme. Luna brings a unique purple-blue gradient design with cosmic elements to create a sophisticated and modern landing page experience.

## ✨ Features

Luna template includes:

- **Moonlit Hero Section**: Custom hero with purple/blue gradient backgrounds and animated moonlight effects
- **Elegant CTA**: Call-to-action section with floating moon icons and cosmic gradients
- **Full Landing Page**: Complete page layout with all essential sections:
  - Navigation bar
  - Hero section with moonlight theme
  - Logo showcase
  - Feature items
  - Statistics display
  - Pricing tables
  - FAQ section
  - Call-to-action
  - Footer

## 🎨 Design Philosophy

Luna embraces a cosmic, moonlit aesthetic with:

- **Purple & Blue Gradients**: Soft, elegant purple and blue color schemes
- **Radial Blur Effects**: Creates a dreamy, moonlit atmosphere
- **Animated Elements**: Subtle pulse animations and floating icons
- **Professional Typography**: Gradient text effects for emphasis
- **Dark Mode Optimized**: Looks stunning in both light and dark modes

## 🚀 Usage

### Accessing the Template

Navigate to `/luna` in your browser to view the Luna template:

```
http://localhost:3000/luna
```

### File Structure

```
app/
  luna/
    page.tsx                          # Luna template page
components/
  sections/
    hero/
      luna.tsx                        # Luna-themed hero section
    cta/
      luna.tsx                        # Luna-themed CTA section
```

### Customization

#### Changing Colors

The Luna template uses purple/blue gradients. To customize:

```tsx
// In hero/luna.tsx or cta/luna.tsx
className="from-purple-500/10 via-blue-500/10 to-transparent"
// Change purple-500 and blue-500 to your preferred colors
```

#### Modifying Content

Edit `/app/luna/page.tsx` to customize:

- **Title & Description**: Change the hero title and description
- **Features**: Modify the items array with your features
- **Pricing Plans**: Update pricing tiers and features
- **FAQ Items**: Add/remove FAQ questions
- **Stats**: Update statistics with your metrics

#### Using Luna Sections in Other Pages

You can import and use Luna-themed sections anywhere:

```tsx
import Hero from "../../components/sections/hero/luna";
import CTA from "../../components/sections/cta/luna";

export default function MyPage() {
  return (
    <main>
      <Hero
        title="Your Custom Title"
        description="Your custom description"
      />
      {/* ... other sections ... */}
      <CTA title="Ready to start?" />
    </main>
  );
}
```

## 🎯 Best Use Cases

Luna template is perfect for:

- **SaaS Products**: Particularly tools focused on productivity, creativity, or AI
- **Premium Services**: Professional services that want to convey elegance
- **Tech Startups**: Modern startups looking for a sophisticated aesthetic
- **Mobile Apps**: Apps that want a dreamy, modern presentation
- **Creative Tools**: Design, art, or creative software products
- **Wellness Apps**: Meditation, sleep, or mindfulness applications

## 🌟 Component Variants

### Luna Hero (`hero/luna.tsx`)

Custom hero section featuring:
- Purple/blue radial gradient backgrounds
- Moonlight badge with moon icon
- Gradient text with purple accent
- Custom purple call-to-action buttons
- Animated background orbs

### Luna CTA (`cta/luna.tsx`)

Enhanced call-to-action section with:
- Floating moon star icon
- Radial gradient backgrounds
- Purple gradient text
- Hover effects with enhanced glow
- Custom button styling

## 💡 Tips

1. **Images**: Replace the dashboard screenshots with your product images
2. **Brand Colors**: Adjust the purple/blue gradients to match your brand
3. **Icons**: Customize icons to match your product features
4. **Spacing**: Adjust section padding and gaps for your content
5. **Metadata**: Update the metadata in `page.tsx` for SEO

## 🔧 Technical Details

- Built with **Next.js 15**
- Styled with **Tailwind CSS 4.0**
- Uses **shadcn/ui** components
- Fully responsive design
- Dark mode compatible
- TypeScript enabled
- Performance optimized

## 📝 License

Luna template inherits the same license as Launch UI. See [LICENSE.md](LICENSE.md) for details.

---

**Need Help?** Check the main [Launch UI documentation](README.md) for general setup and customization guides.

