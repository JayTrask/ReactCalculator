import React, { Component } from 'react'

class Keypad extends Component{

 	state = {
	    currentValue: 0,
	    bufferValue: 0,
	    nextValue: 0,

	    operator: undefined
 	}

	
	render(){
		return(
			<div className="keypad">
				<button className="keypad-button" name="sqrt" onClick={e => this.props.onClick(e.target.name)}>√</button>
				<button className="keypad-button" name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
				<button className="keypad-button" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
				<button className="keypad-button" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>	<br/>

				<button className="keypad-button" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
				<button className="keypad-button" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
				<button className="keypad-button" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
				<button className="keypad-button" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>	<br/>

				<button className="keypad-button" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
				<button className="keypad-button" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
				<button className="keypad-button" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
				<button className="keypad-button" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>	<br/>

				<button className="keypad-button" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
				<button className="keypad-button" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
				<button className="keypad-button" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
				<button className="keypad-button" name="X" onClick={e => this.props.onClick(e.target.name)}>X</button>	<br />

				<button className="keypad-button" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
				<button className="keypad-button" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
				<button className="keypad-button" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
				<button className="keypad-button" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>	<br/>
			</div> 
		);
	}
}
export default Keypad;