import React, { useState } from "react";

function Item({ name, category }) {
const [inCart, setInCart] = useState(true);

function handleClick() {
  setInCart((inCart) => !inCart);
}

const itemInCart = inCart ? "Add to Cart" : "Remove From Cart"
const classChange = inCart ?  "" : "in-cart"
const classButtonChange = inCart ? "add" : "remove"

  return (
    <li className={classChange}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={classButtonChange} onClick={handleClick}>{itemInCart}</button>
    </li>
  );
}

export default Item;
