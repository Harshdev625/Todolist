import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    setTasks(prevTasks => [...prevTasks, inputValue]);
    setInputValue('');
  };

  const taskDone = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="parent">
        <div className="child">
          <h1>To-do List</h1>
          <div className="input-container " data-bs-spy="scroll">
            <input
              className="text-area"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add Your Task"
            />
            <button className="button" onClick={addTask}>Add Task</button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="task-container">
                <div className="task-item">
                  {task}
                </div>
                <button className="done" onClick={() => taskDone(index)}>Done</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
