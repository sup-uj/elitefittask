import React, { useState } from 'react';
import TaskTable from './TaskTable';

const Dashboard = ({ tasks, onDelete, onUpdate }) => {
    const [search, setSearch] = useState('');
    const [filterPriority, setFilterPriority] = useState('');

    const today = new Date();


    const overdueTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) < today);
    const upcomingTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) >= today);
    const completedTasks = tasks.filter(task => task.completed);

    const filteredTasks = (taskList) => {
        return taskList
            .filter(task => task.title.toLowerCase().includes(search.toLowerCase()))
            .filter(task => (filterPriority ? task.priority === filterPriority : true));
    };


    return (
        <div className="dashboard">
            <h2>Task Dashboard</h2>

            <div className="filters">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select onChange={(e) => setFilterPriority(e.target.value)} value={filterPriority}>
                    <option value="">All Priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>


            <TaskTable title="Upcoming Tasks" tasks={filteredTasks(upcomingTasks)} onDelete={onDelete} onUpdate={onUpdate} />
            <TaskTable title="Overdue Tasks" tasks={filteredTasks(overdueTasks)} onDelete={onDelete} onUpdate={onUpdate} />
            <TaskTable title="Completed Tasks" tasks={filteredTasks(completedTasks)} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
    );
};

export default Dashboard;
