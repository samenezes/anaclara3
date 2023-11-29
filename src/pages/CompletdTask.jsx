
import React from 'react';
import TaskList from '../components/TaskList';

const CompletedTask = ({ tasks, onToggle, onDelete }) => {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h2>Completed Nota</h2>
      <TaskList tasks={completedTasks} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
};

export default CompletedTask;
