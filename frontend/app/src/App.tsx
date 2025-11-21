import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import AppNav from './components/AppNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App: React.FC = () => {
  return (
    //@ts-ignore
    <AppNav>
        <Routes>
          <Route  path="/"  element={<Home/>} />
        </Routes>
    </AppNav>
  )
}
export default App;
