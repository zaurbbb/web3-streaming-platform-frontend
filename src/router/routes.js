import CreateStreamPage from '../components/pages/CreateStreamPage/CreateStreamPage';
import HomePage from '../components/pages/HomePage/HomePage';
import ViewStreamPage from '../components/elements/ViewStreams/ViewStreams';
import ProfilePage from '../components/pages/ProfilePage/ProfilePage';

export const privateRoutes = [
    { path: '/', component: <HomePage />, id: 1 },
    { path: '/createStream', component: <CreateStreamPage />, id: 2 },
    { path: '/viewStream/:streamID', component: <ViewStreamPage />, id: 3 },
    { path: '/chat', component: <h1>Current page is unavailable</h1>, id: 4 },
    { path: '/bank', component: <h1>Current page is unavailable</h1>, id: 5 },
    { path: '/starred', component: <h1>Current page is unavailable</h1>, id: 6 },
    { path: '/settings', component: <h1>Current page is unavailable</h1>, id: 7 },
    { path: '/profile', component: <ProfilePage/>, id: 8 },
];

export const publicRoutes = [
    { path: '/', component: <HomePage />, id: 1 },
    { path: '/createStream', component: <CreateStreamPage />, id: 2 },
    { path: '/viewStream/:streamID', component: <ViewStreamPage />, id: 3 },
];