/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(200, 10%, 5%)",
        primary: "hsl(137, 50%, 62%)",
        "primary-foreground": "hsl(30, 45%, 31%)",
        secondary: "hsl(228, 20%, 90%)",
        "secondary-foreground": "hsl(60, 47%, 47%)",
        accent: "hsl(245, 10%, 90%)",
        "accent-foreground": "hsl(30, 30%, 30%)",
        muted: "hsl(241, 6%, 93%)",
        "muted-foreground": "hsl(108, 10%, 42%)",
        destructive: "hsl(0, 80%, 70%)",
        "destructive-foreground": "hsl(0, 0%, 100%)",
        card: "hsl(0, 0%, 100%)",
        "card-foreground": "hsl(200, 10%, 5%)",
        border: "hsl(30, 20%, 90%)",
        input: "hsl(30, 20%, 90%)",
        ring: "hsl(130, 20%, 40%)",
      },
      borderRadius: {
        lg: "0.75rem",
      },
    },
  },
  plugins: [],
};
