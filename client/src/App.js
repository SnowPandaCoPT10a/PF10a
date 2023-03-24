import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footers from './components/Footers/Footers';
import Members from "./components/Members/Members";
import Tienda from './components/tiendaCategorias/Tienda'
import Chatbot from './components/Chatbot/Chatbot.jsx'
import Cards from "./components/Cards/Cards";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='App container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path="/Members" element={<Members />} />
          <Route exact path='/Shop' element={<Tienda />} />
          <Route exact path='/Board' element={<Cards categoria='board'/>} />
          <Route exact path='/Boots' element={<Cards categoria='boots'/>} />
          <Route exact path='/Jackets' element={<Cards categoria='jackets'/>} />
          <Route exact path='/Pants' element={<Cards categoria='pants'/>} />
          <Route exact path='/Tshirts' element={<Cards categoria='t-shirts'/>} />
          <Route exact path='/Accesories' element={<Cards categoria='accessories'/>} />
        </Routes>
        <Chatbot />
      </div>
      <Footers />
    </BrowserRouter>
  );
}

export default App;
