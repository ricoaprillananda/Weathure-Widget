import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '../components/ui/theme-provider';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n';
import router from './router';
import '../styles/globals.css';
import '../styles/theme.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </QueryClientProvider>
        </I18nextProvider>
    </React.StrictMode>
);
