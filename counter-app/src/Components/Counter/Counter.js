import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter({ value }) {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);
  const handleRemove = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{ counter }</h2>
      <button onClick={ handleAdd }> +</button>
      <button onClick={ handleRemove }> -</button>
      <button onClick={ handleReset }> reset</button>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number
};

Counter.defaultProps = {
  value: 10
};

export default Counter;