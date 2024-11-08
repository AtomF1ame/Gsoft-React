import React, { FC, useState } from 'react';
import './Welcomepage.scss';


export const Welcomepage: React.FC = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);
  
    const handleAddTask = () => {
      if (task.trim() !== '') {
        setTasks([...tasks, task]);
        setTask(''); // Clear input field
      }
    };
  
    const handleDeleteTask = (taskToDelete: string) => {
      setTasks(tasks.filter((t) => t !== taskToDelete));
    };
    return (
        <div className="task-manager">
          <h1>Task List</h1>
    
          <div className="input-container">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Upisi task!"
            />
            <button onClick={handleAddTask}>Dodaj task</button>
          </div>
    
          <div className="task-list">
            {tasks.length === 0 ? (
              <p>Niste dodali task.</p>
            ) : (
              tasks.map((taskItem, index) => (
                <div key={index} className="task-item">
                  <span>{taskItem}</span>
                  <button onClick={() => handleDeleteTask(taskItem)}>Delete</button>
                </div>
              ))
            )}
          </div>
        </div>
      );
    };
    