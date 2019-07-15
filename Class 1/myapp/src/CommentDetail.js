import React, { Component } from 'react';

class CommentDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={this.props.avatar} alt="" />
                </a>
                <div className="content">
                <a href="/" className="author">{this.props.author}</a>
                <div className="metadata">
                    <span className="date">{this.props.date}</span>
                </div>
                <div className="text">
                    How artistic!
                </div>
                <div className="actions">
                    <a href="/" className="reply">Reply</a>
                </div>
                </div>
            </div>
        )
    }
}

export default CommentDetail;