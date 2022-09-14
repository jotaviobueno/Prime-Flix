import React, { Component } from "react"
import './index.css'
import "./style.css"

export default class App extends Component {
    
    constructor ( props ) {
        super(props);
        this.state= {
            number: 0,
            btn: "VAI"
        };
        
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai () {
        let state = this.state;

        if ( this.timer !== null ) {
            clearInterval( this.timer );

            this.timer = null;

            state.btn = "VAI"
        } else {
            this.timer = setInterval( () => {
                let state = this.state;

                state.number += 0.1;

                this.setState(state);
            }, 100 );

            state.btn = "PAUSAR"
        }
    }

    limpar () {        
        if ( this.timer !== null ) {
            clearInterval( this.timer );

            this.timer = null;
        }

        let state = this.state;
        state.number = 0;
        state.btn = "VAI";
        this.setState(state);
    }

    render () {
        return (
            <div className="container" >
               <img className="img" src={ require('./assets/cronometro.png') } alt="alt" />
               <a className="timer" > { this.state.number.toFixed(1) } </a>

                <div className="areaBtn" >
                    <a className="btn" onClick= {this.vai} > { this.state.btn } </a>
                    <a className="btn" onClick= {this.limpar} > LIMPAR </a>

                </div>

            </div>
        );
    }
}
