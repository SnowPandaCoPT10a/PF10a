import React from "react";
import { Route , Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footers from './components/Footers/Footers';
import Members from "./components/Members/Members";
import Tienda from './components/tiendaCategorias/Tienda'

function App() {
  return (
    
    <div className='App'>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path="/Members" element={<Members/>} />
        <Route exact path='/Shop' element={<Tienda/>} />
      </Routes>  
      <Footers/>
    </div>
    
  );
}

export default App;
