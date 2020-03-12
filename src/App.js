import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

//list
const tasks = 
  [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];



  class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      tasks, 
      chore:'' 
    };
  }
  //constructor ends

toggleCompleted = clickedChoreId =>{
this.setState({
  tasks: this.state.tasks.map(chore =>{
    if(chore.id === clickedChoreId) {
      return{
        ...chore, 
        completed:!chore.completed
      };
    } else {
      return chore;
    }
  })
});
};

// props handlers 
addChore = e => {
  e.preventDefault();
  const newChore = { task: this.state.chore, completed: false, id: Date.now() };
  this.setState({ 
    tasks: [...this.state.tasks, newChore], 
    chore: '' 
  });
};

handle_TF_change = e =>{
  this.setState({chore: e.target.value});
}

handleClearButton = e => {
  e.preventDefault();
  let tasks = this.state.tasks.filter(chore => !chore.completed);
  this.setState({ tasks });
};
  
  

  render() {
    return (
      <div className="todo_all">
        <div>
          <h1>To-Do List</h1>
          <TodoForm 
          addChore={this.addChore} 
          handle_TF_change={this.handle_TF_change}
          value={this.state.chore}
          handleClearButton={this.handleClearButton}
          />
        </div>
        <TodoList
        tasks={this.state.tasks}
        toggleCompleted={this.toggleCompleted}
        
        />
      </div>
    );
  }
}

export default App;
