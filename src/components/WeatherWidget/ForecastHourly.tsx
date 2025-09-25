import React from 'react';
import { WeatherHourly } from '../../lib/api/mapper';
import { formatHour } from '../../lib/utils/format';

interface ForecastHourlyProps {
    data: WeatherHourly[];
    units: 'metric' | 'imperial';
}

export const ForecastHourly: React.FC<ForecastHourlyProps> = ({ data, units }) => (
    <section className="mt-4" aria-label="Hourly Forecast">
        <h3 className="text-lg font-semibold mb-2">Hourly Forecast</h3>
        <div className="flex overflow-x-auto gap-2 pb-2">
            {data.map((hour, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[60px] p-2 bg-primary/5 rounded">
                    <span className="text-xs text-gray-500">{formatHour(hour.date)}</span>
                    <img src={hour.icon} alt={hour.weather} className="w-8 h-8" />
                    <span className="font-medium">{hour.temp}°{units === 'metric' ? 'C' : 'F'}</span>
                </div>
            ))}
        </div>
    </section>
);
