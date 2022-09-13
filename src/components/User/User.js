import React, { Component } from  'react';

export default class User extends Component {
    
    constructor ( props ) {
        super(props);
        this.state = {
            status: false
        };

        this.leave = this.leave.bind(this);
        this.join = this.join.bind(this);

    }

    leave (  ) {
        this.setState({ status: false });
    }

    join (  ) {
        this.setState({ status: true });
    }
    
    render () {
        return (
            <div>
                {
                    this.state.status ? 
                    <div>
                        <h2> Bem-vindo ao sistema </h2>    
                        <button onClick = { this.leave } > Sair no sistema </button>
                    </div> :
                    <div>
                        <h2> Ola visitante faça login </h2>
                        <button onClick = { this.join } > Entrar no sistema </button>

                    </div>
                }
            </div>
        );
    }
}