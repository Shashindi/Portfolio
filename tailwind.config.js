export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66abf9",
          400: "#338ff7",
          500: "#0073f5",
          600: "#005cc4",
          700: "#004593",
          800: "#002e62",
          900: "#001731",
        },
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        dark: {
          100: "#d5d5d5",
          200: "#aaaaaa",
          300: "#808080",
          400: "#555555",
          500: "#2b2b2b",
          600: "#2a1a3a",
          700: "#3a1a4a",
          800: "#1A0129",
          900: "#080808",
        },
        background: {
          DEFAULT: "#1A1C2C", // ✅ this enables `bg-background`
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
