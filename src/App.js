import React, { Component } from  'react';

export default class User extends Component {
    
    constructor ( props ) {
        super(props);
        this.state = {
			email: "",
			password: "",
            sexo: "masculino"
        };

		this.change = this.change.bind( this );
        this.ChangeSex = this.ChangeSex.bind( this );
    }
    
	change ( event ) {
		this.setState({ email: event.target.value });
	}

    ChangeSex ( event ) {
        this.setState({ sexo: event.target.value });
    }

    render () {
        return (
            <div>
				<h2> Login </h2>
				Email:
					<input type= "email" name= "email" value= { this.state.email } onChange= { this.change } /> <br/>
				Password:
					<input type= "password" name= "password" value= { this.state.password } onChange= { (event) => this.setState({ password: event.target.value }) } /> <br/>
				Sexo:
                    <select name= "sexo" value= { this.state.sexo } onChange= { this.ChangeSex } >
                        <option value= "masculino" > Masculino </option>    
                        <option value= "feminino"  > Feminino </option>   
                        <option value= "n/a" > Prefiro não responder </option>    
                    </select>	

                <div>
                    <h3> { this.state.email } </h3>
                    <h3> { this.state.password } </h3>
                    <h3> { this.state.sexo } </h3>
                </div>

            </div>
        );
    }
}