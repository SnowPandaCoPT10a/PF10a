import React from "react";
import {BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footers from './components/Footers/Footers';
import Members from "./components/Members/Members";
import Tienda from './components/tiendaCategorias/Tienda'
import CardBoard from './components/CardBoard/CardBoard.jsx'


function App() {
  return (
     <BrowserRouter>
    <div className='App'>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path="/Members" element={<Members/>} />
        <Route exact path='/Shop' element={<Tienda/>} />
        <Route exact path='/Board' element={<CardBoard/>} />
      </Routes>  
      <Footers/>
    </div>
     </BrowserRouter>
  );
}

export default App;
