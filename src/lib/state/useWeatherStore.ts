import { create } from 'zustand';
import { WeatherCurrent, WeatherHourly, WeatherDaily, WeatherAlert } from '../api/mapper';
import { fetchWeatherData } from '../api/client';

interface Location {
    city?: string;
    lat?: number;
    lon?: number;
}

interface Forecasts {
    current: WeatherCurrent | null;
    hourly: WeatherHourly[];
    daily: WeatherDaily[];
}

interface WeatherState {
    location: Location;
    units: 'metric' | 'imperial';
    forecasts: Forecasts;
    alerts: WeatherAlert[];
    loading: boolean;
    error: string | null;
    setLocation: (location: Location) => void;
    setUnits: (units: 'metric' | 'imperial') => void;
    fetchWeather: () => Promise<void>;
}

export const useWeatherStore = create<WeatherState>((set, get) => ({
    location: { city: 'New York' },
    units: 'metric',
    forecasts: { current: null, hourly: [], daily: [] },
    alerts: [],
    loading: false,
    error: null,
    setLocation: (location) => set({ location }),
    setUnits: (units) => set({ units }),
    fetchWeather: async () => {
        set({ loading: true, error: null });
        try {
            const { location, units } = get();
            const data = await fetchWeatherData(location, units);
            set({
                forecasts: {
                    current: data.current,
                    hourly: data.hourly,
                    daily: data.daily,
                },
                alerts: data.alerts,
                loading: false,
                error: null,
            });
        } catch (err: any) {
            set({ loading: false, error: err?.message || 'Failed to fetch weather data.' });
        }
    },
}));
