export const types = {
  ADD_TODOS: 'ADD_TODOS',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  FILTER_TODOS: 'FILTER_TODOS',
};

export const addTodos = text => ({
  type: types.ADD_TODOS,
  payload: text, 
});

export const deleteTodo = index => ({
  type: types.DELETE_TODO,
  payload: index,
});

export const toggleTodo = index => ({
  type: types.TOGGLE_TODO,
  payload: index,
});

export const filterTodos = text => ({
  type: types.FILTER_TODOS,
  payload: text,
});

