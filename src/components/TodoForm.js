import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            chore: ''
        };
        console.log(this.props);
    }

handleChange= e =>{
    this.setState({
        chore: e.target.value
    });
};

    handleSubmit = e =>{
        e.preventDefault();
        this.props.addChore(this.state.chore);
        this.setState({
            chore:''
        });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text'
                name='chore'
                value={this.state.chore}
                onChange={this.handleChange}
                />
                <button>Add To-Do</button>
            </form>
        );
    }


}

export default TodoForm;