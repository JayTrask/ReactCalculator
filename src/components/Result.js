import React, { Component } from 'react'

class Result extends Component{

	
	render(){
		let {result} = this.props.result;
		let {buffer} = this.props.buffer;
		let {operator} = this.props.operator;
		return(
			<div className="keypad">
			{ this.props.operator && <p>{buffer}</p> }
			{ !this.props.operator && <p>{result}</p> }
			</div> 
		);
	}
}
export default Result;