import React, { Component } from "react";
import User from './components/User/User.js'

export default class App extends Component {
  
	render () {
		return (
			<div>
				<User name="Visitante" />
			</div>
		);
	}
}