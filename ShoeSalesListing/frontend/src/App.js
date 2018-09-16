import React, { Component } from 'react';
import NavBar from './components/navibar.js';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoeList from './components/ShoeList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <NavBar />
        <container>
          <ShoeList />
        </container>
      </div>
      </Provider>
    );
  }
}

export default App;
