import React from 'react';

const PostListLess = (props) => {

    return (
        <div className="ui relaxes divided list">{props.renderList}</div>
    );
}

export default PostListLess;