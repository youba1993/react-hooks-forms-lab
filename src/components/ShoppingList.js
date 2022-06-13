import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setDataSearch] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce")
  const newItem = {
    id: uuid(),
    name: name,
    category: category,
  };
  function handleName(event){
    setName(event.target.value);
    console.log(name)
  }
  function handleCategory(event){
    setCategory(event.target.value);
    console.log(category)
  }
  function onItemFormSubmit(event){
    event.preventDefault();
    console.log(newItem)
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
          name={name} 
          category={category}
          handleName={handleName}
          handleCategory={handleCategory}
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
