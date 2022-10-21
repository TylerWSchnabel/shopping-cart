import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Store from './components/Store';
import Cart from './components/Cart';
import Home from './components/Home';
import Tour from './components/Tour';
import './App.css';

function App() {

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() =>{
    getTotal();
    itemTotal();
  }); 


  const removeItem = (item) => {
    var data = [...cart];
    var index = data.findIndex(obj => obj.key === item.key);
    data.splice(index, 1);
    setCart(data);
};

  const addToCart = (item, amount) => {
    if (cart.some(e => e.key === item.key)) {
      console.log('duplicate');

      
      var data = [...cart];
      var index = data.findIndex(obj => obj.key === item.key);
      data[index].quantity = Number(data[index].quantity) + Number(amount);
      setCart(data);
      
    }else {
   
      let cartItem = {...item, quantity: amount}

      setCart([...cart, cartItem]);
    }
      
    console.log(cart);
  }

  const quantityChange = (item, amount) => {
    var data = [...cart];
    var index = data.findIndex(obj => obj.key === item.key);
    data[index].quantity = amount;
    setCart(data);
  }

  const getTotal = () => {
    let total = 0;
    for (let i=0; i<cart.length ; i++){
      total = total + (cart[i].price * cart[i].quantity);
    };
    total = Math.round((total*100))
    setCartTotal(total/100);
  }

  const roundPrice =(total)=>{
    total = Math.round((total*100))
    let price = total/100;
    return price;
  }

  const itemTotal = () => {
    let numItems = 0;
    for (let i=0; i<cart.length; i++){
      numItems = numItems + Number(cart[i].quantity);
    }
    console.log(numItems);
  }

  return (
    <div className="App">
      <Router>
        <Nav cart={cart} />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/store' element={<Store add={addToCart}/>} />
            <Route path='/cart' element={<Cart cart={cart} total={cartTotal} remove={removeItem} change={quantityChange} round={roundPrice}/>} />
            <Route path='/tour' element={<Tour/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
