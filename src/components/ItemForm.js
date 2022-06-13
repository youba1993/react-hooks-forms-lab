import React from "react";


function ItemForm(props) {

  return (
    <form className="NewItem" onSubmit={props.onItemFormSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={props.handleName} value={props.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={props.handleCategory} value={props.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
