/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                'white': '#EAEBED',
                'red': '#BC2C1A',
                'black': '#001A23',
                'yellow': '#FFB30F',
                'blue-light': '#4A7B9D',
            },
            fontFamily: {
                'primary': ['Roboto', 'sans-serif'],
                'secondary': ['Arial', 'sans-serif'],
            },
            fontSize: {
                'base': '1rem',
                'title': '2rem',
                'subtitle': '1.5rem',
                'body': '1rem',
                'caption': '0.875rem',
            },
            fontWeight: {
                'normal': 400,
                'bold': 700,
            },
            lineHeight: {
                'base': 1.5,
            },
            borderRadius: {
                'base': '4px',
                'card': '8px',
            },
            borderWidth: {
                'default': '1px',
            },
            boxShadow: {
                'base': '0 2px 4px rgba(0,0,0,0.1)',
            },
            spacing: {
                'base': '1rem',
                'half': '0.5rem',
                'double': '2rem',
                'quadruple': '4rem',
            },
        },
    },
    plugins: [],
}
