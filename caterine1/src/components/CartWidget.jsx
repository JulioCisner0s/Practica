import { useState } from "react";
import CartIcon from "./Carticon";
import "./Carticon.css"


function CartWidget () {

    const [cartItems, setCartItems] = 
    useState(5);

    return (
        <div className="cart_container">
            <CartIcon ancho={40} alto={40} />
            <span>{cartItems}</span>
        </div>
    )
}

export default  CartWidget;