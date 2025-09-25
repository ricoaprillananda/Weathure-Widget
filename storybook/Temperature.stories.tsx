// ...existing code...
import { Temperature } from '../src/components/WeatherWidget/Temperature';

export default {
    title: 'WeatherWidget/Temperature',
    component: Temperature,
};

export const Celsius = () => <Temperature value={22} units="metric" />;
export const Fahrenheit = () => <Temperature value={72} units="imperial" />;
