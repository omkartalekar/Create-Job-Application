import React, { useState } from 'react'
import { Formik, Form } from 'formik';

import FormField from '../../Component/FormField'
import PrimaryButtons from '../../Component/PrimaryButtons'
import { jobDetailsPart1Schema, initialJobDetailsPart1Values } from '../../constant/jobDetailsPart1Constants';


const JobDetailsPart1 = ({ onNext }) => {
    const [formData, setFormData] = useState(initialJobDetailsPart1Values)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log(formData);
        onNext(formData);
    }
    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", height: "564px", width: "577px", border: "1px solid #E6E6E6", backgroundColor: "#FFFFFF" }}>
            <div style={{ margin: "32px", width: "513px", height: "500px" }}>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "513px", height: "28px", marginBottom: "24px" }}>
                    <p style={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px", color: '#212121' }}>Create a job</p>
                    <p style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px" }}>Step 1</p>
                </div>

                <Formik
                    initialValues={initialJobDetailsPart1Values}
                    validationSchema={jobDetailsPart1Schema}
                    onSubmit={handleSubmit}
                >
                    <Form>

                        <FormField label="Job title" inputProps={{
                            type: "text", placeholder: "ex. UX UI Designer", name: "jobTitle",
                            value: formData.jobTitle,
                            onChange: handleInputChange,
                        }} />
                        <FormField label="Company name" inputProps={{
                            type: "text", placeholder: "ex. Google", name: "companyName",
                            value: formData.companyName,
                            onChange: handleInputChange,
                        }} />
                        <FormField label="Industry" inputProps={{
                            type: "text", placeholder: "ex. Information Technology", name: "industry",
                            value: formData.industry,
                            onChange: handleInputChange,
                        }} />

                        <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "96px" }}>
                            <FormField label="Location" inputProps={{
                                type: "text", placeholder: "ex. Chennai", name: "location",
                                value: formData.location,
                                onChange: handleInputChange,
                            }} />
                            <FormField label="Remote type" inputProps={{
                                type: "text", placeholder: "ex. In-office", name: "remoteType",
                                value: formData.remoteType,
                                onChange: handleInputChange,
                            }} />
                        </div>
                        <div>

                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", cursor: "pointer" }}>
                            <PrimaryButtons text="Next" onClick={handleSubmit} />
                        </div>
                    </Form>
                </Formik>


            </div>
        </div>
    )
}

export default JobDetailsPart1