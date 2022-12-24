import CreateStreamPage from '../components/pages/CreateStreamPage/CreateStreamPage';
import HomePage from '../components/pages/HomePage/HomePage';
import ProfilePage from '../components/pages/ProfilePage/ProfilePage';
import ViewStreamPage from '../components/pages/ViewStreamPage/ViewStreamPage';

const UnavailableMessage = () => {
    return <h1>Current page is unavailable</h1>;
};

export const privateRoutes = [
    { path: '/', component: <HomePage />, id: 1 },
    { path: '/createStream', component: <CreateStreamPage />, id: 2 },
    { path: '/viewStream/:streamID', component: <ViewStreamPage/>, id: 3 },
    { path: '/chat', component: <UnavailableMessage />, id: 5 },
    { path: '/bank', component: <UnavailableMessage />, id: 6 },
    { path: '/starred', component: <UnavailableMessage />, id: 7 },
    { path: '/settings', component: <UnavailableMessage />, id: 8 },
    { path: '/profile', component: <ProfilePage/>, id: 9 },
];

export const publicRoutes = [
    { path: '/', component: <HomePage />, id: 1 },
    { path: '/viewStream/:streamID', component: <ViewStreamPage/>, id: 2 },
];