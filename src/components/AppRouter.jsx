import React from 'react';
import { BrowserRouter, Routes, Route, Link, Switch, Redirect, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            {/* <Route element={<Redirect to='/posts' />} /> */}
            <Route path='/error' element={<Error />}/>
            {/* <Navigate to="/posts"></Navigate> */}
            {/* <Redirect to='/error'></Redirect> */}
      </Routes>
    );
};

export default AppRouter;