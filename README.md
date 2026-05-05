# ICHS Website

A modern, responsive website for ICHS (International College of Higher Studies) built with React, TypeScript, and Vite. This website showcases the institution's achievements, programs, and provides an engaging user experience with smooth animations and a professional design.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Interactive Components**: 
  - Hero section with compelling call-to-action
  - Statistics section with animated counters
  - About section highlighting institutional values
  - Navigation with smooth scrolling
- **Performance Optimized**: Built with Vite for fast development and production builds
- **TypeScript**: Full type safety for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.5
- **Language**: TypeScript
- **Build Tool**: Vite 8.0.10
- **Styling**: Tailwind CSS 4.2.4
- **Icons**: React Icons 5.6.0
- **Code Quality**: ESLint with React-specific rules

## 📁 Project Structure

```
ichs-website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── images/        # Static images
│   │   └── video/         # Video files
│   ├── components/        # React components
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── SecondNavbar.tsx
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ichs-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Run TypeScript type checking without emitting files

## 🏗️ Build and Deployment

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🚀 CI/CD Deployment

This project is configured for automatic deployment to Netlify using GitHub Actions.

### Setup Instructions

1. **Push to GitHub**: 
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Configure Netlify**:
   - Sign up/log in to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Click "Deploy site"

3. **Get Netlify Credentials**:
   - Go to Netlify → Site settings → Build & deploy → API
   - Note your **Site ID**
   - Go to User settings → Applications → Personal access tokens
   - Generate a new token with **Deploy** scope

4. **Configure GitHub Secrets**:
   - In your GitHub repository, go to Settings → Secrets and variables → Actions
   - Add these secrets:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
     - `NETLIFY_SITE_ID`: Your Netlify site ID

### How It Works

- **Automatic Triggers**: The workflow runs on every push to `main`/`master` branch and on pull requests
- **Build Process**: 
  - Installs dependencies with `npm ci`
  - Runs linting checks
  - Builds the application
  - Deploys to Netlify
- **Preview Deployments**: Pull requests automatically get preview deployments

### Manual Deployment

To deploy manually without waiting for push:

```bash
npm run build
# Deploy the dist folder to Netlify using the CLI or drag-and-drop
```

### Environment Variables

The workflow uses Node.js 18 for consistent builds across environments.

## 🎨 Customization

### Adding New Components

1. Create a new component file in `src/components/`
2. Follow the existing naming convention (PascalCase)
3. Export the component and import it where needed

### Modifying Styles

The project uses Tailwind CSS. You can:
- Modify existing classes directly in components
- Add custom utilities in `index.css`
- Extend the Tailwind configuration if needed

### Updating Images

Place new images in the `src/assets/images/` folder and import them in your components:

```typescript
import newImage from '../assets/images/your-image.jpg';
```

## 🔧 Development

### Code Quality

The project uses ESLint with React and TypeScript rules. Run the linter before committing:

```bash
npm run lint
```

### TypeScript Configuration

The project is configured with strict TypeScript settings. Type definitions are included for all dependencies.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For any questions or support, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for ICHS**
