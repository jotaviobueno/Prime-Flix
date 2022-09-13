import React, { Component } from  'react';

import Feed from "./components/feed/Feed.js"

export default class User extends Component {
    
    constructor ( props ) {
        super(props);
        this.state = {
            feed: [
                { id: 23, username: "Matheus", like: 10, comments: 5 },
                { id: 321, username: "Pedro", like: 1230, comments: 123 },
                { id: 1, username: "Otavio", like: 1, comments: 9921 },
                
            ]
        };

    }
    
    render () {
        return (
            <div>

            { this.state.feed.map( ( post ) => {
                    return (
                        <Feed id = { post.id } username = { post.username } like = { post.like } comments = { post.comments }    />
                    )
                })
            } 
            </div>
        );
    }
}