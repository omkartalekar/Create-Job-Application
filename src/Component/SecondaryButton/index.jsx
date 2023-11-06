import React from 'react'

const SecondaryButton = ({ text, onClick }) => {
    return (
        <button
            style={{ color: '#1597E4', border: "1px solid #1597E4", backgroundColor: "#FFFFFF", height: "40px", borderRadius: "6px", padding: "8px 16px 8px 16px", cursor: "pointer", }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default SecondaryButton