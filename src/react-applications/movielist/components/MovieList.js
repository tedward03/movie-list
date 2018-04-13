import React, {Component} from 'react';
import '../MovieList.css';


export default class MovieList extends Component {

    renderMovieItems(movies) {
        return (
            <ul>
                {movies.sort((a, b) => a.Title > b.Title).map((movie) => {
                    console.log("MOVIE",movie);
                    return (
                        <li className="listItem" key={movie.Title}>
                            <div className="movieThumbnail">
                                <a href={movie.Poster}>
                                    <img src={movie.Poster} alt={movie.Title}/>
                                </a>
                            </div>
                            <div className="listItemInfo">
                                <h3>{movie.Title}</h3>
                                <p>{movie.Plot}</p>
                                <label><strong>Genre:</strong> {movie.Genre}</label>
                                <label><strong>Released:</strong> {movie.Released}</label>
                                <label><strong>Run-time:</strong> {movie.Runtime}</label>
                                <label><strong>Ratings:</strong> {movie.Ratings[1].Source}:  {movie.Ratings[1].Value}</label>
                            </div>
                        </li>
                    )})}
            </ul>
        );
    }

    render() {

        return (
            <div className="listParent">
                {this.renderMovieItems(this.props.movies)}
            </div>
        )
    };

}