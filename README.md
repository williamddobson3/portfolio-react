# Senior Developer Portfolio - Next.js

A modern, responsive portfolio website built with **Next.js 14**, TypeScript, and Tailwind CSS. Features 3D effects, smooth animations, and a comprehensive showcase of full-stack and blockchain development projects.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Three.js** for 3D effects
- **Responsive Design** for all devices
- **SEO Optimized** with metadata
- **File-based Routing** with dynamic routes
- **Performance Optimized** with lazy loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── projects/page.tsx  # Projects page
│   ├── contact/page.tsx   # Contact page
│   ├── resume/page.tsx    # Resume page
│   └── project/[id]/      # Dynamic project pages
├── components/            # Reusable components
├── pages/                 # Page components
├── data/                  # Static data
└── index.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors and Styling
The project uses Tailwind CSS with custom color schemes. Update the colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
      },
      secondary: {
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
      },
    }
  }
}
```

### Content Updates
- **Projects**: Update `src/data/projects.ts`
- **Personal Info**: Update metadata in `src/app/layout.tsx`
- **Skills**: Modify the skills arrays in respective page components

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📱 Pages

- **Home** (`/`) - Hero section with featured projects
- **About** (`/about`) - Personal information and skills
- **Projects** (`/projects`) - Portfolio showcase
- **Project Detail** (`/project/[id]`) - Individual project pages
- **Contact** (`/contact`) - Contact form and information
- **Resume** (`/resume`) - Professional resume and download

## 🔧 Configuration

### Next.js Config
The project includes optimized Next.js configuration in `next.config.js`:

```javascript
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
}
```

### TypeScript
TypeScript configuration is optimized for Next.js with strict type checking and path aliases.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, please reach out through the contact page or create an issue in the repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
