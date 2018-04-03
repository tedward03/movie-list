import React, {Component} from 'react';
import List from './List'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({term: event.target.value})
    }

    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                <List items={this.state.items}/>
            </div>
        );
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
        console.log(this.state.term);
    }
}