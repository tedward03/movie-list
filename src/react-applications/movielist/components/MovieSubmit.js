import React, {Component} from 'react';
import '../MovieList.css';


export default class MovieSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            newMovie: {
                title: '',
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    renderSubmitNewMovieForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="title" type="text" value={this.state.newMovie.title} onChange={this.handleChange}
                       placeholder="title"/>
                <button>Submit</button>
            </form>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleNewMovie(this.state.newMovie);
    }


    handleChange(event) {
        this.setState({
            newMovie:
                {...this.state.newMovie, [event.target.name]: event.target.value}
        });
    }

    render() {
        return (
            <div>
                {this.renderSubmitNewMovieForm()}
            </div>

        )
    };

}
