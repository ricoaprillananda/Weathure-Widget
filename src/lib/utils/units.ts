export function formatTemperature(value: number, units: 'metric' | 'imperial') {
    return `${Math.round(value)}°${units === 'metric' ? 'C' : 'F'}`;
}
