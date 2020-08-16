import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addProductToCart, cartState } from "../../cartState";
import { productListState } from "../../productState";

ProductList.propTypes = {};

function ProductList(props) {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddProduct = (product) => {
    const newCart = addProductToCart(cart, product);
    setCart(newCart);
  };
  return (
    <div>
      <h2>Product List:</h2>
      <ul className="product-list">
        {productList.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price}
            <button onClick={() => handleAddProduct(item)}>Add product</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
