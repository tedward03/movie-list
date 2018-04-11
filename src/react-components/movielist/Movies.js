import React, {Component} from 'react';
import './MovieList.css';
import moviesFromFile from '../../resources/initMovies.json';
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
        fetch(`http://www.omdbapi.com/?t=${title}&apikey=96712aad`)
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


// ,
// {
//     "title": "Aliens"
// },
// {
//     "title": "Avatar"
// },
// {
//     "title": "Blade Runner"
// },
// {
//     "title": "Chappie"
// },
// {
//     "title": "Children of Men"
// },
// {
//     "title": "Cloud Atlas"
// },
// {
//     "title": "Dark City"
// },
// {
//     "title": "Dawn of the Planet of the Apes"
// },
// {
//     "title": "District 9"
// },
// {
//     "title": "Dredd"
// },
// {
//     "title": "Elysium"
// },
// {
//     "title": "Fifth Element"
// },
// {
//     "title": "Interstellar"
// },
// {
//     "title": "Jurassic Park"
// },
// {
//     "title": "Looper"
// },
// {
//     "title": "Matrix"
// },
// {
//     "title": "Minority Report"
// },
// {
//     "title": "Rise of the Planet of the Apes"
// },
// {
//     "title": "Robocop"
// },
// {
//     "title": "Starship Troopers"
// },
// {
//     "title": "Terminator, The"
// },
// {
//     "title": "Terminator 2: Judgment Day"
// },
// {
//     "title": "Total Recall"
// },
// {
//     "title": "War of the Worlds"
// },
// {
//     "title": "Watchmen"
// }
//

}

