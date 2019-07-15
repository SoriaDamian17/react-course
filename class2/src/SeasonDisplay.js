import React, { Component } from 'react';

class SeasonDisplay extends Component {

    getSeason(lat, month) {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'Verano' : 'Invierno';
        } else {
            return lat > 0 ? 'Invierno' : 'Verano';
        }
    }

    render() {
        const season = this.getSeason(this.props.latitud, new Date().getMonth());
        return <div>{season}</div>;
    }
}

export default SeasonDisplay;