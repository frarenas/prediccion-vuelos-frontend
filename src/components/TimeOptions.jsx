import React from "react";

const times = [
  'mañana', 'tarde', 'noche' 
];

const TimeOptions = () => {
  return (
    <>
      {times.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </>
  );
};

export default TimeOptions;
