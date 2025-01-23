import React from "react";
import "./TaskList.css";

const TaskList = ({
  tasks,
  toggleTaskCompletion,
  deleteTask,
  editTask,
  setIsEditing,
  isEditing,
  editedTaskName,
  setEditedTaskName,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          {isEditing === task.id ? (
            <>
              <input
                type="text"
                value={editedTaskName}
                onChange={(e) => setEditedTaskName(e.target.value)}
              />
              <button onClick={() => editTask(task.id, editedTaskName)}>
                Save
              </button>
              <button onClick={() => setIsEditing(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "✅" : "⬜"} {task.name}
              </span>
              <span> - Priority: {task.priority}</span>
              <button onClick={() => setIsEditing(task.id)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
