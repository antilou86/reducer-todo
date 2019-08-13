import React, {useReducer} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {initialState, reducer} from './reducers/reducer';

import '../src/components/todo.css'

const App = () => {

const [state, dispatch] = useReducer(reducer, initialState)

    return (
      <div>
        <h2>Reducer ToDo List: MVP</h2>
        <TodoList todoData={state.todoItems} dispatch={dispatch} />
        <TodoForm dispatch={dispatch}/>
      </div>
    );

  }



export default App;
