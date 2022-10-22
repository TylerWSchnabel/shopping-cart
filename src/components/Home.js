import React from "react";
import logo from "../files/SeagullTrans.png";
import { Link } from "react-router-dom";




const Home = () => {


    return( 
        <div>
            <h1 className="heading">Bay Gulls</h1>
            <Link to='/store'>
            <img src={logo} alt="Bay Gulls" className="logo"/>
            </Link>
        </div>
    )
}

export default Home