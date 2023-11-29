import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TaskForm from '../src/components/TaskForms';
import ActiveTasks from '../src/pages/ActiviteTask';
import CompletedTasks from '../src/pages/CompletdTask';
import './index.css'



const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <div>
        <nav style='color: white'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/active">Active Tasks</Link>
            </li>
            <li>
              <Link to="/completed">Completed Tasks</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <h2>Home</h2>
              <TaskForm onAdd={addTask} />
              <ActiveTasks tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
              <CompletedTasks tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
            </div>
          )}
        />
        <Route
          path="/active"
          render={() => <ActiveTasks tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />}
        />
        <Route
          path="/completed"
          render={() => <CompletedTasks tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />}
        />
      </div>
    </Router>
  );
};

export default App;
