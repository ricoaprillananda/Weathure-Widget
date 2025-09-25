import React from 'react';
import { formatTemperature } from '../../lib/utils/units';

interface TemperatureProps {
    value: number;
    units: 'metric' | 'imperial';
}

export const Temperature: React.FC<TemperatureProps> = ({ value, units }) => (
    <span className="text-4xl font-bold" aria-label="Temperature">
        {formatTemperature(value, units)}
    </span>
);
