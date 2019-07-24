import { combineReducers } from 'redux';

const initState = {
    songs: [
        { title: 'song1', duration: '3.40'},
        { title: 'song2', duration: '3.45'},
        { title: 'song3', duration: '3.50'},
    ],
    selectedSong: { title: 'song3', duration: '3.50'},
}

const songReducers = (state = initState.songs, action) => {
    return state;
}

const selectSongReducer = (state = initState.selectedSong, action) => {
    switch (action.type) {
        case 'SONG_SELECTED':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    songs: songReducers,
    selectedSong: selectSongReducer
});
