import React from "react";
import { Link } from "react-router-dom";
import BGlogo from "../files/BGlogo.png"



const Nav = () => {


    return <nav>
        <img src={BGlogo} alt="Bay Gulls" className="BGlogo"/>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/store'>
                    <li>Store</li>
                </Link>
                <Link to='/cart'>
                    <li>Cart</li>
                </Link>
            </ul>
    </nav>
}

export default Nav;