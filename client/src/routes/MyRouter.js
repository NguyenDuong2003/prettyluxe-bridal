import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';

const MyRouter = () => {
    return (
        <Routes>
            {PublicRouter.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
            {PrivateRouter.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};

export default MyRouter;
