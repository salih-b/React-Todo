import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
   
        return (
            <form className="form" >
                <input 
                type='text'
                name='chore'
                value={props.value}
                onChange={props.handle_TF_change}
                placeholder="enter to do..."
                />
                <button className="button" onClick={props.addChore}>Add To-Do</button>
                <button className="button" onClick={props.handleClearButton}>Clear Completed Chores</button>
            </form>
        );
    }

export default TodoForm;