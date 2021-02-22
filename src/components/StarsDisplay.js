import React from 'react';
import './StartMatch.css';

export const StarsDisplay = props => {
    return (
        <>
            <div key={props.id} className="star"></div>
        </>
    )
}

export default StarsDisplay;