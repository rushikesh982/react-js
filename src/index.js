import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
let ab = "html technology";
// let bc = "it hub";
function App(){
  return(
    <>
      {/* bootstrap in js */}
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='text-danger text-center mt-4 mb-4' >welcome</h1>
          </div>
          <div className='col-3'>
            <div className='card'>
              <div className='card-body'>
                <img  src='logo192.png' className='img-fluid'/>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='card'>
              <div className='card-body'>
                <img  src='logo192.png' className='img-fluid'/>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='card'>
              <div className='card-body'>
                <img  src='logo192.png' className='img-fluid'/>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='card'>
              <div className='card-body'>
                <img  src='logo192.png' className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

