import React from 'react';
import Todo from './Todo';

    const TodoList = (props) => {
        return(
            <div className= "task-item-list">
                {props.todoData.map(item => (
                    <Todo key={item.id} todo={item} dispatch={props.dispatch}/>
                ))}
                <button 
                    className="clear-btn" 
                    onClick={() => dispatch({type:"CLEAR_COMPLETED"})}
                >
                    Clear Completed
                 </button>
            </div>
        )
    }


export default  TodoList