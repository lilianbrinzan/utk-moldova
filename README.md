# 🔪 Universal Tactical Knife (UTK) Moldova

> **"Experience Excellence in Every Edge"**

A high-fidelity, interactive 3D web experience for **Universal Tactical Knife Moldova**. This project serves as a premium corporate portal, blending modern web design with advanced 3D visualization and scroll-based storytelling.

---

## 🔥 Key Features

- **Interactive 3D Model**: A custom-engineered tactical knife built programmatically using `THREE.Shape` and `ExtrudeGeometry` for pixel-perfect accuracy to the UTK logo.
- **Scroll-Driven Narrative**: Powered by `@react-three/drei`'s `ScrollControls` to seamlessly animate the product and content relative to user progression.
- **Cinematic Materials**: Sophisticated PBR materials featuring high-specular metallic finishes, matte oxide coatings, and detailed handle textures.
- **Atmospheric Lighting**: Advanced lighting rig featuring multiple directional and point lights to highlight the blade's geometry and create a premium feel.
- **Performance Optimized**: Built on React 19 and Vite for lightning-fast loads and smooth 60FPS 3D interactions.

## 🎨 Design Principles

- **Wow Effect**: Aimed at creating a stunning first impression through dynamic 3D transitions and micro-animations.
- **Premium Aesthetics**: Curated dark theme with harmonious metallic and carbon-fiber tones.
- **Tactical Realism**: Materials and shapes designed to reflect the quality and sturdiness of UTK products.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **3D Engine**: [Three.js](https://threejs.org/) via [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber/)
- **3D Utilities**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS

## 🚀 Getting Started

### Installation
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 🏗️ Project Architecture

The core interactive experience is centered in `src/components/Scene.jsx`, where the `TacticalKnife` is generated procedurally:

1. **Blade**: Curved leaf-style geometry with a central dark fuller groove.
2. **Crossguard**: Triangular central guard with symmetrical sweeping horns and custom "MD Area" overlays.
3. **Handle**: Multi-segment grip with metallic separators and textured finishes.
4. **Pommel**: Flared tactical base with a clean V-point termination.

## 🛤️ Roadmap

- [x] **TypeScript Migration**: Full project conversion from `.jsx` to `.tsx` with type-safe R3F components.
- [x] **React Compiler**: Enabled via Babel plugin for automated component memoization.
- [ ] **Advanced Shaders**: Implement custom GLSL shaders for carbon-fiber and Damascus steel visual effects.

## ⚖️ License

Private Property of **Universal Tactical Knife Moldova**.
