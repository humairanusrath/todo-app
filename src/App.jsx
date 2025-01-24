import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";
<link
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  rel="stylesheet"
/>;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null); // State to store weather data

  const WEATHER_API_KEY = "36fd2dbae9449f7a49b3077a83b8f92b";
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const mockUser = {
    username: "humaira",
    password: "password123",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === mockUser.username && password === mockUser.password) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  // Fetch weather data if there are outdoor tasks
  useEffect(() => {
    const outdoorTask = tasks.find((task) => task.type === "Outdoor");
    if (outdoorTask) {
      fetch(
        `${WEATHER_API_URL}?q=Chennai&appid=${WEATHER_API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
        })
        .catch((error) => console.error("Error fetching weather data:", error));
    } else {
      setWeather(null); // Clear weather data if no outdoor tasks
    }
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
    setIsEditing(null);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <h1>Welcome to Track Tasks</h1>

          {/* Display weather data for outdoor tasks */}
          {weather && (
            <div className="weather">
              <h3>Weather in Chennai:</h3>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Condition: {weather.weather[0].description}</p>
            </div>
          )}

          <TaskInput addTask={addTask} />
          <TaskList
            tasks={sortedTasks}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
            editedTaskName={editedTaskName}
            setEditedTaskName={setEditedTaskName}
          />
        </>
      ) : (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label>Username: </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
