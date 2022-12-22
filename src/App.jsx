import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';
import { publicRoutes } from './router/routes';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import React from 'react';

function App() {
    return (
    <BrowserRouter>
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
    </BrowserRouter>
    );
}

export default App;
