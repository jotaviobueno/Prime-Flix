import React, { Component } from  'react';


export default class Feed extends Component {

    render () {
        return (
            <div key = { this.props.id } >
                <h3> { this.props.username } </h3>

                <a> 
                { 
                    this.props.like === 1 ? 
                        `${this.props.like} Curtida / `
                    :
                        `${this.props.like} Curtidas / `
                }
                
                {
                    this.props.comments === 1 ?
                        `${this.props.comments} Comentario`
                    :
                        `${this.props.comments} Comentarios`
                }

                </a>


                <hr/>
            </div>
        )
    }
}