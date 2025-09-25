import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{ts,tsx}',
        './storybook/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0ea5e9',
                    dark: '#0369a1',
                    light: '#38bdf8'
                },
                background: {
                    DEFAULT: '#f9fafb',
                    dark: '#1e293b'
                }
            }
        }
    },
    plugins: []
};

export default config;
