

export const initialState = [{
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]


// addTask = taskName => {
//     const newTask = {
//       task: taskName,
//       completed: false,
//       id: Date.now()
//     };
  
export function reducer(state, action) {

    switch (action.type) {
        case 'TOGGLE_ITEM':
            state.map(item => {
                if (item.id === props.todo.id) {
                  return {
                    ...item,
                    completed: !item.completed
                  };
                } else {
                  return item;
                }
              })
        case 'ADD_TASK': 
            const newTask = {
                task: taskName,
                completed: false,
                id: Date.now()
            }
            return [...state, {newTask}]

        default: return state;
    }
}
