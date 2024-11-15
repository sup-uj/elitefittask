import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";

const TaskTable = ({ title, tasks, onDelete, onUpdate, type }) => {
  const truncateDescription = (text, maxLength = 10) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        sx={{ color: "#fff", textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
      >
        {title}
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <Table aria-label="task table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Title</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
              <TableCell>
                <strong>Due Date</strong>
              </TableCell>
              <TableCell>
                <strong>Priority</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow
                key={task.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor:
                    type === "overdue" ? "rgba(255, 102, 102, 0.1)" : "inherit",
                }}
              >
                <TableCell>{task.title}</TableCell>
                <TableCell>{truncateDescription(task.description)}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>
                  <Chip
                    label={task.priority}
                    sx={{
                      backgroundColor:
                        task.priority === "High"
                          ? "#e57373"
                          : task.priority === "Medium"
                          ? "#ffb74d"
                          : "#81c784",
                      color: "#fff",
                    }}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={task.completed ? "Completed" : "Pending"}
                    sx={{
                      backgroundColor: task.completed ? "#81c784" : "#e0e0e0",
                      color: task.completed ? "#fff" : "#000",
                    }}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => onDelete(task.id)}
                    sx={{
                      mr: 1,
                      backgroundColor: "#e57373",
                      marginRight: "15px",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#ef5350",
                      },
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() =>
                      onUpdate({ ...task, completed: !task.completed })
                    }
                    sx={{
                      backgroundColor: task.completed ? "#ffb74d" : "#81c784",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: task.completed ? "#ffa726" : "#66bb6a",
                      },
                    }}
                  >
                    {task.completed ? "Mark Pending" : "Mark Complete"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TaskTable;
