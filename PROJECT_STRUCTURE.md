# Project Structure Overview

```
Jarrar_Builders_Web/
├── public/                    # Public static files (if needed)
├── src/
│   ├── assets/
│   │   └── images/           # Image assets
│   │       ├── README.md     # Image requirements
│   │       └── (dubai-skyline.jpg) # Add your image here
│   │
│   ├── components/           # React components
│   │   ├── Header/
│   │   │   ├── Header.jsx    # Header component with logo, nav, contact
│   │   │   └── Header.css    # Header styles
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx      # Hero section with carousel
│   │   │   └── Hero.css      # Hero styles
│   │   │
│   │   └── FloatingButtons/
│   │       ├── FloatingButtons.jsx  # Contact buttons (WhatsApp, Email, Phone)
│   │       └── FloatingButtons.css  # Floating buttons styles
│   │
│   ├── styles/               # Global styles
│   │   ├── index.css        # Global CSS reset and variables
│   │   └── App.css          # App-level styles
│   │
│   ├── App.jsx              # Main app component with routing
│   └── main.jsx             # React entry point
│
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── .eslintrc.cjs            # ESLint configuration
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
└── PROJECT_STRUCTURE.md     # This file

```

## Component Breakdown

### Header Component
- Logo: "SKS REAL ESTATE" in gold
- Navigation menu: Home, Projects, For Sale, For Rent, Our Teams, About Us, Contact Us
- Contact information: Email and phone number
- Mobile-responsive with hamburger menu

### Hero Component
- Full-screen hero section with background image
- Text overlay: "LET'S FIND YOUR LUXURY PROPERTY IN DUBAI"
- Welcome message
- Navigation arrows for carousel (left/right)
- Fully responsive

### FloatingButtons Component
- Vertical stack of contact buttons (WhatsApp, Email, Phone)
- Large circular WhatsApp button at bottom
- Fixed position on right side
- Mobile-optimized sizing

## Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## Next Steps

1. Install dependencies: `npm install`
2. Add Dubai skyline image to `src/assets/images/dubai-skyline.jpg`
3. Start development server: `npm run dev`
4. Customize colors, fonts, and content as needed

