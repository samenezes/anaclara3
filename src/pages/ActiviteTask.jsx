import React from 'react';
import TaskList from '../components/TaskList';

const ActiviteTask = ({ tasks, onToggle, onDelete }) => {
  const activeTasks = tasks.filter((task) => !task.completed);

  return (
    <div>
      <h2>Active Nota</h2>
      <TaskList tasks={activeTasks} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
};

export default ActiviteTask;