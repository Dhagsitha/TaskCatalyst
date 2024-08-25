import React from 'react'
import '../styles/dashboard.css'
import {  FaCalendarAlt, FaTasks,FaPen,FaPeopleArrows} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const TeacherDashboard = ({ username }) => {
    return (
        <div className="sidebar">
            <div className="username">{username}Welcome Guide!!!</div>
            <div className="menu">
                <input type="text" placeholder="Search" />
                <ul>
                    <li><FaPeopleArrows className="icon" /><NavLink className="word" to="/dashboard/teamreg">View Tasks</NavLink></li>
                    <li><FaPen className="icon" /><NavLink className="word" to="/dashboard/submitwork">Assign Tasks</NavLink></li>
                    <li><FaCalendarAlt className="icon" /><NavLink className="word" to="/dashboard/tmsubmissions">Provide Feedback</NavLink></li>
                    <li><FaTasks className="icon" /><NavLink className="word"to="/dashboard/teachersremarks">Rating</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default TeacherDashboard;
