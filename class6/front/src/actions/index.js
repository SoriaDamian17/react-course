import streams from '../api/streams';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS } from './types';

export const createStream = fromValues => async dispatch => {
    const response = await streams.post('/streams', fromValues);
    dispatch({ type: CREATE_STREAM, payload: response.data });
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const signIn =  userId => {
    return { type: SIGN_IN, payload: userId }
};

export const signOut = () => {
    return { type: SIGN_OUT }
}

