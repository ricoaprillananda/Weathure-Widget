import axios from 'axios';

export async function getWeatherFromMetNo(location: { city?: string; lat?: number; lon?: number }) {
    let lat = location.lat;
    let lon = location.lon;
    if (!lat || !lon) {
        // Use Nominatim to geocode city name
        if (location.city) {
            const geoRes = await axios.get(`https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(location.city)}&format=json&limit=1`);
            const geo = geoRes.data[0];
            lat = geo.lat;
            lon = geo.lon;
        }
    }
    const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
    const res = await axios.get(url, { headers: { 'User-Agent': 'weathure-widget/1.0' } });
    return res.data;
}
