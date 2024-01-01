import React, { useState } from 'react';

function ButtonShit() {
  function handleClick() {
    alert('alerted');
  }

  return (
    <button type='button' onClick={handleClick}>Click me</button>
  );
}

const Interactive = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
    <ButtonShit />
      <p>Count: {count}</p>
      <button type='button' onClick={() => setCount(count + 1)}>update the thing</button>
    </div>
  );
};

export default Interactive;


