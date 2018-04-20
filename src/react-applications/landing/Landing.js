import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends Component {

    render() {
        return (
            <div className="title">
                <h1>Landing Page for React Practice </h1>
                <Link to="/movies">
                    <button>Movies</button>
                </Link>
                <Link to="/clickapp">
                    <button>ClickApp</button>
                </Link>
                <Link to="/todo">
                    <button>Todo List</button>
                </Link>
            </div>
        )
    };

}
