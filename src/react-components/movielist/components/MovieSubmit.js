import React, {Component} from 'react';
import '../MovieList.css';


export default class MovieSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMovie: {
                'title': '',
                'category': '',
                'release_year': '',
                'running_time': '',
                'description': '',
                'image_url': ''
            }
        }
    }

    renderSubmitNewMovieForm = () => {
        console.log("render Submit Form")
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="title" placeholder="title"/>
                <input type="text" ref="description" placeholder=""/>
                <button>Submit</button>
            </form>
        )
    }

    handleSubmit(e) {
        // e.preventDefault();
        // const
        //     { newMovie } = this.state,
        //     name = this.refs.title.value,
        //     email = this.refs.description.value,
        //     phone = this.refs.phone.value;
        // this.setState({
        //     contacts: [...contacts, {
        //         name,
        //         email,
        //         phone
        //     }]
        // }, () => {
        //     this.refs.name.value = '';
        //     this.refs.email.value = '';
        //     this.refs.phone.value = '';
        // });
    }


    onChange(event) {
        console.log("CHANGE");
        console.log(event.target.value);

    }

    render() {
        return (
            <div>
                {this.renderSubmitNewMovieForm()}
            </div>

        )
    };

}
