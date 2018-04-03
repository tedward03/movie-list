import React, {Component} from 'react';
import '../MovieList.css';


export default class MovieList extends Component {

    renderMovieItems() {
        return (
            <ul>
                {this.props.movies.map((movie, index) =>
                    <li className="listItem" key={index}>
                        <div className="movieThumbnail">
                            <a href={movie.image_url}>
                                <img src={movie.image_url} alt={movie.title}/>
                            </a>
                        </div>
                        <div className="listItemInfo">
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                            <label><strong>Genre:</strong> {movie.category}</label>
                            <label><strong>Released:</strong> {movie.release_year}</label>
                            <label><strong>Run-time:</strong> {movie.running_time} mins</label>
                        </div>
                    </li>
                )}
            </ul>
        );
    }

    render() {
        return (
            <div className="listParent">
                {this.renderMovieItems()}
            </div>
        )
    };

}