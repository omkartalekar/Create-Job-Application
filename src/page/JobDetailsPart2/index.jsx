import React, { useState } from 'react'
import RadioButton from '../../Component/RadioButton'
import PrimaryText from '../../Component/PrimaryText'
import PrimaryButtons from '../../Component/PrimaryButtons'
import FormField from '../../Component/FormField'

const JobDetailsPart2 = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", height: "564px", width: "577px", border: "1px solid #E6E6E6", backgroundColor: "#FFFFFF" }}>
            <div style={{ margin: "32px", width: "513px", height: "500px", border: "1px solid #E6E6E6" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "513px", height: "28px", marginBottom: "24px" }}>
                    <p style={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px", color: '#212121' }}>Create a job</p>
                    <p style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px" }}>Step 2</p>
                </div>

                <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "24px" }}>
                    <FormField label="Experience" inputProps={{ type: "text", placeholder: "Minimum" }} />
                    <FormField label="" inputProps={{ type: "text", placeholder: "Maximum" }} />
                </div>


                <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "24px" }}>
                    <FormField label="Salary" inputProps={{ type: "text", placeholder: "Minimum" }} />
                    <FormField label="" inputProps={{ type: "text", placeholder: "Maximum" }} />
                </div>

                <FormField label="Total employee" inputProps={{ type: "text", placeholder: "ex. 100" }} />

                <div style={{ height: "60px", gap: "4px", display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: "96px" }}>
                    <PrimaryText customStyle={{ fontSize: "14px", lineHeight: "20px", fontWeight: "500", display: "flex", justifyContent: "flex-start" }} includeSpan={false} text="Apply type" />

                    <div style={{ height: "36px", borderRadius: "5px", border: "1px solid #E6E6E6", gap: "24px", width: "246px", padding: "8px 0px 8px 0", display: "flex", flexDirection: "row" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <RadioButton checked={selectedOption === 1} onClick={() => handleOptionClick(1)} />
                            <p>Quick apply</p>
                            <RadioButton checked={selectedOption === 2} onClick={() => handleOptionClick(2)} />
                            <p>External apply</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <PrimaryButtons text="Save" />
                </div>
            </div>
        </div>
    )
}

export default JobDetailsPart2