import { BrowserRouter } from 'react-router-dom';
import {
    createReactClient,
    LivepeerConfig,
    studioProvider,
} from '@livepeer/react';
import Header from './components/elements/Header/Header';
import Sidebar from './components/elements/Sidebar/Sidebar';
import AppRouter from './AppRouter';

const livePeerClient = createReactClient({
    provider: studioProvider({
        apiKey: 'd717db73-99bc-49c2-ba40-e2cc146030f7',
    }),
});

function App() {
    console.log(localStorage.getItem('address'));
    return (
        <BrowserRouter>
            <LivepeerConfig client={livePeerClient}>
            <Header />
            <main>
                <Sidebar />
                <AppRouter />
            </main>
            </LivepeerConfig>
        </BrowserRouter>
    );
}

export default App;
