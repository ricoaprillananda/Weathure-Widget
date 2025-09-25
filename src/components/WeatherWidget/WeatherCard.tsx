import React from 'react';
import { Temperature } from './Temperature';
import { formatDate } from '../../lib/utils/format';
import { WeatherCurrent } from '../../lib/api/mapper';

interface WeatherCardProps {
    data: WeatherCurrent | null;
    units: 'metric' | 'imperial';
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data, units }) => {
    if (!data) return null;
    return (
        <div className="flex flex-col items-center p-4 bg-primary/10 rounded-lg mb-4" aria-label="Current Weather">
            <h2 className="text-xl font-semibold mb-2">{data.city}</h2>
            <Temperature value={data.temp} units={units} />
            <p className="text-lg mt-1">{data.weather}</p>
            <img src={data.icon} alt={data.weather} className="w-16 h-16 mt-2" />
            <p className="text-sm text-gray-500 mt-2">{formatDate(data.date)}</p>
        </div>
    );
};
