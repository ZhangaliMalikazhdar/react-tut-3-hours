import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, Switch, Redirect, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    console.log(isAuth)
    return (
            isAuth
                ?
                <Routes>
                    {privateRoutes.map(route => 
                        <Route 
                            key={route.path}
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
                                key={route.path}
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
