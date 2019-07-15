import React, { Component } from 'react';

class ApprovalCard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return (
            <div class="ui card">
                <div class="content">{this.props.children}</div>
                <div class="extra content">
                    <div class="ui two buttons">
                    <div class="ui basic green button">Aprobar</div>
                    <div class="ui basic red button">Rechazar</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ApprovalCard;