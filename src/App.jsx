import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard.jsx";
import TaskForm from "./components/taskform/TaskForm.jsx";
import { Container, Typography, Box } from "@mui/material";
import { toast } from "react-toastify";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks([newTask, ...tasks]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Task Deleted Successfully");
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    toast.success("Task Updated Successfully");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "auto",
        backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
            mt: "10px",
          }}
        >
          Task Manager
        </Typography>
        <TaskForm onAdd={addTask} />
        <Dashboard tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      </Container>
    </Box>
  );
};

export default App;
