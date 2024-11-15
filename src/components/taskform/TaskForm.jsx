import React, { useState } from "react";
import { TextField, MenuItem, Button, Box, Paper } from "@mui/material";
import { toast } from "react-toastify";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate || !priority) {
      alert(
        "Please fill in all required fields: Title, Due Date, and Priority."
      );
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };

    onAdd(newTask);
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
    toast.success("Task Added Successfully");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        mb: 4,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          sx={{ flex: 1 }}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ flex: 2 }}
        />
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          inputProps={{ min: today }}
          required
          sx={{ flex: 1 }}
        />
        <TextField
          select
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
          sx={{ flex: 1 }}
        >
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </TextField>
        <Button
          type="submit"
          variant="contained"
          sx={{
            flex: "0 1 auto",
            backgroundColor: "#1976d2",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "8px",
            paddingX: 3,
            paddingY: 1.5,
            boxShadow: "0 3px 5px 2px rgba(25, 118, 210, .3)",
            "&:hover": {
              backgroundColor: "#1565c0",
              boxShadow: "0 4px 6px 3px rgba(21, 101, 192, .3)",
            },
          }}
        >
          Add Task
        </Button>
      </Box>
    </Paper>
  );
};

export default TaskForm;
