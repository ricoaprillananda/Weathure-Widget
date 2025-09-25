import React, { useState } from 'react';
import { useWeatherStore } from '../../lib/state/useWeatherStore';

export const LocationPicker: React.FC = () => {
    const { location, setLocation, fetchWeather } = useWeatherStore();
    const [input, setInput] = useState(location.city || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setLocation({ ...location, city: input });
        fetchWeather();
    };

    return (
        <form className="flex items-center gap-2 mb-4" onSubmit={handleSearch} aria-label="Location Picker">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search city or coordinates"
                className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                aria-label="City or coordinates"
            />
            <button type="submit" className="px-3 py-2 bg-primary text-white rounded">Search</button>
        </form>
    );
};
