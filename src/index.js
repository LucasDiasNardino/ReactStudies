import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const lakeList = [
  {id: "1", name:"Echo", trailhead: "Echo"},
  {id: "2", name:"Maud", trailhead: "Wrights"},
  {id: "3", name:"Velma", trailhead: "Bayview"},
];

const list = [1,2,3,4,5];

function App({items}){
  return (
    <ul>
      {items.map(item => (
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  );
}


ReactDOM.render(
  <App items={list}/>,
  document.getElementById("root")
);