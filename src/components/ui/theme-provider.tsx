import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSettingsStore } from '../../lib/state/settingsStore';

const ThemeContext = createContext<'light' | 'dark' | 'auto'>('auto');

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme, highContrast } = useSettingsStore();
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>(theme);

    useEffect(() => {
        let appliedTheme = theme;
        if (highContrast) {
            document.documentElement.setAttribute('data-theme', 'high-contrast');
        } else if (theme === 'auto') {
            appliedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', appliedTheme);
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
        setCurrentTheme(appliedTheme);
    }, [theme, highContrast]);

    return <ThemeContext.Provider value={currentTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
