import React, { useState } from 'react';

function ConditionalGreeting() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name ? `Hello, ${name}!` : 'Please enter your name'}</h2>
    </div>
  );
}

export default ConditionalGreeting;
