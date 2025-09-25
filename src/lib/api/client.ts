import { getWeatherFromOpenWeather } from './providers/openweather';
import { getWeatherFromMetNo } from './providers/metno';
import { mapWeatherData } from './mapper';

export async function fetchWeatherData(location: { city?: string; lat?: number; lon?: number }, units: 'metric' | 'imperial') {
    try {
        const raw = await getWeatherFromOpenWeather(location, units);
        return mapWeatherData(raw, units);
    } catch (err) {
        // Fallback to Met.no if OpenWeather fails
        const raw = await getWeatherFromMetNo(location);
        return mapWeatherData(raw, units);
    }
}
