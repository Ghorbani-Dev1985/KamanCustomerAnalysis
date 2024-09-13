import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config : Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      container: {
              center: true,
              padding: {
                DEFAULT: '1rem',
                md: '0.625rem',
              }
      },
      gridTemplateColumns: {
        // 24 column grid
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      colors:{
        primary: {
          50: "#f0f7fe",
          100: "#deecfb",
          200: "#c5e0f8",
          300: "#9dcdf3",
          400: "#6eb0ec",
          500: "#4d92e4",
          600: "#3876d8",
          700: "#2f62c6",
          800: "#2c51a3",
          900: "#284680",
          950: "#1d2c4e",
          DEFAULT: "#2c51a3",
           },
           secondary: '#c94040',
           success: 'rgb(0 , 192 , 115)',
           warning: 'rgb(255 , 153 , 0)',
           error: 'rgb(255,71 , 87)',
           danger: '#f43f5e'
       },
       fontFamily: {
        IRANSansWeb: ["var(--font-IRANSansWeb-FD)"],
      },
      backgroundImage: {
        'loginBg' : 'url("/images/bg/loginBG.jpg")',
    },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    variants: {
      scrollbar: ["light"],
    },
    typography: {
      DEFAULT: {
        css: {
          maxWidth: '100ch',
        }
      }
    }
},
  plugins: [
    nextui({
     addCommonColors: true,
     layout:{
      radius: {
        small: "0.125rem",
        medium: "0.375rem", 
        large: "0.5rem", 
      },
     },
     themes: {
      light: {
        screens: {
          'xs': '480px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
        colors:{
          foreground: "#284680",
          primary: {
            50: "#f0f7fe",
            100: "#deecfb",
            200: "#c5e0f8",
            300: "#9dcdf3",
            400: "#6eb0ec",
            500: "#4d92e4",
            600: "#3876d8",
            700: "#2f62c6",
            800: "#2c51a3",
            900: "#284680",
            950: "#1d2c4e",
            DEFAULT: "#2c51a3",
             },
             secondary: '#c94040',
             success: 'rgb(0 , 192 , 115)',
             warning: 'rgb(255 , 153 , 0)',
             error: 'rgb(255,71 , 87)',
             danger: '#f43f5e'
         },
      },
    
     } 
  }),
require("tailwind-scrollbar"),
require('@tailwindcss/typography'),
function ({ addVariant } : any) : void {
  addVariant("child", "& > *");
  addVariant("child-hover", "& > *:hover");
},
],
};
export default config;
