// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props);
    console.log(props.tasks);


return (
    <div>
        {props.tasks.map(chore => (
            <Todo
            key={chore.id}
            chore={chore}
            toggleCompleted={props.toggleCompleted}
            />
        ))}
        <button 
        onClick={props.handleClearButton}
        >Clear Completed</button>
    </div>
);
};

export default TodoList;