import React, {useState} from "react";

function NewTaskForm( {categories, onTaskFormSubmit} ) {
  const [textInput, setTextInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Code")
  let newTask = {}

  function handleTaskFormSubmit(event) {
    event.preventDefault()
    newTask = {"category": categoryInput, "text": textInput}
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={(handleTaskFormSubmit)}>
      <label>
        Details
        <input type="text" name="text" onChange={(event) => setTextInput(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(event) => setCategoryInput(event.target.value)}>
          {categories.map((category) => {
            return (
              <option key={category}>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

//took me forever. onSubmit > onTaskFormSubmit(newTask) > App > handleTaskFormSubmit(newTask) > setTasks[...tasks, newTask]

export default NewTaskForm;
