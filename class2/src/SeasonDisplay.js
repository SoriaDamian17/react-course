import React, { Component } from 'react';
import './SeasonDisplay.css';
class SeasonDisplay extends Component {

    seasonConfig = {
        invierno: {
            icon: 'snowflake',
            text: 'Hace frio'
        },
        verano: {
            icon: 'sun',
            text: 'Hace calor'
        }
    }
    getSeason(lat, month) {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'verano' : 'invierno';
        } else {
            return lat > 0 ? 'invierno' : 'Verano';
        }
    }

    render() {
        const seasson = this.getSeason(this.props.latitud, new Date().getMonth());
        const {icon, text} = this.seasonConfig[seasson];

        return (
            <div className={`season-display ${seasson}`}>
                <i className={`icon-left ${icon} icon`}></i>
                <h1>
                    {text}
                </h1>
                <i className={`icon-right ${icon} icon`}></i>
            </div>
        );
    }
}

export default SeasonDisplay;