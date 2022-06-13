import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, addElemets }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setDataSearch] = useState("");
  
  
  function onItemFormSubmit(newItem){
    addElemets(newItem);
}

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function SearchChange(event){
    setDataSearch(event.target.value);
  }
  const itemsToDisplay = items.filter((item) => {    
        if (selectedCategory === "All" ) return true;      
        return item.category === selectedCategory;    
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
          onItemFormSubmit={onItemFormSubmit}
          />    
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={SearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => ( item.name.includes(search) ?
          <Item key={item.id} name={item.name} category={item.category} />
          : true ) )}
      </ul>
    </div>
  );
}

export default ShoppingList;
