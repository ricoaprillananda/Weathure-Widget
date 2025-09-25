// ...existing code...
import { Alerts } from '../src/components/WeatherWidget/Alerts';

export default {
    title: 'WeatherWidget/Alerts',
    component: Alerts,
};

const sample = [
    { event: 'Flood Warning', description: 'Heavy rain expected.' },
];

export const Default = () => <Alerts alerts={sample} />;
