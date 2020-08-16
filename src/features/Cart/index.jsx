import React from "react";
import CartInfo from "./components/CartInfo";
import ProductList from "./components/ProductList";

Cart.propTypes = {};

function Cart(props) {
  return (
    <div>
      <ProductList></ProductList>
      <CartInfo></CartInfo>
    </div>
  );
}

export default Cart;
