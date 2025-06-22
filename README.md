# Archive.nonparallel 🌐

> Creative hub showcasing music & fashion projects with glass-morphism design and sticky animations

[![Live Demo](https://img.shields.io/badge/Demo-archive.nonparallel.io-blue?style=for-the-badge)](https://archive.nonparallel.io)

## ✨ Features

- **Glass-morphism Design System** - Liquid-glass surfaces with blurred translucency
- **Sticky Animations** - Smooth hover and scroll-triggered animations
- **Responsive Layout** - Optimized for all device sizes
- **Two Primary Sections**:
  - `/music` - Self-hosted indie distribution portals
  - `/fashion` - Streaming & e-commerce fashion projects

## 🎨 Design Language

- **Visual Style**: iOS 26 concept guidelines with spatial UI
- **Shape System**: 4-point grid with 12px radius defaults
- **Typography**: SF Pro Rounded / Inter with 1.9rem line-height
- **Motion**: Springy ease-out animations (200-400ms)
- **Color Palette**:
  - 🟠 Neon Coral `h6° s85% l60%`
  - 🔵 Electric Azure `h198° s100% l53%`
  - 🟡 Citrine `h57° s100% l55%`
  - ⚫ Deep Charcoal `h220° s15% l12%`

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom glass presets
- **Components**: Shadcn/ui with rounded-glass variants
- **Deployment**: Vercel with preview deployments

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/brytonzoz/archive-nonparallel.git
cd archive-nonparallel

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the sticky animations in action!

## 📁 Project Structure

```
archive.nonparallel/
├── app/
│   ├── music/          # Music projects showcase
│   ├── fashion/        # Fashion projects showcase
│   └── page.tsx        # Homepage with animations
├── components/
│   ├── Navigation.tsx  # Glass-morphic navigation
│   ├── ProjectCard.tsx # Animated project cards
│   └── ui/            # Reusable UI components
├── data/
│   └── projects.yml   # Project metadata
└── lib/               # Utilities and helpers
```

## 🎯 Key Animations

- **Hover Effects**: Z-axis translation with springy easing
- **Glass Morphism**: Dynamic blur and transparency effects  
- **Sticky Navigation**: Position-aware scroll animations
- **Card Interactions**: Smooth hover states with color transitions

## 🎵 Current Projects

### Music
- **Just A Reminder To Live Life** - Procedural mixtape platform
- **The Archive (Music)** - Multi-purpose streaming hub

### Fashion  
- **Loopless Collection** - Video series showcasing fashion episodes
- **Scrapwrk Store** - E-commerce fashion platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by [Bryton Zoz](https://github.com/brytonzoz)** 