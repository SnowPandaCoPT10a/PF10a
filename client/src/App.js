import React from "react";
import { Route , Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footers from './components/Footers/Footers';

function App() {
  return (
    
    <div className='App'>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>  
      <Footers/>
    </div>
    
  );
}

export default App;
