import React, { Component } from  'react';

export default class User extends Component {
    
    constructor ( props ) {
        super(props);
        this.state = {
            name: props.name
        };

        this.entrar = this.entrar.bind( this );
    }

    entrar ( name ) {
        this.setState({ name: name });
    }
    
    render () {
        return (
            <div>
               <h2> Bem-vindo ao nosso site { this.state.name }</h2>

               <button onClick = { () => this.entrar("otavio123") } > Entrar como Otavio </button>
               <button onClick = { () => this.setState({ name: "" })} > Sair </button>
            </div>
        );
    }
}