import React, {useReducer} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {initialState, reducer} from './reducers/reducer';

import './components/Todo.css'

const App = () => {

const [state, dispatch] = useReducer(reducer, initialState)

  setTodoData({
    todoData: [...todoData, newTask]
  })
}

clearCompleted = () => {
  this.setState({
    todoData: this.state.todoData.filter(item => !item.completed)
  });
};

    return (
      <div>
        <h2>Reducer ToDo List: MVP</h2>
        <TodoList todoData={state} dispatch={dispatch} clearCompleted={clearCompleted}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );

  }



export default App;
