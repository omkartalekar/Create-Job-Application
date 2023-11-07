import React, { useState } from 'react'

import RadioButton from '../../Component/RadioButton'
import PrimaryText from '../../Component/PrimaryText'
import PrimaryButtons from '../../Component/PrimaryButton'
import FormField from '../../Component/FormField'

import { initialJobDetailsPart2Values } from '../../constant/jobDetailsPart2Constants';
import { validateForm2 } from '../../utils/formValidations'


const JobDetailsPart2 = ({ onNext }) => {
    const [selectedOption, setSelectedOption] = useState(1);
    const [formData, setFormData] = useState(initialJobDetailsPart2Values);
    const [errors, setErrors] = useState({});


    const handleOptionClick = (option) => {
        let applyType = option === 1 ? "Quick apply" : "External apply";
        setFormData({
            ...formData,
            applyType
        });
        setSelectedOption(option);
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const validationErrors = validateForm2(formData); // Use the validateForm function

        if (Object.keys(validationErrors).length === 0) {
            onNext(formData);
        } else {
            setErrors(validationErrors);
        }
    };
    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center",height:"100vh", width: "577px", backgroundColor: "#FFFFFF", border: "1px solid #E6E6E6",margin:0 }}>
            <div style={{ margin: "0px", width: "513px" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "513px", height: "28px", marginBottom: "44px", gap: "8px" }}>
                    <p style={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px", color: '#212121' }}>Create a job</p>
                    <p style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px" }}>Step 2</p>
                </div>

                <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "24px" }}>
                    <FormField label="Experience" inputProps={{
                        type: "number", placeholder: "Minimum", name: "experienceMin",
                        value: formData.experienceMin,
                        onChange: handleInputChange,
                    }} error={errors.experienceMin} includeSpan={false} />
                    <FormField label="  " inputProps={{
                        type: "number", placeholder: "Maximum", name: "experienceMax",
                        value: formData.experienceMax,
                        onChange: handleInputChange,
                    }} error={errors.experienceMax} includeSpan={false} />
                </div>


                <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", marginBottom: "24px" }}>
                    <FormField label="Salary" inputProps={{
                        type: "number", placeholder: "Minimum", name: "salaryMin",
                        value: formData.salaryMin,
                        onChange: handleInputChange,
                    }} error={errors.salaryMin} />
                    <FormField label="" inputProps={{
                        type: "number", placeholder: "Maximum", name: "salaryMax",
                        value: formData.salaryMax,
                        onChange: handleInputChange,
                    }} error={errors.salaryMax} />
                </div>

                <FormField label="Total employee" inputProps={{
                    type: "number", placeholder: "ex. 100", name: "totalEmployees",
                    value: formData.totalEmployees,
                    onChange: handleInputChange,
                }} error={errors.totalEmployees} />

                <div style={{ height: "60px", gap: "4px", display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: "96px" }}>
                    <PrimaryText customStyle={{ fontSize: "14px", lineHeight: "20px", fontWeight: "500", display: "flex", justifyContent: "flex-start" }} includeSpan={false} text="Apply type" />

                    <div style={{ height: "36px", borderRadius: "5px", gap: "24px", padding: "8px 0px 8px 0", display: "flex", flexDirection: "row" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <RadioButton checked={selectedOption === 1} onClick={() => handleOptionClick(1)} />
                            <p style={{ marginLeft: "5px", marginRight: "10px", color: "#7A7A7A" }}>Quick apply</p>
                            <RadioButton checked={selectedOption === 2} onClick={() => handleOptionClick(2)} />
                            <p style={{ marginLeft: "5px", color: "#7A7A7A" }}>External apply</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <PrimaryButtons text="Save" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default JobDetailsPart2