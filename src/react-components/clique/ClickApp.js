import React, {Component} from 'react';

export default class ClickApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
    }

    DecreaseItem = () => {
        this.setState({clicks: this.state.clicks - 1});
    }

    ToggleClick = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        return (
            <div>
                <button onClick={this.IncrementItem}>Click to Increase by 1</button>
                <button onClick={this.DecreaseItem}>Click to Decrease by 1</button>
                <button onClick={this.ToggleClick}>
                    {this.state.show ? 'Hide Number' : 'Show Number'}
                </button>
                {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
            </div>
        )
    }

}
