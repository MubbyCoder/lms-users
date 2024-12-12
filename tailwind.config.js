/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensure this includes all your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F6A800', // Warm, golden yellow for vibrancy
        'primary-dark': '#D68B00', // Darker, richer yellow for depth
        secondary: '#4A5568', // Muted gray with a cool tone, resonates with gray-800
        'secondary-dark': '#2D3748', // Darker gray for more contrast
        accent: '#FBBF24', // Lighter, softer yellow to complement primary
        'accent-dark': '#F59E0B', // Darker yellow, for button hover and accent
        background: '#1F2937', // Deep, almost-black background with a grayish tint (close to gray-800)
        'text-dark': '#E2E8F0', // Light grayish text on dark background for contrast
        'text-light': '#F7FAFC', // Soft, almost white text for readability
        border: '#4A5568', // Subtle gray border for dividers
      },
    },
  },
  plugins: [],
};
