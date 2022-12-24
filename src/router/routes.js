import CreateStreamPage from '../components/pages/CreateStreamPage/CreateStreamPage';
import HomePage from '../components/pages/HomePage/HomePage';
import ViewStreamPage from '../components/pages/ViewStreamPage/ViewStreamPage';
import ViewAllStreamsPage from "../components/pages/ViewAllStreams/ViewAllStreamsPage";

export const privateRoutes = [

];

export const publicRoutes = [
    { path: '/home', component: <HomePage />, id: 1 },
    { path: '/createStream', component: <CreateStreamPage/>, id: 2 },
    { path: '/viewStream/:streamID', component: <ViewStreamPage/>, id: 3 },
    { path: '/viewAllStreams', component: <ViewAllStreamsPage/>, id: 4 },
];