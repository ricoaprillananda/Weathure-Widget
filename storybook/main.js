module.exports = {
    stories: [
        '../src/components/WeatherWidget/*.tsx',
        '../src/components/ui/*.tsx',
    ],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/react',
        options: {}
    },
    docs: {
        autodocs: true
    }
};
