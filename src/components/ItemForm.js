import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [dataForm, setDataForm] = useState({
    name: "",
    category: "Produce"
  });

  const newItem = {
    id: uuid(),
    name: dataForm.name,
    category: dataForm.category,
  };

  function handleChange(event){
    const name = event.target.name
    let value = event.target.value
    setDataForm({
      ...dataForm,
      [name]: value,
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    props.onItemFormSubmit(newItem)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={dataForm.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={dataForm.category}>
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
