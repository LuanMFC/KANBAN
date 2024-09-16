import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      DefaultTheme: {
        colors: {
          primary: {
            50: "#F2F3E8",
            100: "#DADDCC",
            200: "#C2C7B1",
            300: "#AAB195",
            400: "#929C7A",
            500: "#7A8760",
            600: "#6F7351",
            700: "#5A5D44",
            800: "#454738",
            900: "#30322C",
            foreground: "#FAFAFA", // contrast color
            DEFAULT: "#6F7351",
          },
          secondary: {
            50: "#F9F9F9",
            100: "#EFEFEF",
            200: "#E5E5E5",
            300: "#DBDBDB",
            400: "#D1D1D1",
            500: "#BFBFBF",
            600: "#A5A5A5",
            700: "#8B8B8B",
            800: "#717171",
            900: "#575757",
            foreground: "#BFBFBF", // contrast color
            DEFAULT: "#BFBFBF",
          },
          terciary: {
            50: "#F0F0F0",
            100: "#D9D9D9",
            200: "#C2C2C2",
            300: "#ABABAB",
            400: "#949494",
            500: "#7D7D7D",
            600: "#666666",
            700: "#595959",
            800: "#404040",
            900: "#292929",
            foreground: "#595959", // contrast color
            DEFAULT: "#595959",
          },
          ligth: {
            DEFAULT: "#FAFAFA",

          }
        }, // light theme colors
      },
    }
  })],
}
