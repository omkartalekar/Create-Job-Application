import React from 'react'

const Typography = ({ text, customStyle }) => {
    return (
        <p style={customStyle}>
            {text}
        </p>
    )
}

export default Typography