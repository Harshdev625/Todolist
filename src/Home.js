import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.length !== 0) {
      setTasks(prevTasks => [...prevTasks, inputValue]);
      setInputValue('');
    }
    else {
      alert('Please enter a task before adding it.');
    }
  };

  const taskDone = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="parent">
        <div className="child">
          <h1>To Do List</h1>
          <div className="input-container " data-bs-spy="scroll">
            <input
              className="text-area"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Create A New Task"
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
