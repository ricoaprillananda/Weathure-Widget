import React from 'react';
import { useWeatherStore } from '../../lib/state/useWeatherStore';

export const UnitToggle: React.FC = () => {
    const { units, setUnits } = useWeatherStore();
    return (
        <div className="flex items-center gap-2 mb-2" role="group" aria-label="Unit Toggle">
            <button
                className={`px-2 py-1 rounded ${units === 'metric' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                onClick={() => setUnits('metric')}
                aria-pressed={units === 'metric'}
            >
                °C
            </button>
            <button
                className={`px-2 py-1 rounded ${units === 'imperial' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                onClick={() => setUnits('imperial')}
                aria-pressed={units === 'imperial'}
            >
                °F
            </button>
        </div>
    );
};
