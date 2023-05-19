import React from 'react';
import { BrowserRouter, Routes, Route, Link, Switch, Redirect, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
    const isAuth = false;
    return (
            isAuth
                ?
                <Routes>
                    {privateRoutes.map(route => 
                        <Route 
                            key={route}
                            Component={route.component}
                            path={route.path}
                            exact={route.exact}
                        />                   
                    )}
                    <Route path='*' element={<Navigate to='/posts' replace />} />
                </Routes>
                :
                <Routes>
                    {publicRoutes.map(route => 
                            <Route 
                                key={route}
                                Component={route.component}
                                path={route.path}
                                exact={route.exact}
                            />  
                        )}
                    <Route path='*' element={<Navigate to='/login' replace />} />
                </Routes>
    );
};

export default AppRouter;
