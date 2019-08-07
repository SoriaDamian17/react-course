import React from 'react';

export const UserHeaderLess = (props) => {
    return (
        <div className="header">
            {props.user.name}
        </div>
    );
};