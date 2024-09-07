import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import JokeFetcher from './components/JokeFetcher';
import ToggleButton from './components/ToggleButton';
import ConditionalGreeting from './components/ConditionalGreeting';

function App() {
  return (
    <div>
      <Greeting name="John" />

      <Counter />

      <JokeFetcher />

      <ToggleButton />


      <ConditionalGreeting />
    </div>
  );
}

export default App;
