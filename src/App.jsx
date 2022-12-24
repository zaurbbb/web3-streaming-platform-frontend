import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LivepeerConfig, createReactClient, studioProvider} from '@livepeer/react';
import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';
import {publicRoutes} from './router/routes';
import {useEffect, useState} from "react";
import {AddressContext} from "./context";

const livePeerClient = createReactClient({
    provider: studioProvider({
        apiKey: 'd717db73-99bc-49c2-ba40-e2cc146030f7',
    }),
});


function App() {
    return (
        <BrowserRouter>
            <LivepeerConfig client={livePeerClient}>
            <Header />
            <main>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            key={route.id}
                            element={route.component}
                            path={route.path}
                        />
                    )}
                </Routes>
                {/*<AppRouter />*/}
            </main>
            <Footer />
            </LivepeerConfig>
        </BrowserRouter>
    );
}

export default App;
