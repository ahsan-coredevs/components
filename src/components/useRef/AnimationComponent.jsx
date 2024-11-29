import { useRef, useEffect, useState } from 'react';

const AnimationComponent = () => {
  const boxRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Trigger the rotation animation when count changes
   
      if (boxRef.current) {
        boxRef.current.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
        boxRef.current.style.transform = `rotate(${count * 360}deg)`; // Rotate based on count
      }
    
  }, [count]); // Dependency on count, so it runs every time count changes

  return (
    <>
      <div
        ref={boxRef}
        className="w-24 h-24 bg-red-500 mt-10"
      >
        Box
      </div>
      <div className="mt-4">
        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
        >
          Click
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
        >
          Click
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Clear Count
        </button>
      </div>
    </>
  );
};

export default AnimationComponent;
