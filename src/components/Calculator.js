import React, { Component } from 'react'

class Calculator extends Component{

 	state = {
	    currentValue: 0,
	    bufferValue: 0,
	    nextValue: 0,

	    operator: undefined
 	}

	
	render(){
		return(
			<div className="calculator">
			</div> 
		);
	}
}
export default Calculator;