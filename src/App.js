import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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
      name:'' 
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
addChore(choreName) {
  const newChore = {
    task: choreName,
    id: Date.now(),
    completed:false
  };
  this.setState({
    tasks: [...this.state.tasks, newChore]
  });
}

handleClearButton (){
  function filterChore (chore){
      if (chore.completed === true){
          return true;
      } 
  }
  
  this.setState({tasks: this.state.tasks.filter(filterChore)})
  
  }

  render() {
    return (
      <div>
        <div>
          <h1>To-Do List</h1>
          <TodoForm addChore={this.addChore}/>
        </div>
        <TodoList
        tasks={this.state.tasks}
        toggleCompleted={this.toggleCompleted}
        handleClearButton={this.handleClearButton}
        />
      </div>
    );
  }
}

export default App;
