# 🤖 Kurs Programista AI - Landing Page

Strona sprzedażowa w stylu **"AI Matrix"** zbudowana z Next.js, Tailwind CSS i Framer Motion.

## 🚀 Quick Start

```bash
# Strona już działa na:
http://localhost:3002
```

## ✨ Features

### Design "AI Matrix"
- 🎨 **Matrix Rain Effect** - animowany kod spadający w tle
- 🧠 **Neural Network Animation** - pulsujące węzły i połączenia
- ⚡ **Neon Glow Effects** - świecące przyciski i karty
- 💫 **Glassmorphism** - przezroczyste, zamazane karty
- ⌨️ **Terminal Style UI** - wszystkie elementy w stylu terminala
- 🖊️ **Typewriter Animation** - efekt pisania maszynowego w hero

### Komponenty
- **Navbar** - sticky navigation z pulsującą kropką
- **Hero Section** - terminal init + typewriter + neural background
- **Stats Section** - 4 animowane metryki
- **Program Modules** - 4 expandable moduły kursu
- **FAQ Section** - 10 pytań w terminal style
- **Purchase Section** - pricing card z neon effects
- **Footer** - kompletne linki i social media

## 🎨 Color Palette

```js
Matrix Cyan: #00d4ff
Matrix Purple: #b429f9
Matrix Pink: #ff2e97
Matrix Green: #00ff41
Neural Dark: #0a0e27
```

## 📁 Struktura Projektu

```
/app
  layout.tsx          # SEO, fonts, metadata
  page.tsx            # strona główna
  globals.css         # custom styles
/components
  Navbar.tsx
  HeroSection.tsx
  StatsSection.tsx
  ProgramModules.tsx
  FAQSection.tsx
  PurchaseSection.tsx
  Footer.tsx
  /effects
    MatrixRain.tsx    # Matrix rain animation
    NeuralNetwork.tsx # Neural network animation
/lib
  content.ts          # cała treść z ZAWARTOŚĆ_STRONY.md
```

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **React 19** - Latest React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Type Animation** - Typewriter effect

## 📝 Customization

### 1. Zmiana kolorów
Edytuj `tailwind.config.ts`:

```ts
colors: {
  matrix: {
    cyan: '#00d4ff',    // Twój kolor
    purple: '#b429f9',  // Twój kolor
    pink: '#ff2e97',    // Twój kolor
  },
}
```

### 2. Zmiana treści
Edytuj `lib/content.ts`:

```ts
export const hero = {
  mainHeading: {
    normal: 'Twój tekst',
    animated: 'animowany tekst',
  },
  // ...
}
```

### 3. Dodanie nowych sekcji
1. Stwórz komponent w `/components`
2. Dodaj do `app/page.tsx`
3. Dodaj content do `lib/content.ts`

## 🚀 Deployment

### Vercel (recommended)
```bash
# Deploy w 1 klik
vercel
```

### Build Production
```bash
npm run build
npm start
```

## 🎯 Następne Kroki

### Dodaj brakujące sekcje:
- [ ] VSCode Approach Section
- [ ] Presenters Section
- [ ] How It Works Section
- [ ] Certificate Section

### Integracje:
- [ ] System płatności (Stripe/PayU)
- [ ] Email newsletter (ConvertKit)
- [ ] Analytics (Google Analytics/Plausible)
- [ ] Contact form

### Optymalizacje:
- [ ] Dodać obrazy (logo, avatary prowadzących)
- [ ] SEO optimization (keywords, OG images)
- [ ] Performance optimization (lazy loading)
- [ ] A/B testing

## 📊 Performance

Build output:
```
Route (app)                Size    First Load JS
┌ ○ /                   57.3 kB       159 kB
```

## 🐛 Troubleshooting

### Port już zajęty?
```bash
# Zmień port w package.json
"dev": "next dev -p 3003"
```

### Błędy TypeScript?
```bash
npm run build  # Sprawdź wszystkie błędy
```

### Animacje nie działają?
Sprawdź czy masz zainstalowane:
```bash
npm list framer-motion react-type-animation
```

## 📝 License

© 2025 Efektywniejsi. All rights reserved.

---

Made with ❤️ and AI (Claude Code)
