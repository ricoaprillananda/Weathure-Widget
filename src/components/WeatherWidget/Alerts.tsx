import React from 'react';
import { WeatherAlert } from '../../lib/api/mapper';

interface AlertsProps {
    alerts: WeatherAlert[];
}

export const Alerts: React.FC<AlertsProps> = ({ alerts }) => {
    if (!alerts || alerts.length === 0) return null;
    return (
        <section className="mt-4" aria-label="Weather Alerts">
            <h3 className="text-lg font-semibold mb-2 text-red-700">Weather Alerts</h3>
            <ul className="list-disc pl-5">
                {alerts.map((alert, idx) => (
                    <li key={idx} className="text-sm text-red-800">
                        <strong>{alert.event}:</strong> {alert.description}
                    </li>
                ))}
            </ul>
        </section>
    );
};
