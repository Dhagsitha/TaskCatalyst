import React from 'react'
import '../styles/dashboard.css'
import {  FaCalendarAlt, FaTasks,FaPen,FaPeopleArrows} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const StudentDashboard = ({ username }) => {
    return (
        <div className="sidebar">
            <div className="username">{username}Welcome Student!!!</div>
            <div className="menu">
                <input type="text" placeholder="Search" />
                <ul>
                    <li><FaPeopleArrows className="icon" /><NavLink className="word" to="/dashboard/teamreg">Create a Team</NavLink></li>
                    <li><FaPen className="icon" /><NavLink className="word" to="/dashboard/submitwork">Submit Your Work</NavLink></li>
                    <li><FaCalendarAlt className="icon" /><NavLink className="word" to="/dashboard/tmsubmissions">View TeamMates Submissions</NavLink></li>
                    <li><FaTasks className="icon" /><NavLink className="word"to="/dashboard/teachersremarks">View Remarks And Assigned Tasks</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default StudentDashboard;
