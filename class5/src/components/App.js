import React from 'react';
import PostList from './post/list';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <PostList />
            </div>
        </div>
    );
}

export default App;