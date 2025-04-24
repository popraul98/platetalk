/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/flowbite/**/*.{js,ts}', // Include Flowbite
    ],
    darkMode: 'class', // Activează dark mode
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'), // Adaugă plugin-ul Flowbite
    ],
};