import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Products from './pages/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/products" element={<Products/>}/>
        
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
