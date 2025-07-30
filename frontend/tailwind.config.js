/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bgColor': '#cca98d',
        // Enhanced Dark Mode Color Palette
        dark: {
          // Primary backgrounds
          'bg-primary': '#0f0f0f',      // Deep black for main background
          'bg-secondary': '#1a1a1a',    // Slightly lighter for cards
          'bg-tertiary': '#2a2a2a',     // For elevated elements
          'bg-accent': '#1e1e1e',       // For special sections
          
          // Surface colors
          'surface-primary': '#252525',  // Card backgrounds
          'surface-secondary': '#303030', // Elevated surfaces
          'surface-hover': '#353535',    // Hover states
          
          // Text colors
          'text-primary': '#f5f5f5',     // Main text
          'text-secondary': '#d1d1d1',   // Secondary text
          'text-muted': '#a1a1a1',       // Muted text
          'text-accent': '#fbbf24',      // Accent text (warm yellow)
          
          // Border colors
          'border-primary': '#404040',   // Main borders
          'border-secondary': '#505050', // Secondary borders
          'border-accent': '#d97706',    // Accent borders (warm orange)
          
          // Warm accent colors that complement the light theme
          'warm-primary': '#f59e0b',     // Warm amber
          'warm-secondary': '#d97706',   // Warm orange
          'warm-tertiary': '#92400e',    // Deep warm brown
          'warm-light': '#fbbf24',       // Light warm yellow
          
          // Gradient colors
          'gradient-start': '#1a1a1a',
          'gradient-mid': '#2a2a2a',
          'gradient-end': '#0f0f0f',
        }
      },
      backgroundImage: {
        'dark-gradient-primary': 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
        'dark-gradient-secondary': 'linear-gradient(135deg, #252525 0%, #303030 50%, #252525 100%)',
        'dark-gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)',
        'dark-gradient-accent': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
      },
      boxShadow: {
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.8)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -1px rgba(0, 0, 0, 0.4)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.5)',
        'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.8), 0 10px 10px -5px rgba(0, 0, 0, 0.6)',
        'dark-warm': '0 10px 25px -5px rgba(245, 158, 11, 0.3), 0 4px 6px -2px rgba(217, 119, 6, 0.2)',
      }
    },
  },
  plugins: [],
}
