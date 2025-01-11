import React from 'react';
import ReactDOM from 'react-dom/client';
let ab = "html technology";
// let bc = "it hub";
function App(){
  return(
    <>
    {/* template literals */}
      <h1>welcome {ab}</h1>
      <p>this is p tag</p>
      <pre>this is pre tag</pre>
      <h1>h1 tag</h1>
      <h2>h2 tag</h2>
      <h3>h3 tag</h3>
      <h4>h4 tag</h4>
      <h5>h5 tag</h5>
      <h6>h6 tag</h6>
      <b>bold tag</b><br/>
      <a>anchor tag</a>
      {/* <h1>welcome{` ${ab} ${bc}`}</h1> */}
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

