import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteTodo, toggleTodo } from './action';

class TodoItem extends Component {
  render() {
    const { todo, index, _deleteTodo, _toggleTodo } = this.props;
    // let filteredTodos = JSON.parse(JSON.stringify(todos));
    // if (filter === '완료') {
    //   filteredTodos = todos.filter(todo => todo.complete);
    // } else if (filter === '미완료') {
    //   filteredTodos = todos.filter(todo => !todo.complete);
    // }
    // const todo = filteredTodos[index];
    console.log(todo);
    return (
      <div>
        <span 
          onClick={() => _toggleTodo(index)} 
          style={{ textDecoration: todo.complete ? 'line-through' : 'none', color: todo.complete ? 'gray' : 'black' }}
        > 
          {todo.text}
        </span>
        <button onClick={() => _deleteTodo(index)}>삭제</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filter,
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  _deleteTodo: index => dispatch(deleteTodo(index)),
  _toggleTodo: index => dispatch(toggleTodo(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);