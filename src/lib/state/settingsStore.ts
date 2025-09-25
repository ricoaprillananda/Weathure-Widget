import { create } from 'zustand';

interface SettingsState {
    theme: 'light' | 'dark' | 'auto';
    locale: 'en' | 'id';
    highContrast: boolean;
    prefersReducedMotion: boolean;
    setTheme: (theme: 'light' | 'dark' | 'auto') => void;
    setLocale: (locale: 'en' | 'id') => void;
    setHighContrast: (highContrast: boolean) => void;
    setPrefersReducedMotion: (prefers: boolean) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
    theme: 'auto',
    locale: 'en',
    highContrast: false,
    prefersReducedMotion: false,
    setTheme: (theme) => set({ theme }),
    setLocale: (locale) => set({ locale }),
    setHighContrast: (highContrast) => set({ highContrast }),
    setPrefersReducedMotion: (prefers) => set({ prefersReducedMotion: prefers }),
}));
