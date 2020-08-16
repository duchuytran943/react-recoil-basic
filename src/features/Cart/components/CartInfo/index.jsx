import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../../cartState";

CartInfo.propTypes = {};

function CartInfo(props) {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);
  return (
    <div>
      <h2>Cart Info:</h2>
      <ul className="cart-info">
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.title} - Quantity:{item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total: {total}</h2>
    </div>
  );
}

export default CartInfo;
