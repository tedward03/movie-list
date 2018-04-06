import React, {Component} from 'react';
import '../MovieList.css';


export default class MovieSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            newMovie: {
                title: '',
                category: '',
                release_year: '',
                running_time: '',
                description: '',
                image_url: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    renderSubmitNewMovieForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="title" type="text" value={this.state.newMovie.title} onChange={this.handleChange}
                       placeholder="title"/>
                <input name="category" type="text" value={this.state.newMovie.category} onChange={this.handleChange}
                       placeholder="category"/>
                <button>Submit</button>
            </form>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.newMovie)
        // const
        //     { newMovie } = this.state,
        //     name = this.refs.title.value,
        //     email = this.refs.description.value,
        // this.setState({
        //     contacts:  {
        //         name,
        //         description:,
        //         phone
        //     }
        // }, () => {
        //     this.refs.title.value = '';
        //     this.refs.description.value = '';
        // });
    }


    handleChange(event) {
        console.log('name', event.target.name);
        console.log('value', event.target.value);

        this.setState({newMovie:
            {...this.state.newMovie,[event.target.name]: event.target.value}
        });
        console.log(this.state.newMovie);
    }

    render() {
        return (
            <div>
                {this.renderSubmitNewMovieForm()}
            </div>

        )
    };

}
