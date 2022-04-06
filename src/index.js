import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const lakeList = [
  "Echo Lake",
  "Maud Lake",
  "Cascade Lake",
];


function App(props){
  return (
    <ul>
      {props.lakes.map(lake => (
      <li>{lake}</li>
      ))}
    </ul>
  );
}

// function App({lakes}){
//   return (
//     <ul>
//       {lakes.map(lake => (
//       <li>{lake}</li>
//       ))}
//     </ul>
//   );
// }

ReactDOM.render(
  <App lakes={lakeList}/>,
  document.getElementById("root")
);