import React, { useState } from 'react'
import FormField from '../../Component/FormField'
import PrimaryButtons from '../../Component/PrimaryButton'
import { initialJobDetailsPart1Values } from '../../constant/jobDetailsPart1Constants';
import { validateForm1 } from '../../utils/formValidations';


const JobDetailsPart1 = ({ onNext }) => {
    const [formData, setFormData] = useState(initialJobDetailsPart1Values)
    const [errors, setErrors] = useState({});


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const validationErrors = validateForm1(formData); // Use the validateForm function

        if (Object.keys(validationErrors).length === 0) {
            onNext(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", width: "577px",height:"100vh", border: "1px solid #E6E6E6", backgroundColor: "#FFFFFF" }}>
            <div style={{ margin: "0px", width: "513px" }}>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "513px", height: "28px",marginBottom: "44px", gap: "8px" }}>
                    <p style={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px", color: '#212121' }}>Create a job</p>
                    <p style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px" }}>Step 1</p>
                </div>

                <FormField label="Job title" inputProps={{
                    type: "text", placeholder: "ex. UX UI Designer", name: "jobTitle",
                    value: formData.jobTitle,
                    onChange: handleInputChange,
                }} error={errors.jobTitle} includeSpan={true} />
                <FormField label="Company name" inputProps={{
                    type: "text", placeholder: "ex. Google", name: "companyName",
                    value: formData.companyName,
                    onChange: handleInputChange,
                }} error={errors.companyName} includeSpan={true} />
                <FormField label="Industry" inputProps={{
                    type: "text", placeholder: "ex. Information Technology", name: "industry",
                    value: formData.industry,
                    onChange: handleInputChange,
                }} error={errors.industry} includeSpan={true} />

                <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "96px" }}>
                    <FormField label="Location" inputProps={{
                        type: "text", placeholder: "ex. Chennai", name: "location",
                        value: formData.location,
                        onChange: handleInputChange,
                    }} error={errors.location} />
                    <FormField label="Remote type" inputProps={{
                        type: "text", placeholder: "ex. In-office", name: "remoteType",
                        value: formData.remoteType,
                        onChange: handleInputChange,
                    }} error={errors.remoteType} />
                </div>
                <div>

                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", cursor: "pointer" }}>
                    <PrimaryButtons text="Next" onClick={handleSubmit} />
                </div>


            </div>
        </div>
    )
}

export default JobDetailsPart1