import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
let ab = "html technology";
// let bc = "it hub";
function App(){
  return(
    <>
      {/* css types  */}
      {/* inline css */}
      <h1 style={{color:'red',border:'2px solid black'}}>welcome to my page</h1>
      {/* external */}
      <div className='box'></div>
    </>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

