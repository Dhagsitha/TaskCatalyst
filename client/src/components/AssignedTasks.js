import React from 'react';
import '../styles/AssignedTasks.css'
import { FaCircle } from 'react-icons/fa';

const AssignedTasks = () => {
  return (
    <div className='tasks'>
      <h1>Tasks Assigned For Your Team</h1>
      <h2>Week 1</h2>
      <ul>
        <li><FaCircle className="icon-style" /> Login and SignUp of Users Using bcrypt encryption</li>
        <li><FaCircle className="icon-style" /> Home Page Designing</li>
        <li><FaCircle className="icon-style" /> Dashboard Creation</li>
        <li><FaCircle className="icon-style" /> Identifying Users role</li>
      </ul>
    </div>
  );
}

export default AssignedTasks;
