
import './App.css'
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    setShowPopup(true); 
  }, []);

  useEffect(() => {
    if (count % 10 === 0) {
      setShowPopup(true);
      setBgColor('lightblue'); 
    }
  }, [count]);

  const handleClick = () => {
    if (count < 1000) {
      setCount(prevCount => {
        if (prevCount < 10) {
          return prevCount + 1;
        } else if (prevCount < 100) {
          return prevCount + 10;
        } else {
          return prevCount + 100;
        }
      });
    } else {
      setCount(prevCount => prevCount - 100);
    }
  };

  return (
    <div className="counter-container" style={{ backgroundColor: bgColor }}>
      <h1>{count}</h1>
      <button onClick={handleClick}>
        {count < 1000 ? 'Increment' : 'Decrement'}
      </button>
        {showPopup && <div className="popup"> {count === 0 ? 'Hello!' : 'you reached a multiple of ten.'}</div>}
    </div>
  );
}

export default Counter;

