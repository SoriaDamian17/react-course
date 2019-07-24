import React from 'react';
import { connect } from 'react-redux';


const SongDetail = props => {
    return (
        <div>
            <h3>Song Detail:</h3>
            <p>
                Title: { props.selectedSong.title }
                <br></br>
                Duration: { props.selectedSong.duration }
            </p>
        </div>
    );
}

const mapStateToProps = state => {
    return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);