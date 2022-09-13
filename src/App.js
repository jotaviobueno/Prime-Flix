import React, { Component } from "react";

export default class App extends Component {
  
	constructor ( props ) {
		super(props)
		this.state = {
			hora: "00:00:00"
		};
	}

	componentDidMount () {
		setInterval( () => {
			this.setState({ hora: new Date().toLocaleTimeString() });
		}, 1000 );
	}

	// componentDidUpdate () {
	// 	console.log("Atualizou!!!")
	// }

	render () {
 return (
   <div>
     <h1> Meu projeto { this.state.hora } </h1>
   </div>
  )
 }
}