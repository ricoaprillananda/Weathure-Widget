// ...existing code...
import { ForecastDaily } from '../src/components/WeatherWidget/ForecastDaily';

export default {
    title: 'WeatherWidget/ForecastDaily',
    component: ForecastDaily,
};

const sample = [
    { date: new Date().toISOString(), tempMax: 25, tempMin: 15, weather: 'Clear', icon: '/icon-192.png' },
    { date: new Date().toISOString(), tempMax: 22, tempMin: 14, weather: 'Rain', icon: '/icon-192.png' },
];

export const Default = () => <ForecastDaily data={sample} units="metric" />;
