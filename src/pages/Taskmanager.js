import React from 'react'
import './TaskManager.css';
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


function TaskManager() {
  const tasks = [
    { name: 'Value 1', Email: 'task1@example.com', Status: 'Pending' },
    { name: 'Value 2', Email: 'task2@example.com', Status: 'Completed' },
    { name: 'Value 3', Email: 'task3@example.com', Status: 'In Progress' },
    { name: 'Value 4', Email: 'task4@example.com', Status: 'Pending' },
  ];

  return (
    <div>
      <h1>Manage Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.Email}</td>
              <td>{task.Status}</td>
              <td>
                <button className='r'><FaEdit /></button>
                <button className='n'><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
    </div>
  );
}

export default TaskManager;