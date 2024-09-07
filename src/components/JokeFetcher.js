import React, { useState, useEffect } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((data) => setJoke(`${data.setup} - ${data.punchline}`));
  }, []);

  return (
    <div>
      <h2>Random Joke:</h2>
      <p>{joke}</p>
    </div>
  );
}

export default JokeFetcher;
