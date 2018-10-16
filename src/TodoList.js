import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodos, filterTodos } from './action';
import TodoItem from './TodoItem';

class TodoList extends Component {
  todoInput = React.createRef();

  componentDidMount() {
    const { _filterTodos } = this.props;
    _filterTodos('모두');
  }

  render() {
    const { filter, todos, _addTodos, _filterTodos } = this.props;
    let filteredTodos = JSON.parse(JSON.stringify(todos));
    if (filter === '완료') {
      filteredTodos = todos.filter(todo => todo.complete);
    } else if (filter === '미완료') {
      filteredTodos = todos.filter(todo => !todo.complete);
    }
    console.log(filteredTodos);
    return (
      <div>
        <h1>투두리스트</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.todoInput.current.value = '';
          }}
        >
          <input ref={this.todoInput} />
          <input type="submit" onClick={() => _addTodos(this.todoInput.current.value)} value="추가" />
        </form>
        <select onChange={e => _filterTodos(e.target.value)}>
          <option>모두</option>
          <option>미완료</option>
          <option>완료</option>
        </select>
        {filteredTodos.map((todo, index) => (
          <TodoItem todo={todo} index={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  _addTodos: text => dispatch(addTodos(text)),
  _filterTodos: text => dispatch(filterTodos(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
