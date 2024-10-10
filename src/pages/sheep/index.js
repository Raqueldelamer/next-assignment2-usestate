import {useState} from 'react';

export default function SheepCounterPage(){
  // Use State here.
  // Declare state with useState
  const [count, setCount] = useState(10);
  // Don't declare state with a regular variable
  // let count = 10; 

  // TODO: A button that will increment my sheep by one.
  // This should increment count by 1
  function handleClick() {
    // count++;
    setCount( count + 1 );
    // alert(`You have ${count} sheep.`)
  }
  return (<div>
    <h1>Hello Sheep!!!!!</h1>
    <div>
      <h3>You have {count} sheep.</h3> 
      <button onClick={ handleClick }>
        More Sheep
      </button>
    </div>
  </div>);

}
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
