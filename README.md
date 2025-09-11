# Facebook UI Clone

A modern, responsive Facebook-inspired user interface built with React, TypeScript, and Tailwind CSS. This project replicates Facebook's core UI components and interactions with a focus on clean design, smooth animations, and excellent user experience.

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Project-blue?style=for-the-badge&logo=github)](https://yossif-hafney.github.io/Facebook-UI/)

**👆 Click above to see the Facebook UI Clone in action!**

## 🚀 Features

### Core Components

- **Header Navigation**: Complete Facebook-style header with logo, search, navigation icons, and user controls
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, tooltips, dropdowns, and smooth transitions
- **Authentication Pages**: Login and registration forms with Facebook-style styling
- **Home Feed**: Post creation, status updates, and interactive feed components
- **Sidebars**: Left and right sidebars with navigation and content sections

### Technical Features

- **Modern React**: Built with React 18 and TypeScript for type safety
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Component Architecture**: Modular, reusable components following React best practices
- **State Management**: React hooks for local state management
- **Icon Integration**: React Icons library for consistent iconography
- **Form Handling**: Interactive forms with validation and user feedback

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: React Icons
- **Development**: ESLint, TypeScript compiler

## 📁 Project Structure

```
Facebook-UI/
├── public/
│   └── assets/
│       ├── fonts/
│       ├── icons/
│       └── images/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Main navigation header
│   │   ├── Footer.tsx          # Footer component
│   │   ├── login-form.tsx      # Login form
│   │   ├── Home/
│   │   │   ├── addPost.tsx     # Post creation component
│   │   │   ├── addStatus.tsx   # Status update component
│   │   │   └── statusCard.tsx  # Status display card
│   │   └── ui/                 # Reusable UI components
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.tsx       # Login page
│   │   │   └── Register.tsx    # Registration page
│   │   └── home/
│   │       └── Home.tsx        # Main home page
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   └── styles/                 # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 16.0.0 or higher (Download from [nodejs.org](https://nodejs.org/))
- **npm**: Usually comes with Node.js (version 7.0.0 or higher)
- **Git**: For cloning the repository (Download from [git-scm.com](https://git-scm.com/))
- **Code Editor**: VS Code recommended (with TypeScript and React extensions)

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB, recommended 8GB+
- **Storage**: At least 500MB free space
- **Internet**: Required for installing dependencies

### Quick Setup (Recommended)

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Yossif-Hafney/Facebook-UI.git
   cd Facebook-UI
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

4. **View the Application**
   Open your browser and navigate to: `http://localhost:5173`

### Detailed Setup Instructions

#### Step 1: Clone the Repository

```bash
# Clone using HTTPS
git clone https://github.com/Yossif-Hafney/Facebook-UI.git

# Or clone using SSH (if you have SSH keys set up)
git clone git@github.com:Yossif-Hafney/Facebook-UI.git

# Navigate to the project directory
cd Facebook-UI
```

#### Step 2: Verify Node.js Installation

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# If you don't have Node.js installed, download it from:
# https://nodejs.org/
```

#### Step 3: Install Dependencies

```bash
# Install all project dependencies
npm install

# If you encounter permission errors, try:
# sudo npm install (on Linux/Mac)
# Or use npx if available
```

The installation will download and install the following key dependencies:

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **ESLint** - Code linting

#### Step 4: Environment Configuration (Optional)

If you need to configure environment variables:

1. Create a `.env.local` file in the root directory
2. Add your environment variables:
   ```env
   VITE_API_URL=http://localhost:3000/api
   VITE_APP_NAME=Facebook UI Clone
   ```

#### Step 5: Start the Development Server

```bash
# Start the development server
npm run dev

# The server will start on http://localhost:5173
# You should see output like:
#   VITE v4.x.x ready in xxx ms
#   ➜ Local:   http://localhost:5173/
#   ➜ Network: http://192.168.x.x:5173/
#   ➜ press h to show help
```

#### Step 6: Verify Installation

1. Open your browser and go to `http://localhost:5173`
2. You should see the Facebook UI application loading
3. Check the browser console for any errors (F12 → Console tab)

### Alternative Package Managers

#### Using Yarn

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
```

#### Using pnpm

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# The built files will be in the 'dist/' directory
```

### Development Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build the project for production         |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint to check code quality         |

### Troubleshooting

#### Common Issues and Solutions

**1. Port 5173 is already in use**

```bash
# Kill the process using the port
npx kill-port 5173

# Or start on a different port
npm run dev -- --port 3000
```

**2. Node version issues**

```bash
# Check your Node version
node --version

# If you have nvm installed, use the correct version
nvm use 18
nvm install 18
```

**3. Permission errors during installation**

```bash
# On Linux/Mac
sudo npm install

# Or fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

**4. Build fails with TypeScript errors**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Or check TypeScript configuration
npx tsc --noEmit
```

**5. Tailwind CSS not working**

```bash
# Rebuild Tailwind
npm run build

# Or check if Tailwind config is correct
npx tailwindcss --help
```

#### Getting Help

If you encounter issues:

1. **Check the Issues tab** on GitHub for similar problems
2. **Verify your Node.js version** matches the requirements
3. **Clear cache and reinstall**:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```
4. **Check browser console** for JavaScript errors
5. **Verify all dependencies** are installed correctly

### Next Steps

After successful setup:

1. **Explore the codebase** - Check out the `src/` directory
2. **Customize the UI** - Modify components in `src/components/`
3. **Add new features** - Follow the existing patterns
4. **Run tests** - If test scripts are available
5. **Deploy** - Build and deploy to your preferred platform

### Development Workflow

1. **Make changes** to components in `src/components/`
2. **Save files** - Hot reload will update the browser automatically
3. **Check console** for any errors or warnings
4. **Test on different screen sizes** using browser dev tools
5. **Commit changes** when ready

---

**🎉 You're all set!** The Facebook UI application should now be running smoothly on your local machine.

## 📱 Key Components

### Header Component

- Facebook logo and branding
- Global search functionality
- Navigation icons (Home, Videos, Marketplace, Groups)
- User controls (Messenger, Notifications, Profile)
- Responsive mobile menu

### Notifications Dropdown

- Interactive filter tabs (All/Unread)
- Real-time notification display
- Click-to-view functionality
- Smooth animations and transitions

### Authentication System

- Facebook-style login form
- Registration page
- Form validation
- Error handling

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#1877f2` (Facebook blue)
- **Secondary Gray**: `#f2f4f7` (Background)
- **Text Colors**: Various grays for hierarchy
- **Accent Colors**: Blue variants for interactive elements

### Typography

- **Primary Font**: Facebook's custom font stack
- **Sizes**: Responsive text scaling
- **Weights**: Regular, medium, and bold variants

### Spacing

- **Grid System**: 8px base unit
- **Component Spacing**: Consistent padding and margins
- **Responsive Breakpoints**: Mobile-first approach

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- **ESLint**: Configured for React and TypeScript
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (if configured)

### Component Guidelines

- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow consistent naming conventions
- Include proper error boundaries
- Add loading states for async operations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes. Facebook's design and branding are trademarks of Meta Platforms, Inc.

## 🙏 Acknowledgments

- **Meta Platforms, Inc.** for the original Facebook design inspiration
- **React Team** for the excellent React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool

## 📞 Contact

**Yossif Hafney**

- GitHub: [@Yossif-Hafney](https://github.com/Yossif-Hafney)
- Project Link: [https://github.com/Yossif-Hafney/Facebook-UI](https://github.com/Yossif-Hafney/Facebook-UI)

---

_Built with ❤️ using React, TypeScript, and Tailwind CSS_
