import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AppNav from './components/AppNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'atropos/css'

import BikeShop from './pages/BikeShop';


const App: React.FC = () => {
  return (
    //@ts-ignore
    <Routes>
      <Route  path="/"  element={<Home/>} />
      <Route  path="/bikeshop"  element={<BikeShop/>} />
    </Routes>
  )
}
export default App;
