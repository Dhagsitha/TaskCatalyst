import React from 'react';

const RemarksList = ({ remarks }) => {
  return (
    <div>
      <h4>Remarks:</h4>
      <ul>
        {remarks.map((remark, index) => (
          <li key={index}>{remark}</li>
        ))}
      </ul>
    </div>
  );
};

export default RemarksList;
