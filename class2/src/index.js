import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {

    state = {
        time: new Date().toLocaleTimeString()
    };
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            });
        }, 1000)
    }

    getTime() {
        return this.state.time;
    }

    render() {
        return (
            <div className="time">
                The time is: {this.getTime()}
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector("#root"));