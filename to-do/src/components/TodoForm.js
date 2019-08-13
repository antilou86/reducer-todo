import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            task: '',
        };
    }

    handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    submitItem = e => {
        e.preventDefault();
        console.log('YOUR ADD TASK BUTTON IS SENDING A VALUE OF ', this.state.task)
        this.props.dispatch({type:"ADD_TASK", payload: this.state.task});
        this.setState({task: ''})
    };

    render() {
        return (
        
                <form onSubmit={this.submitItem}>
                    <input
                        type="text"
                        placeholder='...todo'
                        value={this.state.task}
                        name="task"
                        onChange={this.handleChanges}
                    />
                    <button>Add Task</button>
                </form>
            
        )
    }
}

export default TodoForm