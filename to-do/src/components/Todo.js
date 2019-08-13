import React from 'react';

const Todo = props =>{
    return(
        <div
            className={`todo${props.todo.completed ?'-completed': ''}`}
            onClick={()=> props.dispatch({type: "TOGGLE_ITEM"})}
        >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default  Todo
