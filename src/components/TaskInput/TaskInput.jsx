import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [taskType, setTaskType] = useState("Indoor");

  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    addTask({
      id: Date.now(),
      text: task,
      priority,
      type: taskType,
    });

    setTask("");
    setPriority("Medium");
    setTaskType("Indoor");
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
      <select value={taskType} onChange={(e) => setTaskType(e.target.value)}>
        <option value="Indoor">Indoor</option>
        <option value="Outdoor">Outdoor</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
