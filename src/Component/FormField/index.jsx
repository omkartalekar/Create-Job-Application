import React from 'react'
import PrimaryText from '../PrimaryText';

const FormField = ({ label, inputProps, error,includeSpan }) => {
    return (
        <div style={{ height: "60px", display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: "24px" ,gap:"4px"}}>
            <PrimaryText customStyle={{ fontSize: "14px", lineHeight: "20px", fontWeight: "500", display: "flex", justifyContent: "flex-start" }} includeSpan={includeSpan} text={label} />
            <div style={{ height: "36px", borderRadius: "5px", border: error ? "1px solid red" : "1px solid #E6E6E6", padding: "8px 12px 8px 12px",margin:0 }}>
                <input style={{ display: "flex", justifyContent: "flex-start",border:"none",outline:"none" }} {...inputProps} />
            </div>
            {error && <p style={{ display:"flex",justifyContent:'flex-start', color: 'red', fontSize: '10px',margin:"-3px 0px 0px 10px" }}>{error}</p>}
        </div>
    )
}

export default FormField;