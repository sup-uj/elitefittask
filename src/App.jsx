import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskFrom';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
    </div>
  );
};

export default App;
