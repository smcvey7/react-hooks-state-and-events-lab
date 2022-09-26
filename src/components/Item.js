import React, { useState } from "react";


function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const appClass = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove From Cart" : "Add To Cart"

  function handleAdd(){
    setInCart(!inCart)
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAdd} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
