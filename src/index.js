import React from 'react';
import ReactDOM from 'react-dom/client';
let ab = "a2z";
let bc = "it hub";
function App(){
  return(
    <>
    {/* template literals */}
      <h1>welcome {ab}</h1>
      <h1>welcome{` ${ab} ${bc}`}</h1>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

