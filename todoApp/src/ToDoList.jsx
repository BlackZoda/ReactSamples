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
    <div className="h-full w-screen flex flex-col items-center gap-5 mt-10">
      <h1 className="text-4xl font-bold tracking-wider">To-Do List</h1>
      <div className="w-8/12 flex items-center mt-5 mb-8">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          className="h-10 flex-1 mr-5 p-3 rounded text-zinc-800"
        />
        <Button
          onClick={addTask}
          className="h-10 w-40 rounded bg-teal-600 hover:bg-teal-500"
        >
          Add Task
        </Button>
      </div>
      <ol className="w-8/12 flex flex-col gap-3">
        {tasks.map((task, index) => (
          <li className="flex justify-between gap-3" key={`k-${index}`}>
            <span className="flex-1 text-lg">{task}</span>
            <Button
              className="h-6 w-20 rounded bg-indigo-600 hover:bg-indigo-500"
              index={index}
              onClick={moveTaskUp}
            >
              UP
            </Button>
            <Button
              className="h-6 w-20 rounded bg-indigo-600 hover:bg-indigo-500"
              index={index}
              onClick={moveTaskDown}
            >
              DOWN
            </Button>
            <Button
              className="h-6 w-20 rounded bg-pink-600 hover:bg-pink-500"
              index={index}
              onClick={deleteTask}
            >
              Delete
            </Button>
          </li>
        ))}
      </ol>
    </div>
  );
};

const Button = ({ className, index = 0, onClick, children }) => {
  return (
    <button className={className} type="button" onClick={() => onClick(index)}>
      {children}
    </button>
  );
};
export default ToDoList;
