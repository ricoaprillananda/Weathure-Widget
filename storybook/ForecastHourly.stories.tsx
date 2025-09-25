// ...existing code...
import { ForecastHourly } from '../src/components/WeatherWidget/ForecastHourly';

export default {
    title: 'WeatherWidget/ForecastHourly',
    component: ForecastHourly,
};

const sample = [
    { date: new Date().toISOString(), temp: 22, weather: 'Clear', icon: '/icon-192.png' },
    { date: new Date().toISOString(), temp: 21, weather: 'Cloudy', icon: '/icon-192.png' },
];

export const Default = () => <ForecastHourly data={sample} units="metric" />;
