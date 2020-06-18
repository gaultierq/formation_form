import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore'

function App() {
  return (
    <Router>
      <Provider store={store} >
        <Form />
      </Provider>

    </Router>
  );
}

export default App;
