import React from "react";
import { Albums } from "./Albums";

const Store = (props) => {
    
    const { add }= props;

    const enlarge = (element) =>{
        console.log(element)
        element.style.display = 'grid';
    }
    const close = (element) =>{
        console.log(element)
        element.style.display = 'none';
    }

    return <div>
        <h1 className="heading">Store</h1>
        <div className="store-grid">
            {Albums.map((album)=>{
                return(
                <div className="store-item" key={album.key}>
                    <img src={album.src} alt={album.album} className="album-cover" onClick={()=>{enlarge(document.getElementById('enlargedPicture'+ album.key))}}/>
                    <div className="album-info">
                        <p className="album-name">{album.album}</p>
                        <p className="album-price">${album.price}</p>
                        <div className="buy-options">
                            <input type='number' className="shop-quantity" defaultValue='1' id={"item-quantity" + album.key} min="1"></input>
                            <button className="add-to-cart" onClick={()=>{add(album, document.getElementById('item-quantity'+ album.key).value)}}>Add to Cart</button>
                        </div>
                    </div> 
                    <div id={"enlargedPicture"+ album.key} className="enlargedDiv">
                        <img src={album.src} alt={album.album} className="enlargedImg"/>
                        <button className="closeBtn" onClick={()=>{close(document.getElementById('enlargedPicture'+ album.key))}}>Close</button>
                    </div>
                </div>
                
                )})}
                
        </div>
        
    </div>
}

export default Store;