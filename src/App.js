import React from 'react';
import logo from './logo.svg';
import './App.css';

import Keypad from './components/Keypad.js';
import Result from './components/Result.js';

class App extends Component {

  state = {
    result: "",
    buffer: "",
    operator: undefined
  }

  onClick = button => {

    if(button === "sqrt"){
      this.setState({
        result: Math.sqrt(this.state.result),
        buffer: "",
        operator: undefined
      })
    }

    if(button === "="){
      let buff = 0;
      if(this.state.operator){
        switch(this.state.operator){
          case("+"):
            buff = this.state.result + this.state.buffer;
            this.setState({
              result: buff,
              buffer: "", 
              operator: undefined
            })
            break;

          case("-"):
            buff = this.state.result - this.state.buffer;
            this.setState({
              result: buff,
              buffer: "", 
              operator: undefined
            })
            break;

          case("X"):
            buff = this.state.result * this.state.buffer;
            this.setState({
              result: buff,
              buffer: "", 
              operator: undefined
            })
            break;

          case("/"):
            buff = this.state.result / this.state.buffer;
            this.setState({
              result: buff,
              buffer: "", 
              operator: undefined
            })
            break;

          case("%"):
            buff = this.state.result % this.state.buffer;
            this.setState({
              result: buff,
              buffer: "", 
              operator: undefined
            })
            break;
        }
      }
    }

    else if(button === "-" || button === "+" || button === "/" || button === "X" || button === "%"){

      let buff = this.state.result;

      this.setState({
        result: "",
        buffer: buff,
        operator: button

      })
    }

    else if(button === "CE"){
      if(this.state.operator){
        let buff = this.state.buffer.slice(0, -1)
        this.setState({
          result: this.state.result,
          buffer: buff,
          operator: this.state.operator
        })
      }
      else{
        let buff = this.state.result.slice(0, -1)
        this.setState({
          result: buff,
          buffer: this.state.buffer,
          operator: this.state.operator
        })
      }
    }

    else if(button === "C"){
      this.setState({
        result: "",
        buffer: "",
        operator: undefined

      })
    }

    else{
      if(this.state.operator){
        this.setState({
          result: this.state.result,
          buffer: this.state.buffer.concat(button),
          operator: this.state.operator 
        })
      }
      else{
        this.setState({
          result: this.state.result.concat(button),
          buffer: this.state.buffer,
          operator: this.state.operator
        })
      }
    }
  }

  render(){
    return (
      <div className="App">
        <Result 
        result={this.state.result}
        buffer={this.state.buffer}
        operator={this.state.operator}/>
        <Keypad onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
