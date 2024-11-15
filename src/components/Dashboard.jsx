import React, { useState } from "react";
import TaskTable from "./TaskTable";
import {
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
} from "@mui/material";

const Dashboard = ({ tasks, onDelete, onUpdate }) => {
    const [search, setSearch] = useState("");
    const [filterPriority, setFilterPriority] = useState("");

    const today = new Date();

    const overdueTasks = tasks.filter(
        (task) => !task.completed && new Date(task.dueDate) < today
    );
    const upcomingTasks = tasks.filter(
        (task) => !task.completed && new Date(task.dueDate) >= today
    );
    const completedTasks = tasks.filter((task) => task.completed);

    const filteredTasks = (taskList) => {
        return taskList
            .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
            .filter((task) =>
                filterPriority ? task.priority === filterPriority : true
            );
    };

    return (
        <Box sx={{ mt: 4, }}>

            {/* <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          color: "#fff",
          fontWeight: "bold",
          textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
        }}
      >
        Task Dashboard
      </Typography> */}

            <Paper
                elevation={2}
                sx={{
                    p: 2,
                    mb: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: 52,
                        alignItems:"center",
                        flexWrap: "wrap",
                        alignItems: "center",
                        // height:10
                    }}
                >
                    <TextField
                        label="Search tasks..."
                        variant="outlined"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ minWidth: 200, }}
                    />

                    <FormControl variant="outlined" sx={{ minWidth: 200,  }}>
                        <InputLabel id="priority-filter-label">Priority</InputLabel>
                        <Select
                            labelId="priority-filter-label"
                            label="Priority"
                            onChange={(e) => setFilterPriority(e.target.value)}
                            value={filterPriority}
                        >
                            <MenuItem value="">All Priorities</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="Low">Low</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Paper>

            <TaskTable
                title="Upcoming Tasks"
                tasks={filteredTasks(upcomingTasks)}
                onDelete={onDelete}
                onUpdate={onUpdate}
                type="upcoming"
            />
            <TaskTable
                title="Overdue Tasks"
                tasks={filteredTasks(overdueTasks)}
                onDelete={onDelete}
                onUpdate={onUpdate}
                type="overdue"
            />
            <TaskTable
                title="Completed Tasks"
                tasks={filteredTasks(completedTasks)}
                onDelete={onDelete}
                onUpdate={onUpdate}
                type="completed"
            />
        </Box>
    );
};

export default Dashboard;



