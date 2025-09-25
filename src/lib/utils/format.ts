export function formatDate(date: string) {
    return new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

export function formatHour(date: string) {
    return new Date(date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}
