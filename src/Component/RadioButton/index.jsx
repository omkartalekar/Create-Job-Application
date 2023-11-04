import React from 'react'

const RadioButton = ({ checked, label, onClick }) => {
    const circleStyle = {
        width: '20px',
        height: '20px',
        border: '2px solid #E6E6E6',
        borderRadius: '20px',
        cursor: 'pointer',
        marginRight: '5px',
    };

    const selectedCircleStyle = {
        ...circleStyle,
        background: 'blue', 
        borderColor: 'black',
    };
    return (
        <div style={checked ? selectedCircleStyle : circleStyle} onClick={onClick}>
        </div>
    )
}

export default RadioButton