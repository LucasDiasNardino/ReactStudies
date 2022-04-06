import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Hello(props){
  console.log(props);
  return(
    <div>
      <h1>Welome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>{props.number} Props  In Total</p>
      {/* <p>
        {Object.keys(props).length} Props Total
      </p> */}
    </div>
  )
}

// function Hello({library, message, number}){
//   return(
//     <div>
//       <h1>Welome to {library}!</h1>
//       <p>{message}</p>
//       <p>{number} Props Total</p>
//     </div>
//   )
// }

ReactDOM.render(
  <Hello 
  library="react" 
  message="Have Fun!" 
  number = {3}
  />,
  document.getElementById("root")
);