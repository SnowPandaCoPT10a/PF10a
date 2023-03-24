import React from "react";
import {BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footers from './components/Footers/Footers';
import Members from "./components/Members/Members";
import Tienda from './components/tiendaCategorias/Tienda'
import CardBoard from './components/CardBoard/CardBoard.jsx'
import CardBoots from './components/CardBoots/CardBoots.jsx'
import CardJackets from './components/CardJackets/CardJackets.jsx'
import CardPants from './components/CardPants/CardPants.jsx'
import CardTshirts from './components/CardTshirts/CardTshirts.jsx'
import Chatbot from './components/Chatbot/Chatbot.jsx'


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
        <Route exact path='/Boots' element={<CardBoots/>} />
        <Route exact path='/Jackets' element={<CardJackets/>} />
        <Route exact path='/Pants' element={<CardPants/>} />
        <Route exact path='/Tshirts' element={<CardTshirts/>} />
      </Routes> 
      <Chatbot /> 
      <Footers/>
    </div>
     </BrowserRouter>
  );
}

export default App;
