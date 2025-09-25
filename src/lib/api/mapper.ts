// Data mappers for weather providers
export interface WeatherCurrent {
    city: string;
    temp: number;
    weather: string;
    icon: string;
    date: string;
}
export interface WeatherHourly {
    date: string;
    temp: number;
    weather: string;
    icon: string;
}
export interface WeatherDaily {
    date: string;
    tempMax: number;
    tempMin: number;
    weather: string;
    icon: string;
}
export interface WeatherAlert {
    event: string;
    description: string;
}

// Map OpenWeather or Met.no data to unified format
// This is a simplified example; production code should handle all edge cases
export function mapWeatherData(raw: any, units: 'metric' | 'imperial') {
    void units; // silence unused variable warning
    return {
        current: {
            city: raw.city?.name || raw.city || 'Unknown',
            temp: raw.current?.temp || raw.properties?.timeseries[0]?.data?.instant?.details?.air_temperature || 0,
            weather: raw.current?.weather[0]?.description || raw.properties?.timeseries[0]?.data?.next_1_hours?.summary?.symbol_code || '',
            icon: raw.current?.weather[0]?.icon || '/icon-192.png',
            date: new Date().toISOString(),
        },
        hourly: (raw.hourly?.map((h: any) => ({
            date: h.dt ? new Date(h.dt * 1000).toISOString() : '',
            temp: h.temp,
            weather: h.weather[0]?.description,
            icon: h.weather[0]?.icon || '/icon-192.png',
        })) || []).slice(0, 48),
        daily: (raw.daily?.map((d: any) => ({
            date: d.dt ? new Date(d.dt * 1000).toISOString() : '',
            tempMax: d.temp?.max,
            tempMin: d.temp?.min,
            weather: d.weather[0]?.description,
            icon: d.weather[0]?.icon || '/icon-192.png',
        })) || []).slice(0, 10),
        alerts: raw.alerts?.map((a: any) => ({
            event: a.event,
            description: a.description,
        })) || [],
    };
}
