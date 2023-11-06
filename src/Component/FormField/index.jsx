import React from 'react'
import PrimaryText from '../PrimaryText';

const FormField = ({ label, inputProps, includeSpan }) => {
    return (
        <div style={{ height: "60px", gap: "4px", display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: "24px" }}>
            <PrimaryText customStyle={{ fontSize: "14px", lineHeight: "20px", fontWeight: "500", display: "flex", justifyContent: "flex-start" }} includeSpan={includeSpan} text={label} />
            <div style={{ height: "36px", borderRadius: "5px", border: "1px solid #E6E6E6", padding: "8px 12px 8px 12px", gap: "10px" }}>
                <input style={{ display: "flex", justifyContent: "flex-start",border:"none",outline:"none" }} {...inputProps} />
            </div>
        </div>
    )
}

export default FormField;