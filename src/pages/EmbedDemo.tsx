import React from 'react';

const EmbedDemo: React.FC = () => (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-primary">
        <h1 className="text-2xl font-semibold mb-2">Embed Weather Widget</h1>
        <iframe
            title="Weather Widget"
            src="/"
            width="350"
            height="500"
            style={{ border: 'none', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            aria-label="Weather Widget Demo"
        />
        <p className="mt-4 text-sm text-gray-500">Embed via iframe or npm import for React apps.</p>
    </main>
);

export default EmbedDemo;
