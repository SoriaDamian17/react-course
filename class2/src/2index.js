import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {

    state = {
        latitud: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitud: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    get latitud() {
        return this.state.latitud;
    }

    getContent() {
        if (this.state.latitud === null
        & this.state.errorMessage === '') {
            return <Spinner text="Loading..."></Spinner>;
        } else {
            if (this.state.latitud != null) {
                return <SeasonDisplay latitud={this.latitud}></SeasonDisplay>;
            } else {
                return <div>{this.state.errorMessage}</div>;
            }
        }
    }

    render() {
        return <div>{this.getContent()}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
