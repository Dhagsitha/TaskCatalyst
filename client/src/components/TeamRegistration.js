import React, { useState } from 'react';
import axios from 'axios';
import '../styles/TeamRegistration.css'; 
import Dashboard from './Dashboard.js';

const TeamRegistration = () => {
  const [formData, setFormData] = useState({
    teamNumber: '',
    batch: '',
    year: '',
    guideName: '',
    teamLeader: '',
    teamMembers: [''], // Initialize with an empty string for one team member input
    classAdvisorName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("teamMembers")) {
      const index = parseInt(name.split("_")[1], 10);
      const newTeamMembers = [...formData.teamMembers];
      newTeamMembers[index] = value;
      setFormData({
        ...formData,
        teamMembers: newTeamMembers,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddTeamMember = () => {
    setFormData({
      ...formData,
      teamMembers: [...formData.teamMembers, ''],
    });
  };

  const handleRemoveTeamMember = (index) => {
    const newTeamMembers = formData.teamMembers.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      teamMembers: newTeamMembers,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/register', formData)
      .then(response => {
        alert('Team Created Successfully');  // Updated the message here
        // Optionally, you can navigate to a success page or update the UI
      })
      .catch(error => {
        console.error('Error registering team:', error);
        alert('Failed to register team.');  // It's good to handle errors visibly for the user
      });
  };
  

  return (
    <div className='teamReg'>
      <h2>Team Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="teamNumber">Team Number:</label>
        <input
          type="text"
          id="teamNumber"
          name="teamNumber"
          value={formData.teamNumber}
          onChange={handleChange}
          placeholder='Team Number'
          autoComplete="off"
          required
        />
       <label htmlFor="batch">Batch:</label>
        <input
          type="text"
          id="batch"
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          placeholder='Batch'
          autoComplete="off"
          required
        />

        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder='Year'
          autoComplete="off"
          required
        />

        <label htmlFor="guideName">Guide Name:</label>
        <input
          type="text"
          id="guideName"
          name="guideName"
          value={formData.guideName}
          onChange={handleChange}
          placeholder='Guide Name'
          autoComplete="off"
          required
        />

        <label htmlFor="teamLeader">Team Leader:</label>
        <input
          type="text"
          id="teamLeader"
          name="teamLeader"
          value={formData.teamLeader}
          onChange={handleChange}
          placeholder='Team Leader'
          autoComplete="off"
          required
        />

        <label>Team Members:</label>
        {formData.teamMembers.map((member, index) => (
          <div key={index}>
            <input
              type="text"
              name={`teamMembers_${index}`}
              value={member}
              onChange={handleChange}
              placeholder={`Team Member #${index + 1}`}
              autoComplete="off"
              required
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveTeamMember(index)}>Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddTeamMember}>Add Team Member</button>

        <label htmlFor="classAdvisorName">Class Advisor Name:</label>
        <input
          type="text"
          id="classAdvisorName"
          name="classAdvisorName"
          value={formData.classAdvisorName}
          onChange={handleChange}
          placeholder='Class Advisor Name'
          autoComplete="off"
          required
        />

        <input type="submit"  value="Register Team" />
      </form>
      <Dashboard />
    </div>
  );
};

export default TeamRegistration;
