import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = () => {
  const [activeItems, setActiveItems] = useState(30);
  const [totalItems, setTotalItems] = useState(100);

  const percentage = totalItems > 0 ? (activeItems / totalItems) * 100 : 0;

  return (
    <div className="flex flex-col items-center">
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage.toFixed(2)}%`}
          styles={buildStyles({
            textSize: '16px',
            pathColor: '#3B82F6', // Fixed blue-500 color
            textColor: '#3B82F6', // Optional: Text color matches path color
            trailColor: '#d6d6d6', // Trail color
            trailWidth: 20, // Increase trail size
            pathWidth: 12, // Increase path size to match trail
          })}
        />
      </div>
    </div>
  );
};

export default CircularProgressBar;
