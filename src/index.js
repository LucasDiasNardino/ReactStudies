import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Lake({name}){
  return(
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function SkiResort({name}){
  return(
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}


function App(props){
  return(
    <>
      <Lake />
      <SkiResort/>
    </>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);