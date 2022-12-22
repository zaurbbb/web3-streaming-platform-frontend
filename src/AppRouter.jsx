import React, { useContext } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {
    privateRoutes,
    publicRoutes
} from './router/routes';
import { AuthContext } from './сontext';
import ThreeDotsLoader from './components/ui/loaders/ThreeDotsLoader/ThreeDotsLoader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <ThreeDotsLoader/>
    }
    return (
        <Routes>
            {isAuth
                ?
                <>
                    {privateRoutes.map(route =>
                        <Route
                            key={route.id}
                            element={route.component}
                            path={route.path}
                        />
                    )}

                    <Route
                        path='*'
                        element={<Navigate to='/posts' replace/>}
                    />
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
                    <Route
                        path='*'
                        element={<Navigate to='/login' replace/>}
                    />
                </>
            }
        </Routes>
    );
};

export default AppRouter;