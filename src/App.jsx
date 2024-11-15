import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard.jsx';
import TaskForm from './components/taskform/TaskFrom.jsx';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks([newTask, ...tasks]);
  };
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const updateTask = (updatedTask) => setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <Dashboard tasks={tasks}  onDelete={deleteTask} onUpdate={updateTask}/>
    </div>
  );
};

export default App;
