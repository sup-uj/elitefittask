// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Button,
//   Box,
//   Chip,
//   Modal,
//   TextField,
//   Select,
//   MenuItem,
// } from "@mui/material";

// const TaskTable = ({ title, tasks, onDelete, onUpdate, type }) => {
//   const [open, setOpen] = useState(false); // Modal state
//   const [editableTask, setEditableTask] = useState(null); // Task being edited

//   const truncateDescription = (text, maxLength = 10) => {
//     return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
//   };

//   const handleEditClick = (task) => {
//     setEditableTask({ ...task }); // Load task into state
//     setOpen(true); // Open modal
//   };

//   const handleSaveClick = () => {
//     onUpdate(editableTask); // Save updated task
//     setOpen(false); // Close modal
//     setEditableTask(null); // Reset state
//   };

//   const handleCancelClick = () => {
//     setOpen(false); // Close modal
//     setEditableTask(null); // Reset state
//   };

//   const handleEditChange = (field, value) => {
//     setEditableTask((prev) => ({ ...prev, [field]: value }));
//   };

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Typography
//         variant="h5"
//         component="h3"
//         gutterBottom
//         sx={{ color: "#fff", textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
//       >
//         {title}
//       </Typography>
//       <TableContainer
//         component={Paper}
//         sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
//       >
//         <Table aria-label="task table">
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <strong>Title</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Description</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Due Date</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Priority</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Status</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Action</strong>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tasks.map((task) => (
//               <TableRow
//                 key={task.id}
//                 sx={{
//                   "&:last-child td, &:last-child th": { border: 0 },
//                   backgroundColor:
//                     type === "overdue" ? "rgba(255, 102, 102, 0.1)" : "inherit",
//                 }}
//               >
//                 <TableCell>{task.title}</TableCell>
//                 <TableCell>{truncateDescription(task.description)}</TableCell>
//                 <TableCell>{task.dueDate}</TableCell>
//                 <TableCell>
//                   <Chip
//                     label={task.priority}
//                     sx={{
//                       backgroundColor:
//                         task.priority === "High"
//                           ? "#e57373"
//                           : task.priority === "Medium"
//                           ? "#ffb74d"
//                           : "#81c784",
//                       color: "#fff",
//                     }}
//                     size="small"
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <Chip
//                     label={task.completed ? "Completed" : "Pending"}
//                     sx={{
//                       backgroundColor: task.completed ? "#81c784" : "#e0e0e0",
//                       color: task.completed ? "#fff" : "#000",
//                     }}
//                     size="small"
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     size="small"
//                     onClick={() => onDelete(task.id)}
//                     sx={{
//                       mr: 1,
//                       backgroundColor: "#e57373",
//                       color: "#fff",
//                       "&:hover": {
//                         backgroundColor: "#ef5350",
//                       },
//                     }}
//                   >
//                     Delete
//                   </Button>
//                   <Button
//                     variant="contained"
//                     size="small"
//                     onClick={() =>
//                       onUpdate({ ...task, completed: !task.completed })
//                     }
//                     sx={{
//                       mr: 1,
//                       backgroundColor: task.completed ? "#ffb74d" : "#81c784",
//                       color: "#fff",
//                       "&:hover": {
//                         backgroundColor: task.completed ? "#ffa726" : "#66bb6a",
//                       },
//                     }}
//                   >
//                     {task.completed ? "Mark Pending" : "Mark Complete"}
//                   </Button>
//                   {type !== "overdue" && !task.completed && (
//                     <Button
//                       variant="contained"
//                       size="small"
//                       onClick={() => handleEditClick(task)}
//                       sx={{
//                         backgroundColor: "#64b5f6",
//                         color: "#fff",
//                         "&:hover": {
//                           backgroundColor: "#42a5f5",
//                         },
//                       }}
//                     >
//                       Edit
//                     </Button>
//                   )}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Modal for Editing */}
//       <Modal open={open} onClose={handleCancelClick}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 400,
//             bgcolor: "background.paper",
//             p: 4,
//             boxShadow: 24,
//             borderRadius: 2,
//           }}
//         >
//           <Typography variant="h6" component="h2" gutterBottom>
//             Edit Task
//           </Typography>
//           <TextField
//             label="Title"
//             value={editableTask?.title || ""}
//             onChange={(e) => handleEditChange("title", e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Description"
//             value={editableTask?.description || ""}
//             onChange={(e) => handleEditChange("description", e.target.value)}
//             fullWidth
//             margin="normal"
//             multiline
//             rows={3}
//           />
//           <TextField
//             label="Due Date"
//             type="date"
//             value={editableTask?.dueDate || ""}
//             onChange={(e) => handleEditChange("dueDate", e.target.value)}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ shrink: true }}
//           />
//           <Select
//             value={editableTask?.priority || ""}
//             onChange={(e) => handleEditChange("priority", e.target.value)}
//             fullWidth
//             margin="normal"
//           >
//             <MenuItem value="High">High</MenuItem>
//             <MenuItem value="Medium">Medium</MenuItem>
//             <MenuItem value="Low">Low</MenuItem>
//           </Select>
//           <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
//             <Button variant="contained" color="success" onClick={handleSaveClick}>
//               Save
//             </Button>
//             <Button variant="contained" color="error" onClick={handleCancelClick}>
//               Cancel
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default TaskTable;


import React, { useState } from "react";
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
  Modal,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const TaskTable = ({ title, tasks, onDelete, onUpdate, type }) => {
  const [open, setOpen] = useState(false); // Modal state
  const [editableTask, setEditableTask] = useState(null); // Task being edited

  const truncateDescription = (text, maxLength = 10) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const handleEditClick = (task) => {
    setEditableTask({ ...task }); // Load task into state
    setOpen(true); // Open modal
  };

  const handleSaveClick = () => {
    onUpdate(editableTask); // Save updated task
    setOpen(false); // Close modal
    setEditableTask(null); // Reset state
  };

  const handleCancelClick = () => {
    setOpen(false); // Close modal
    setEditableTask(null); // Reset state
  };

  const handleEditChange = (field, value) => {
    setEditableTask((prev) => ({ ...prev, [field]: value }));
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
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          maxHeight: "60vh", // Fixed maximum height
          overflowY: "auto", // Enable vertical scrolling
        }}
      >
        <Table stickyHeader aria-label="task table">
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
                      mr: 1,
                      backgroundColor: task.completed ? "#ffb74d" : "#81c784",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: task.completed ? "#ffa726" : "#66bb6a",
                      },
                    }}
                  >
                    {task.completed ? "Mark Pending" : "Mark Complete"}
                  </Button>
                  {type !== "overdue" && !task.completed && (
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleEditClick(task)}
                      sx={{
                        backgroundColor: "#64b5f6",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#42a5f5",
                        },
                      }}
                    >
                      Edit
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for Editing */}
      <Modal open={open} onClose={handleCancelClick}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Edit Task
          </Typography>
          <TextField
            label="Title"
            value={editableTask?.title || ""}
            onChange={(e) => handleEditChange("title", e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={editableTask?.description || ""}
            onChange={(e) => handleEditChange("description", e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />
          <TextField
            label="Due Date"
            type="date"
            value={editableTask?.dueDate || ""}
            onChange={(e) => handleEditChange("dueDate", e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <Select
            value={editableTask?.priority || ""}
            onChange={(e) => handleEditChange("priority", e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="success" onClick={handleSaveClick}>
              Save
            </Button>
            <Button variant="contained" color="error" onClick={handleCancelClick}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default TaskTable;


