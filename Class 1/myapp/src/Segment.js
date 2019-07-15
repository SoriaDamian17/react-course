import React, { Component } from 'react';

class Segment extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="ui placeholder segment">
                {this.props.children}
            </div>
        )
    }

}

export default Segment;
