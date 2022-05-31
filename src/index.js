import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from 'pages/Home';
import About from 'pages/About';
import Hunts from 'pages/Hunts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from 'layouts/BaseLayout';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={ <BaseLayout /> }>
                <Route index element={ <Home /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/hunts' element={ <Hunts /> } />
            </Route>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
