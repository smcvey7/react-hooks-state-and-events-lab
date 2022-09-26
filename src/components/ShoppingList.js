import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("Filter by category")
  let filteredItems = selectedCategory==="Filter by category" ? [...items] : items.filter((item)=>item.category === selectedCategory)

  function handleCategory(e){
    const category = e.target.value
    console.log(e.target.value)
    setSelectedCategory(category)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e)=>handleCategory(e)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
