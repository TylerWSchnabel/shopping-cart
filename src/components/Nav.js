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
                <Link to='/' className="nav-title">
                    <li className="nav-title">Home</li>
                </Link>
                <Link to='/music' className="nav-title">
                    <li >Music</li>
                </Link>
                <Link to='/store' className="nav-title">
                    <li className="nav-title">Store</li>
                </Link>
                <Link to='/tour' className="nav-title">
                    <li className="nav-title">Tour</li>
                </Link>
                <Link to='/cart' className="nav-title">
                    <li className="nav-title"><img src={CartLogo} alt="Cart" className="cart-logo"/> ({cart.length})</li>
                </Link>
            </ul>
    </nav>
}

export default Nav;