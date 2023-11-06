import React from 'react'

const PrimaryButton = ({ text, onClick }) => {
    return (
        <button
            style={{ color: '#FFFFFF', backgroundColor: "#1597E4", height: "40px", borderRadius: "6px", padding: "8px 16px 8px 16px", border: "none", cursor: "pointer"}}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default PrimaryButton;