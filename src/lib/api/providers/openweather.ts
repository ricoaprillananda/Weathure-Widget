import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeatherFromOpenWeather(location: { city?: string; lat?: number; lon?: number }, units: 'metric' | 'imperial') {
    let url = `${BASE_URL}/onecall?appid=${API_KEY}&units=${units}`;
    if (location.lat && location.lon) {
        url += `&lat=${location.lat}&lon=${location.lon}`;
    } else if (location.city) {
        // Geocoding API to get lat/lon from city
        const geoRes = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location.city)}&limit=1&appid=${API_KEY}`);
        const geo = geoRes.data[0];
        url += `&lat=${geo.lat}&lon=${geo.lon}`;
    }
    const res = await axios.get(url);
    return res.data;
}
