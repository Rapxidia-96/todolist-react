import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  // const onComplete=()=>{
  //   alert('mensaje de tarea completa');
     // const [todosCompleded, setTodoscompleted] = React.useState();
  // }
  // const onDeleted=()=>{
  //   alert('mensaje de tarea borrada');
  // }
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
            onClick={props.onComplete}
            
            >
        <svg  xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24">
          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
        </svg>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"  
            onClick={props.onDelete}>
        <svg  xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24">
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
        </svg>
      </span>
    </li>
  );
}

export { TodoItem };
