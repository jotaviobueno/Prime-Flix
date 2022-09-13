import React, { Component } from  'react';

export default class User extends Component {
    
    constructor ( props ) {
        super(props);
        this.state = {
			name: "",
            email: "",
            password: "",
            error: ""

        };

        this.send = this.send.bind( this );
    
    }

    send ( event ) {
        const { name, email, password } = this.state;

        if ( name !== "" && email !== "" && password !== "" )
            alert( ` 
            Nome: ${name}
            Email: ${email}
            password: ${password}
            ` );
        
        this.setState( { error: "Campos Invalidos" } );

        event.preventDefault();
        
    }
  

    render () {
        return (
            <div>
                <h1> Novo usuario </h1>
                { this.state.error && <p> { this.state.error } </p> }
                    <form onSubmit={ this.send } >
                        <label> Username: </label>
                        <input type= "text" value= { this.state.name } onChange= { ( event ) => this.setState({ name: event.target.value }) } /> <br/>

                        <label> Email: </label>
                        <input type= "email" value= { this.state.email } onChange= { ( event ) => this.setState({ email: event.target.value }) } /> <br/>

                        <label> Password: </label>
                        <input type= "password" value= { this.state.password } onChange= { ( event ) => this.setState({ password: event.target.value }) } /> <br/>


                        <button type= "submit" > Send </button>
                    </form>
            </div>
        )
    }
}