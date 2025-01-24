import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    addTask({ id: Date.now(), text: task, priority });
    setTask(""); // Clear the input field
    setPriority("Medium"); // Reset the priority
  };

  return (
    <div className="task-input">
      <h3>ToDo List</h3>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
