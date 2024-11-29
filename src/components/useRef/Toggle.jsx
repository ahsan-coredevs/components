import { useRef } from 'react';

const Toggle = () => {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div className='mt-10'>
      <p>Component rendered {renderCount.current} times</p>
    </div>
  );
};

export default Toggle;
