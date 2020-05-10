import React from "react";

const Status = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">{`Hello, ${name} your entry count is...`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Status;
