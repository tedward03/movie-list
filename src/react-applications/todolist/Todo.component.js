import React, {Component} from 'react';
import List from './List'
import {addItem, removeItem} from "./Todo.actions";
import {connect} from 'react-redux';

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
    }

    onChange = (event) => {
        this.setState({term: event.target.value},
            () => {
            // function for set state after it's finished
            console.log("NOT BLANK", this.state.term);
        });
    };

    render() {
        const items  = this.props.items || [];
        console.log('ITEMS',items);
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                <List items={this.props.items} removeItem={this.props.removeItem}/>
            </div>
        );
    };

    onSubmit = (event) => {
        event.preventDefault();
        // call in actions
        console.log("TERM", this.state.term)
        this.props.addItem(this.state.term);

        // set blank
        this.setState({
                term: '',
            },
            () => {
                // function for set state after it's finished
                console.log("BLANK", this.state.term);
            });

    }
}

const mapStateToProps = state => ({ items: state.items });

const mapDispatchToProps = {
    addItem: addItem,
    removeItem: removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


