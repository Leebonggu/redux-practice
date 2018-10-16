import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoList from './TodoList';
import reducer from './reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}

export default App;
