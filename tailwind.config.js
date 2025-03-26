import colors from './src/theme/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.COLORS.primary,
        secondary: colors.COLORS.secondary,
        success: colors.COLORS.success,
        warning: colors.COLORS.warning,
        error: colors.COLORS.error,
        neutral: colors.COLORS.neutral,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}