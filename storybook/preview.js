export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
    backgrounds: {
        default: 'light',
        values: [
            { name: 'light', value: '#f9fafb' },
            { name: 'dark', value: '#1e293b' },
            { name: 'high-contrast', value: '#000' },
        ],
    },
};
