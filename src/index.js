import React from 'react';
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./Cook-Book/Home";
import Pricing from "./Cook-Book/Pricing";
import More from "./Cook-Book/More";
import Features from "./Cook-Book/Features"

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
    < BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="feature" element={<Features />} />
            <Route path="more" element={<More />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            </Route>
        </Routes>


    </BrowserRouter>

);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

