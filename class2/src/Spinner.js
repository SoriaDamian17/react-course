import React, { Component } from 'react';

class Spinner extends Component {

    render() { 
        return (
            <div className="ui active dimmer">
                <div className="ui big tet loader">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Spinner;