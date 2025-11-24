import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'atropos/css'
import BikeShop from './pages/BikeShop';
import UserList from './pages/UserList';

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";


const App: React.FC = () => {

  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", mode);
  }, [mode]);

  return (
    //@ts-ignore
    <Routes>
      <Route  path="/"  element={<Home/>} />
      <Route  path="/bikeshop"  element={<BikeShop/>} />
      <Route  path="/userList" element={<UserList/>} />
    </Routes>
  )
}
export default App;
