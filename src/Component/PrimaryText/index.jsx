import React from 'react'

const PrimaryText = ({ customStyle, text, includeSpan }) => {
    const updatedCustomStyle = {
        ...customStyle, 
        margin: 0,
    };
    return (
        <div style={{marginBottom:"4px"}}>
            <p style={updatedCustomStyle}>{text}{includeSpan ? (<span style={{ color: "#D86161" }}>*</span>):(<span style={{color:"#FFFFFF",backgroundClip:"#FFFFFF"}}>* </span>)}
            </p>
        </div>
    )
}

export default PrimaryText;