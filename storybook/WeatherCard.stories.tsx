// ...existing code...
import { WeatherCard } from '../src/components/WeatherWidget/WeatherCard';

export default {
    title: 'WeatherWidget/WeatherCard',
    component: WeatherCard,
};

const sample = {
    city: 'San Francisco',
    temp: 22,
    weather: 'Clear',
    icon: '/icon-192.png',
    date: new Date().toISOString(),
};

export const Default = () => <WeatherCard data={sample} units="metric" />;
