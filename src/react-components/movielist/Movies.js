import React, {Component} from 'react';
import './MovieList.css';
import movies from '../../resources/movies.json';
import MovieSubmit from './components/MovieSubmit';
import MovieList from './components/MovieList';

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: movies,
        };
    }

    render() {
        return (
            <div className="fullParent">
                <div id="left" className="column">
                    <div className="top-left">SideBar Title</div>
                    <div className="bottom">SideBar</div>
                </div>
                <div id="right" className="column">
                    <div className="top-right">
                        <MovieSubmit/>
                    </div>
                    <div className="bottom">
                        <MovieList movies={movies}/>
                    </div>
                </div>
            </div>
        );
    };

}

