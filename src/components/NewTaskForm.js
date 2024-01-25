import React, {useState} from "react";

function NewTaskForm( {categories, onTaskFormSubmit} ) {

  const [textInput, setTextInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Code")

  function handleTextChange(event) {
    event.preventDefault();
    setTextInput(event.target.value);
  }

  function handleCategoryChange(event) {
    event.preventDefault();
    setCategoryInput(event.target.value)
  }

  function handleTaskFormChange(event) {
    event.preventDefault()
    const newTask = {"category": categoryInput, "text": textInput}
    onTaskFormSubmit(newTask)
    setTextInput("")
    setCategoryInput("Code")
  }

  //create category state
  //create handle functions to make each variable controlled inputs
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categories.map((category) => {
            return (
              <option key={category}>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" onSubmit={handleTaskFormChange} value="Add task" />
    </form>
  );
}

export default NewTaskForm;
