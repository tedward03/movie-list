import React, {Component} from 'react';
import './MovieList.css';
import moviesFromFile from '../../resources/initMovies.json';
import apiKeyFile from '../../resources/apiKey.json';

import MovieSubmit from './components/MovieSubmit';
import MovieList from './components/MovieList';

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movieJson: [],
        };
        this.handleNewMovie = this.handleNewMovie.bind(this);
        this.fetchMovie = this.fetchMovie.bind(this);
    }

    handleNewMovie(newMovie) {
        this.fetchMovie(newMovie.title)
    }

    componentWillMount() {
        console.log("Mount",moviesFromFile);
        moviesFromFile.forEach((movieFromFile) => {
          this.fetchMovie(movieFromFile.title)
        });
    }

    fetchMovie(title){
        fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKeyFile.apiKey}`)
            .then(results => {
                return results.json();
                }).then(data => {
                this.setState({movieJson: [...this.state.movieJson, data]});
        });
    }

    render() {
        console.log("Render", moviesFromFile);

        const movies = this.state.movieJson;
        console.log("MOVIES!!!!!", movies);
        console.log("STATE", this.state.movieJson);

        return (
            <div className="fullParent">
                <div id="left" className="column">
                    <div className="top-left">SideBar Title</div>
                    <div className="bottom">SideBar</div>
                </div>

                <div id="right" className="column">
                    <div className="top-right">
                        <MovieSubmit handleNewMovie={this.handleNewMovie}/>
                    </div>
                    <div className="bottom">
                        <MovieList movies={movies}/>
                    </div>
                </div>
            </div>
        );
    };

}

