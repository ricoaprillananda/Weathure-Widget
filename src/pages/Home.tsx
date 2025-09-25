import React from 'react';
import { WeatherWidget } from '../components/WeatherWidget';

const Home: React.FC = () => (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-primary">
        <h1 className="text-3xl font-bold mb-4">Weathure Widget Demo</h1>
        <WeatherWidget />
    </main>
);

export default Home;
