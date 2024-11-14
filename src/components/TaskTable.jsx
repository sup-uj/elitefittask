import React from 'react';
import './TaskTable.css';

const TaskTable = ({ title, tasks, onDelete, onUpdate }) => {
    return (
        <div className="task-table">
            <h3>{title}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id} className={task.completed ? 'completed' : ''}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.dueDate}</td>
                            <td>
                                <span className={`priority ${task.priority.toLowerCase()}`}>
                                    {task.priority}
                                </span>
                            </td>
                            <td>{task.completed ? 'Completed' : 'Pending'}</td>
                            <td>

                                <button onClick={() => onDelete(task.id)}>Delete</button>
                                <button onClick={() => onUpdate({ ...task, completed: !task.completed })}>
                                    {task.completed ? 'Mark Pending' : 'Mark Complete'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;
