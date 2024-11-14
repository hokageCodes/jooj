/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#212B21",
        headingText: "#C5D3AD",  
        paragraphText: "#A2A79A",  
        navLink: "#C5D3AD",   
        ctaBg: "#C5D3AD", 
        ctaText: "#212B21",  
        inputBg: "#FAFAFA",          
        inputCta: "#212B21",         
      },
      backgroundImage: {
        'card-gradient': "url('/assets/bg-gradient.webp')",
      },
    },
  },
  plugins: [],
};
