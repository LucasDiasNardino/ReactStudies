import React, {useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CheckBox(){
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );

  function toggle(){
    setChecked();
  }

  return(
    <>
      <input 
        type="checkbox" 
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <CheckBox />,
  document.getElementById("root")
);