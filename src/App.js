import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Keypad from './components/Keypad.js';
import Result from './components/Result.js';

class App extends Component {

  state = {
    result: ""
  }

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  evaluate = () => {
    this.setState({
      result: (eval(this.state.result)) + ""
    })
  };

  onClick = button => {
    if(button === "back"){
      this.backspace();
    }

    else if(button === "="){
      this.evaluate();
    }

    else if(button === "C"){
      this.reset();
    }

    else{
      this.setState({
        result: this.state.result + button
      })
    }
  };

  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="column outside">.</div>
          <div className="column middle">
              <Result 
              result={this.state.result}
              />
              <Keypad onClick={this.onClick}/>

              <br/>
              <div className="credits">version 1.0 Created by Jay Trask</div>
          </div>
          <div className="column outside">.</div>
        </div>
      </div>
    );
  }
}

export default App;
