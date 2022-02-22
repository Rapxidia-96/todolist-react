import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg)=>{
    alert(msg);
  }
  return (
    <button className="CreateTodoButton" onClick={()=>onClickButton('Mensaje')}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
    </button>
  );
}

export { CreateTodoButton };
