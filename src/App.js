import React, { Component } from "react"

import Button from './components/Button.js'
import './estilo.css'

export default class App extends Component {
    
    constructor ( props ) {
        super(props);
        this.state= {
            frase: ""
        };

        this.frases = [
            'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ];

        this.quebrarbiscoito = this.quebrarbiscoito.bind( this );
    }

    quebrarbiscoito () {
        let state = this.state;
        const randomNumber = Math.floor(Math.random() * this.frases.length );

        state.frase = this.frases[randomNumber];

        this.setState( state );
    }

    render () {
        return (
            <div className= "container" >
                <img src= { require('./assets/biscoito.png') } className= "img" />
                <Button nome= "Abrir biscoito" acao= { this.quebrarbiscoito } />
                <h3 className= "texto" > { this.state.frase } </h3>
            </div>
        );
    }
}
