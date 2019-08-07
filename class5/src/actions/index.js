import jsonplaceholder from '../api/jsonplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const usersSet = new Set();
    getState().posts.forEach(post => usersSet.add(post.userId));
    usersSet.forEach(userId => dispatch(fetchUser(userId)))
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = userid => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${userid}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
}