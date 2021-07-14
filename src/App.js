import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('/api1/products')
      .then(res => res.json())
      .then(res => {
        console.log('Output 1:', res);
      });
    fetch('/api2/products')
      .then(res => res.json())
      .then(res => {
        console.log('Output 2:', res);
      });
  }, []);

  return (
    <div>
      <h3>Set up a proxy for multiple APIs in React - <a href="https://www.cluemediator.com" target="_blank" rel="noreferrer">Clue Mediator</a></h3>
      <p>Open Console to check the logs.</p>
    </div>
  );
}

export default App;