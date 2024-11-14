import React, { useState } from 'react';
import TaskTable from './TaskTable';

const Dashboard = ({ tasks, onDelete, onUpdate }) => {
    const [search, setSearch] = useState('');
    const [filterPriority, setFilterPriority] = useState('');

    const today = new Date();

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


            <TaskTable title="Upcoming Tasks" tasks={filteredTasks(tasks)} onDelete={onDelete} onUpdate={onUpdate} />
            <TaskTable title="Overdue Tasks" tasks={filteredTasks(tasks)} onDelete={onDelete} onUpdate={onUpdate} />
            <TaskTable title="Completed Tasks" tasks={filteredTasks(tasks)} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
    );
};

export default Dashboard;
