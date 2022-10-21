import React from "react";
import { Link } from "react-router-dom";
import BGlogo from "../files/BGlogo.png"
import CartLogo from "../files/cart.png";
import Cart from "./Cart";



const Nav = (props) => {

    const { cart } = props;

    return <nav>
        <img src={BGlogo} alt="Bay Gulls" className="BGlogo"/>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/store'>
                    <li>Store</li>
                </Link>
                <Link to='/tour'>
                    <li>Tour</li>
                </Link>
                <Link to='/cart'>
                    <li><img src={CartLogo} alt="Cart" className="cart-logo"/> ({cart.length})</li>
                </Link>
            </ul>
    </nav>
}

export default Nav;