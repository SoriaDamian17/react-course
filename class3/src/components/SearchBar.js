import React from 'react';

class SearchBar extends React.Component {

    state = {
        text: ''
    };

    onInputChange = (event)  => {
        console.log(event.target.value);
        this.setState({text: event.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
        console.log(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <div className="ui segment" onSubmit={this.onFormSubmit}>
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                        value={this.state.text} 
                        onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;