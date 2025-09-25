import React, { useEffect } from 'react';
import { useWeatherStore } from '../../lib/state/useWeatherStore';
import { WeatherCard } from './WeatherCard';
import { ForecastHourly } from './ForecastHourly';
import { ForecastDaily } from './ForecastDaily';
import { Alerts } from './Alerts';
import { LoadingSkeleton } from './LoadingSkeleton';
import { UnitToggle } from './UnitToggle';
import { LocationPicker } from './LocationPicker';

const WeatherWidget: React.FC = () => {
    const { loading, error, fetchWeather, location, units, forecasts, alerts } = useWeatherStore();

    useEffect(() => {
        fetchWeather();
    }, [location, units]);

    if (loading) return <LoadingSkeleton />;
    if (error) return (
        <div role="alert" className="p-4 bg-red-100 text-red-800 rounded">
            <p>{error}</p>
            <button className="mt-2 px-3 py-1 bg-primary text-white rounded" onClick={fetchWeather}>Retry</button>
        </div>
    );

    return (
        <section aria-label="Weather Widget" className="w-full max-w-md mx-auto p-4 bg-white dark:bg-background rounded-lg shadow-lg">
            <LocationPicker />
            <UnitToggle />
            <WeatherCard data={forecasts.current} units={units} />
            <Alerts alerts={alerts} />
            <ForecastHourly data={forecasts.hourly} units={units} />
            <ForecastDaily data={forecasts.daily} units={units} />
        </section>
    );
};

export default WeatherWidget;
