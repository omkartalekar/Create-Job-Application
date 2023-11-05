import React from 'react'

const GradientButton = ({ text,onClick, gradientColors }) => {
    return (
        <div style={{
            width: "15%",
            background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
            color: 'white',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '8px',
            border: '1px solid black',
            margin:"20px"
        }}
            onClick={onClick}
        >
            {text}
        </div>
    )
}

export default GradientButton