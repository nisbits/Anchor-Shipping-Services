# TransportPro - Transportation Service Website

A modern, responsive React-based website for a transportation service company built with React, TypeScript, and Vite.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Service Details**: Comprehensive display of various transportation services
- **Floating Call Button**: Interactive floating call button with multiple contact options (Call, WhatsApp, Email)
- **Embedded Map**: Google Maps integration showing business location
- **Modern Header**: Sticky navigation header with smooth interactions
- **Hero Section**: Eye-catching banner with call-to-action
- **Service Cards**: Beautiful grid layout showcasing all services
- **Footer**: Comprehensive footer with links, contact info, and social media
- **Modern UI**: Gradient backgrounds, smooth animations, and hover effects

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Hero.tsx                # Hero banner section
│   ├── Services.tsx            # Services grid display
│   ├── Map.tsx                 # Google Maps iframe & location info
│   ├── Footer.tsx              # Footer section
│   ├── FloatingCallButton.tsx  # Floating contact button
│   └── styles/
│       ├── Header.css
│       ├── Hero.css
│       ├── Services.css
│       ├── Map.css
│       ├── Footer.css
│       └── FloatingCallButton.css
├── App.tsx                     # Main app component
├── App.css                     # Global styles
└── index.css                   # Base styles
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Navigate to the project directory**
   ```bash
   cd "New folder"
   ```

2. **Install dependencies** (if not already installed)
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The application will start at `http://localhost:5173`
   - Open this URL in your web browser

## 📝 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint (if configured)
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
