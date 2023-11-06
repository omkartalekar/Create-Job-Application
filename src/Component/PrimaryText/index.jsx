import React from 'react'

const PrimaryText = ({ customStyle, text, includeSpan }) => {
    return (
        <div >
            <p style={customStyle}>{text}{includeSpan ? (<span style={{ color: "#D86161" }}>*</span>):(<span style={{color:"#FFFFFF",backgroundClip:"#FFFFFF"}}>* </span>)}
            </p>
        </div>
    )
}

export default PrimaryText;