import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from 'pages/Home'
import About from 'pages/About'
import Hunt from 'pages/Hunt'
import Admin from 'pages/Admin'
import Train from 'pages/Train'
import Shop from 'pages/Shop'
import Contact from 'pages/Contact'
import ViewPackage from 'pages/ViewPackage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from 'layouts/BaseLayout'
// import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Router>
    {/*
        <Auth0Provider
        domain={ process.env.REACT_APP_AUTH0_DOMAIN }
        clientId={ process.env.REACT_APP_AUTH0_CLIENT_ID }
        redirectUri={ window.location.origin }
        >
    */}
            <Routes>
                <Route path='/' element={ <BaseLayout /> }>
                    <Route index element={ <Home /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/hunt' element={ <Hunt /> } />
                    <Route path='/train' element={ <Train /> } />
                    <Route path='/train/:pdf' element={ <ViewPackage /> }/>
                    <Route path='/shop' element={ <Shop />} />
                    <Route path='/contact' element={ <Contact /> } />
                </Route>
                {/* <Route path='/admin' element={ <Admin /> } /> */}
            </Routes>
        {/* </Auth0Provider> */}
    </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
