import React, { useState } from 'react'
import { Formik, Form } from 'formik';

import RadioButton from '../../Component/RadioButton'
import PrimaryText from '../../Component/PrimaryText'
import PrimaryButtons from '../../Component/PrimaryButton'
import FormField from '../../Component/FormField'

import { jobDetailsPart2Schema, initialJobDetailsPart2Values } from '../../constant/jobDetailsPart2Constants';


const JobDetailsPart2 = ({ onNext }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [formData, setFormData] = useState(initialJobDetailsPart2Values);

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
        onNext(formData);
    };
    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", height: "564px", width: "577px", backgroundColor: "#FFFFFF" }}>
            <div style={{ margin: "32px", width: "513px", height: "500px"}}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "513px", height: "28px", marginBottom: "24px" }}>
                    <p style={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px", color: '#212121' }}>Create a job</p>
                    <p style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px" }}>Step 2</p>
                </div>

                <Formik
                    initialValues={initialJobDetailsPart2Values}
                    validationSchema={jobDetailsPart2Schema}
                    onSubmit={handleSubmit}
                >
                    <Form>

                        <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "24px" }}>
                            <FormField label="Experience" inputProps={{
                                type: "number", placeholder: "Minimum", name: "experienceMin",
                                value: formData.experienceMin,
                                onChange: handleInputChange,
                            }} includeSpan={false}/>
                            <FormField label="  " inputProps={{
                                type: "number", placeholder: "Maximum", name: "experienceMax",
                                value: formData.experienceMax,
                                onChange: handleInputChange,
                            }} includeSpan={false}/>
                        </div>


                        <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "24px" }}>
                            <FormField label="Salary" inputProps={{
                                type: "number", placeholder: "Minimum", name: "salaryMin",
                                value: formData.salaryMin,
                                onChange: handleInputChange,
                            }} />
                            <FormField label="" inputProps={{
                                type: "number", placeholder: "Maximum", name: "salaryMax",
                                value: formData.salaryMax,
                                onChange: handleInputChange,
                            }} />
                        </div>

                        <FormField label="Total employee" inputProps={{
                            type: "number", placeholder: "ex. 100", name: "totalEmployees",
                            value: formData.totalEmployees,
                            onChange: handleInputChange,
                        }} />

                        <div style={{ height: "60px", gap: "4px", display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: "96px" }}>
                            <PrimaryText customStyle={{ fontSize: "14px", lineHeight: "20px", fontWeight: "500", display: "flex", justifyContent: "flex-start" }} includeSpan={false} text="Apply type" />

                            <div style={{ height: "36px", borderRadius: "5px", gap: "24px", padding: "8px 0px 8px 0", display: "flex", flexDirection: "row" }}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <RadioButton checked={selectedOption === 1} onClick={() => handleOptionClick(1)} />
                                    <p style={{ marginLeft: "5px", marginRight: "10px", color: "#7A7A7A" }}>Quick apply</p>
                                    <RadioButton checked={selectedOption === 2} onClick={() => handleOptionClick(2)} />
                                    <p style={{ marginLeft: "5px",color:"#7A7A7A" }}>External apply</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <PrimaryButtons text="Save"/>
                        </div>
                        <button type="submit">Submit</button>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default JobDetailsPart2