import { types } from './action';

const initialState = {
  todos: [/* { text: string, complete: boolean } */],
  filter: '모두',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODOS: {
      const newTodo = {
        text: action.payload,
        complete: false,
        
      };
      return {
        ...state,
        todos: [...JSON.parse(JSON.stringify(state.todos)), newTodo],
      };
    }
    case types.DELETE_TODO: {
      const todos = JSON.parse(JSON.stringify(state.todos));
      todos.splice(action.payload, 1);
      return {
        ...state,
        todos,
      };
    }
    case types.TOGGLE_TODO: {
      const todos = JSON.parse(JSON.stringify(state.todos));
      const target = todos[action.payload];
      console.log(target);
      target.complete = !target.complete;
      return {
        ...state,
        todos,
      };
    }
    case types.FILTER_TODOS: {
      return {
        ...state,
        filter: action.payload,
      }
    }
    default: 
      return state;
  }
};




