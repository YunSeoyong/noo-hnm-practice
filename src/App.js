import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<ProductAll />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<PrivateRoute />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
