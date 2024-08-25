import React, { useState, useEffect } from 'react';
import './TeamBox.css';

const TeamBox = ({ team, onClick, userType, onViewRemarks, teamPassword }) => {
  const [remark, setRemark] = useState('');
  const [remarks, setRemarks] = useState(() => {
    // Retrieve remarks from local storage on component mount
    const storedRemarks = localStorage.getItem(`${team}_remarks`);
    return storedRemarks ? JSON.parse(storedRemarks) : [];
  });
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Store remarks in local storage whenever remarks state updates
    localStorage.setItem(`${team}_remarks`, JSON.stringify(remarks));
  }, [remarks, team]);

  const handleChange = (e) => {
    setRemark(e.target.value);
  };

  const handleAddRemark = () => {
    if (remark.trim() !== '') {
      const newRemark = {
        text: remark,
        timestamp: new Date().toLocaleString() // Add timestamp to the remark
      };
      setRemarks([...remarks, newRemark]);
      setRemark('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleViewRemarks = () => {
    onViewRemarks(password);
  };

  return (
    <div
      style={{ width: '25%', padding: '20px', border: '1px solid black', margin: '10px', cursor: 'pointer' }}
      onClick={onClick}
    >
      <h3>{team}</h3>
      {userType === 'teacher' && (
        <>
          <textarea value={remark} onChange={handleChange} placeholder="Add remark" />
          <button onClick={handleAddRemark}>Add Remark</button>
        </>
      )}
      {userType === 'student' && (
        <>
        <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter team password"
          />
          <button onClick={handleViewRemarks}>View Remarks</button>
        </>
      )}
      <div>
        <h4>Remarks:</h4>
        <ul>
          {remarks.map((r, index) => (
            <li key={index}>
              {r.text} - <span className="timestamp">{r.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamBox;
