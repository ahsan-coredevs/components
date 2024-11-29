import { useRef, useEffect, useState } from 'react';

const LifecycleComponent = () => {
  const hasMounted = useRef(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!hasMounted.current) {
      // Component mounted
      setMessage('Component mounted');
      console.log('Component mounted');
      
      // After 1 second, update the message
      setTimeout(() => {
        setMessage('Component updated');
        console.log('Component updated');
      }, 1000);

      hasMounted.current = true; // Mark that the component has mounted
    }
  }, []); // Empty dependency array to run this effect once when the component mounts

  return (
    <div className='mt-10'>
      <h1>Check the console for lifecycle events</h1>
      <div>{message}</div>
    </div>
  );
};

export default LifecycleComponent;
