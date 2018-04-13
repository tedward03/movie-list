import React, {Component} from 'react';

export default class SimpleApiApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            img: ''
        };
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    };




    render() {
        return (
            <div>
                <input value={this.state.term} onChange={this.onChange}/>
            </div>
        )
    }

}