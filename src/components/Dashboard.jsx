import React, { useState } from 'react';
import TaskTable from './TaskTable';

const Dashboard = ({ tasks,onDelete, onUpdate}) => {


  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>
      
      <TaskTable title="Upcoming Tasks" tasks={tasks} onDelete={onDelete} onUpdate={onUpdate}/>
      <TaskTable title="Overdue Tasks" tasks={tasks} onDelete={onDelete} onUpdate={onUpdate}/>
      <TaskTable title="Completed Tasks" tasks={tasks} onDelete={onDelete} onUpdate={onUpdate}/>
    </div>
  );
};

export default Dashboard;
