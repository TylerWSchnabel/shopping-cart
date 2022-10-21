import React from "react";

const Cart = (props) => {

    const {cart, total, remove, change, round} = props;

    return <div className="cartContainer">
        <h1 className="heading">Cart</h1>
        <div className="cart">
        {cart.map((item) => {
            return(
            <div className="cart-item" key={item.key}>
                <img src={item.src} alt={item.album} className="cart-cover"/>
                <p className="cart-album">{item.album}</p>
                <input type='number' className="cart-quantity" id={'cart-quantity' + item.key} defaultValue={item.quantity} min='1' onChange={()=>change(item, document.getElementById('cart-quantity'+item.key).value)}/>
                <p className="cart-price">${round(item.price * item.quantity)}</p>
                <button className="cart-remove" onClick={()=>{remove(item)}}>Remove</button>
            </div>
        )})}
        <div className="total">
            <p>Total ${total}</p>
        </div>
        </div>
    </div>
}

export default Cart;