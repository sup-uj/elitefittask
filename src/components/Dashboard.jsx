import React, { useState } from 'react';
import TaskTable from './TaskTable';

const Dashboard = ({ tasks}) => {


  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>
      
      <TaskTable title="Upcoming Tasks" tasks={tasks} />
      <TaskTable title="Overdue Tasks" tasks={tasks}  />
      <TaskTable title="Completed Tasks" tasks={tasks} />
    </div>
  );
};

export default Dashboard;
