import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Store from './components/Store';
import Cart from './components/Cart';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/store' element={<Store/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
