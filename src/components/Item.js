import React, {useState}from "react";
// import {name,category} from "./data/Item.js";

function Item({ name, category }) {

  // 1. State to track cart status
  const [isInCart, setIsInCart] = useState(false);

  // 2. Toggle function
  const handleCartClick = () => {
    setIsInCart(prev => !prev);
  };

  // 3. Determine className and button text
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";


  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
