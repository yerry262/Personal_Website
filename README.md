# Jerry Steele - Personal Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

🌐 **Live Site:** [https://yerry262.github.io/Personal_Website](https://yerry262.github.io/Personal_Website)

## Features

- ⚡ **Modern Design** - Dark theme with glass-morphism effects and smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Animated UI** - Framer Motion animations for engaging user experience
- 🔗 **Social Integration** - Links to GitHub, LinkedIn, and email

## Tech Stack

- **React 19** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Local Development

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yerry262/Personal_Website.git
   cd Personal_Website
   ```

2. Install dependencies:
   ```bash
   cd frontend
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
yarn build
```

The build output will be in the `frontend/build` folder.

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

## Project Structure

```
Personal_Website/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── frontend/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── About.js    # About section with experience & skills
│   │   │   ├── Footer.js   # Footer with contact info
│   │   │   ├── Hero.js     # Hero section with intro
│   │   │   ├── Navbar.js   # Navigation bar
│   │   │   └── Projects.js # Projects showcase
│   │   ├── App.js          # Main app component
│   │   ├── App.css         # Additional styles
│   │   └── index.css       # Global styles & Tailwind imports
│   ├── package.json        # Dependencies & scripts
│   └── tailwind.config.js  # Tailwind configuration
└── README.md
```

## License

MIT License - feel free to use this as a template for your own portfolio!

## Contact

- **Email:** jerry21steele@gmail.com
- **LinkedIn:** [jerry-steele-08a2b012b](https://www.linkedin.com/in/jerry-steele-08a2b012b/)
- **GitHub:** [yerry262](https://github.com/yerry262)
