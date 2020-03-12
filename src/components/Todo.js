import React from 'react';
import './Todo.css';

const Todo = props =>{
    return(
        <div 
        onClick={()=> props.toggleCompleted(props.chore.id)}
        className={`chore${props.chore.completed ? 'completed' : ''}`}
        >
        <p>{props.chore.task}</p>
        </div>
    );
};

export default Todo;