import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>        
        </header>

        <Form />

      </div>
    );
  }
}

export default App;

