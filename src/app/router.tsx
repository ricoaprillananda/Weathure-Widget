import { createRouter, RootRoute, Route } from '@tanstack/react-router';
import Home from '../pages/Home';
import EmbedDemo from '../pages/EmbedDemo';


const rootRoute = new RootRoute({
    component: () => <Home />,
});

const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <Home />,
});

const embedRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/embed',
    component: () => <EmbedDemo />,
});

const routeTree = rootRoute.addChildren([homeRoute, embedRoute]);

const router = createRouter({
    routeTree,
});

export default router;
