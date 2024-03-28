import React, { useState } from 'react';
import './Todolist.css';

export const Todolist = () => {
  const [showAddBox, setShowAddBox] = useState(false);
  const [showCompBox, setShowCompBox] = useState(false);
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState([]);
  const [performanceValue, setPerformanceValue] = useState(0);

  const addClick = () => {
    setShowAddBox(!showAddBox); // Toggle the showAddBox state
  };

  const compClick = () => {
    setShowCompBox(!showCompBox);
  };

  const disValue = (event) => {
    setValue(event.target.value); // Update value state with new input value
  };

  const disTasks = () => {
    setTasks([...tasks, value]); // Add new value to tasks array
    setValue(''); // Clear input field
  };

  const doneTask = (index) => {
    const updatedTasks = [...tasks];
    const completedTask = updatedTasks.splice(index, 1)[0]; // Remove task from tasks array and get the removed task
    setTasks(updatedTasks); // Update tasks array
    setDone([...done, completedTask]); // Add completed task to done array
  };

  const calculatePerformance = () => {
    const totalTasks = tasks.length + done.length;
    if (totalTasks === 0) return 0;
    return (done.length / totalTasks) * 100; // Percentage of completed tasks
  };

  const handlePerformanceClick = () => {
    const performance = calculatePerformance();
    setPerformanceValue(performance); // Update performanceValue state
  };

  return (
    <div>
      <div className="title">To Do List Application in <span>React</span></div>
      <div className="buttons">
        <button className="add" onClick={addClick}>Add Task</button>
        <button className="completed" onClick={compClick}>Completed Tasks</button>
        <button className="performance" onClick={handlePerformanceClick}>Performance</button>
      </div>
      <div className="boxes-container">
        {showAddBox && (
          <div className='addBox'>
            <input type="text" placeholder='Write Todays tasks' value={value} onChange={disValue} />
            <button className='add' onClick={disTasks}>Add</button>
            <ul>
              {/* Render tasks */}
              {tasks.map((task, index) => (
                <li key={index} onClick={() => doneTask(index)}>{task}</li>
              ))}
            </ul>
          </div>
        )}
        { showCompBox && (
          <div className='compBox'>
            <div className="title1">Total Completed Tasks</div>
            <ul>
              {/* Render completed tasks */}
              {done.map((comp, index) => (
                <li key={index}>{comp}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="performance">
          Performance: {performanceValue}%
        </div>
      </div>
    </div>
  );
};

