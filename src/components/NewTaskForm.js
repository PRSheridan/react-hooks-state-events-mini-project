import React from "react";

function NewTaskForm( {categories, onTaskFormSubmit} ) {

  const [textInput, setTextInput] = useState("")
  //create category state
  //create handle functions to make each variable controlled inputs
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category) => {
            return (
              <option key={category}>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" onSubmit={onTaskFormSubmit} value="Add task" />
    </form>
  );
}

export default NewTaskForm;
