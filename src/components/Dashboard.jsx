import React, { useState } from 'react';
import TaskTable from './TaskTable';

const Dashboard = ({ tasks,onDelete}) => {


  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>
      
      <TaskTable title="Upcoming Tasks" tasks={tasks} onDelete={onDelete} />
      <TaskTable title="Overdue Tasks" tasks={tasks} onDelete={onDelete} />
      <TaskTable title="Completed Tasks" tasks={tasks} onDelete={onDelete} />
    </div>
  );
};

export default Dashboard;
