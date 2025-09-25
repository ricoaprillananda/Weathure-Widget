import React from 'react';
import { WeatherDaily } from '../../lib/api/mapper';
import { formatDate } from '../../lib/utils/format';

interface ForecastDailyProps {
    data: WeatherDaily[];
    units: 'metric' | 'imperial';
}

export const ForecastDaily: React.FC<ForecastDailyProps> = ({ data, units }) => (
    <section className="mt-4" aria-label="Daily Forecast">
        <h3 className="text-lg font-semibold mb-2">Daily Forecast</h3>
        <div className="grid grid-cols-2 gap-2">
            {data.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center p-2 bg-primary/5 rounded">
                    <span className="text-xs text-gray-500">{formatDate(day.date)}</span>
                    <img src={day.icon} alt={day.weather} className="w-8 h-8" />
                    <span className="font-medium">{day.tempMax}° / {day.tempMin}°{units === 'metric' ? 'C' : 'F'}</span>
                </div>
            ))}
        </div>
    </section>
);
