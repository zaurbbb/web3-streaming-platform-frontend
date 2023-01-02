import React from 'react';
import {
    Route,
    Routes
} from 'react-router-dom';
import {
    privateRoutes,
    publicRoutes
} from './router/routes';
import ThreeDotsLoader from './components/ui/loaders/ThreeDotsLoader/ThreeDotsLoader';

const AppRouter = () => {

    const user = localStorage.getItem('address');

    // if (!localStorage.getItem('address')) {
    //     return <ThreeDotsLoader/>
    // }

    return (
        <Routes>
            {user
                ?
                <>
                    {privateRoutes.map(route =>
                        <Route
                            key={route.id}
                            element={route.component}
                            path={route.path}
                        />
                    )}
                </>
                :
                <>
                    {publicRoutes.map(route =>
                        <Route
                            key={route.id}
                            element={route.component}
                            path={route.path}
                        />
                    )}
                </>
            }
        </Routes>
    );
};

export default AppRouter;