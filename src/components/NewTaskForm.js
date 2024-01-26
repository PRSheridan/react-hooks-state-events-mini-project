import React, {useState} from "react";

function NewTaskForm( {categories, onTaskFormSubmit} ) {
  const [textInput, setTextInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Code")
  const [newTask, setNewTask] = useState({})

  function handleTextChange(event) {
    event.preventDefault();
    setTextInput(event.target.value);
    setNewTask({"category": categoryInput, "text": textInput})
  }

  function handleCategoryChange(event) {
    event.preventDefault();
    setCategoryInput(event.target.value)
    setNewTask({"category": categoryInput, "text": textInput})
  }

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
      <input type="submit" onSubmit={() => {onTaskFormSubmit(newTask)}} value="Add task" />
    </form>
  );
}

//took me forever. onSubmit > onTaskFormSubmit(newTask) > App > handleTaskFormSubmit(newTask) > setTasks[...tasks, newTask]

export default NewTaskForm;
