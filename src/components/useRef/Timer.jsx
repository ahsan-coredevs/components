import { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [controlTime, setControlTime] = useState(true);
  const timerRef = useRef(null); 

 
  useEffect(() => {

    if(time === 0) return;
    if (controlTime) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current); 
  }, [time, controlTime]); 

 
  const handleTimer = () => {
    setControlTime((prev) => !prev); 
  };

  

  return (
    <div className="w-full mt-10">
      <p className="mb-4">Time: {time} seconds</p>
      <button
        className="mr-4 p-2 bg-green-400 rounded-md cursor-pointer"
        onClick={() => setTime(1)}
      >
        Start Timer
      </button>
      <button
        className="mr-4 p-2 bg-green-400 rounded-md cursor-pointer"
        onClick={handleTimer} 
      >
        {controlTime ? "Pause" : "Start Again"}
      </button>
      <button
        className="mb-4 p-2 bg-green-400 rounded-md cursor-pointer"
        onClick={() => setTime(0)} 
      >
        Clear Timer
      </button>
    </div>
  );
};

export default Timer;
