import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Play guitar",
    "Eat breakfast",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index - 1]] = [
        newTasks[index - 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index + 1]] = [
        newTasks[index + 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  };

  return (
    <div className="to-do-container">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <Button type="add-button" onClick={addTask}>
          Add Task
        </Button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={`k-${index}`}>
            <span className="text">{task}</span>
            <Button index={index} onClick={deleteTask}>
              Delete
            </Button>
            <Button index={index} onClick={moveTaskUp}>
              UP
            </Button>
            <Button index={index} onClick={moveTaskDown}>
              DOWN
            </Button>
          </li>
        ))}
      </ol>
    </div>
  );
};

const Button = ({ type = "new-button", index = 0, onClick, children }) => {
  return (
    <button className={type} type="button" onClick={() => onClick(index)}>
      {children}
    </button>
  );
};
export default ToDoList;
