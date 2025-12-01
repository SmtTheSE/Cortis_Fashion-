# Fashion! Vue.js Website

A modern, responsive e-commerce website for Fashion! - a Cortis-inspired fashion brand, built using Vue.js and The Cube Method Framework.

## The Cube Method Implementation

This website implements all three layers of The Cube Method Framework to ensure strategic alignment between business goals and digital presence.

### 1. Transactional Components (The "Action" Layer)

Features that enable immediate, concrete user actions:

- **User Registration & Login System** - Allows users to create accounts and log in
- **Secure Checkout Process** - SSL-certified payment processing
- **Contact Forms** - Newsletter signup and customer support forms
- **Product Filtering** - Advanced filtering and sorting of products
- **Shopping Cart** - Add products to cart functionality

### 2. Transformational Components (The "Behavior" Layer)

Features designed to change user behavior and build engagement:

- **Fashion Blog** - Resources on K-pop fashion trends and styling tips
- **Product Style Information** - Detailed styling advice and outfit ideas
- **Community Forum** - Platform for user interaction and discussion
- **Style Dashboard** - Shows personal fashion journey and style evolution
- **Look Books** - Educational content on creating fashionable outfits

### 3. Transcendent Components (The "Vision" Layer)

Features that communicate brand values and long-term vision:

- **Mission & Vision Statement** - Core company values and goals
- **Fashion Philosophy** - Our approach to style and self-expression
- **Customer Spotlights** - Success stories from the community
- **Designer Profiles** - Introduction to the creative minds behind the brand
- **Trend Reports** - Insights into upcoming fashion directions

## Project Structure

```
fashion-vue/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── router/
│   ├── store/
│   ├── assets/
│   │   └── styles/
│   ├── App.vue
│   └── main.js
├── package.json
└── README.md
```

## Key Features

1. **Vue.js 3** - Modern reactive framework
2. **Vue Router** - Client-side routing for SPA experience
3. **GSAP Animations** - Smooth, professional animations
4. **Responsive Design** - Works on mobile, tablet, and desktop
5. **Component-Based Architecture** - Reusable, maintainable code
6. **Modern UI/UX** - Bold, vibrant aesthetic with K-pop inspired colors
7. **Performance Optimized** - Efficient code and asset loading

## Technologies Used

- Vue.js 3
- Vue Router
- GSAP (GreenSock Animation Platform)
- CSS3 (Flexbox and Grid layouts)
- Google Fonts (Inter)
- Font Awesome Icons
- Vite (Build tool)

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run serve
```

## Customization

To customize the website:

1. Modify colors in `:root` variables in [src/assets/styles/main.css](file:///Users/sittminthar/Desktop/Management%20In%20the%20Digital%20Economy/greenlife-vue/src/assets/styles/main.css)
2. Replace images in the `src/assets/` folder
3. Update content in the various Vue components
4. Adjust animations in component methods

## The Cube Method Benefits Demonstrated

1. **Clear Goal Alignment** - Each component maps to specific business objectives
2. **Layered Strategy** - Addresses immediate actions, behavioral changes, and vision
3. **Measurable Outcomes** - Built-in metrics for transactional (conversion), transformational (engagement), and transcendent (brand value) goals
4. **Stakeholder Focus** - Components designed for developers, marketers, and leadership teams

## Deployment

The website can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages) by running the build command and uploading the contents of the `dist` folder.