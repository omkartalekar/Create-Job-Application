import React, { useState } from 'react'
import { toast } from 'react-toastify';
import JobDetailsPart1 from '../JobDetailsPart1';
import JobDetailsPart2 from '../JobDetailsPart2';
import GradientButton from '../../Component/GradientButton';
import { createJob } from '../../service/api';



const CreateForm = () => {

    const [showButton, setShowButton] = useState(true);
    const [isShowForm1, setIsShowForm1] = useState(false);
    const [isShowForm2, setIsShowForm2] = useState(false);
    const [formData, setFormData] = useState({
        jobTitle: "",
        companyName: "",
        industry: "",
        location: "",
        remoteType: "",
        experienceMin: 0,
        experienceMax: 0,
        salaryMin: 0,
        salaryMax: 0,
        totalEmployees: 0,
        applyType: "",
    });

    const handleButtonClick = () => {
        setShowButton(false);
        setIsShowForm1(true);
    };

    const handleForm1Submit = (dataFromPart1) => {
        setFormData({
            ...formData,
            ...dataFromPart1,
        });
        setIsShowForm1(false);
        setIsShowForm2(true);
    };

    console.log("formData", formData)

    const handleForm2Submit = async (dataFromPart2) => {
        setFormData({
            ...formData,
            ...dataFromPart2,
        });
        try {
            const response = await createJob(formData);
            console.log(response);
            toast.success('Job added successfully');
            setFormData({
                jobTitle: "",
                companyName: "",
                industry: "",
                location: "",
                remoteType: "",
                experienceMin: 0,
                experienceMax: 0,
                salaryMin: 0,
                salaryMax: 0,
                totalEmployees: 0,
                applyType: "",
            });
        } catch (error) {
            console.error(error);
            toast.error('Error while adding the job');
        }
    };

    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: "#FFFFFF" }}>

            {showButton && (<GradientButton
                text="Click Me"
                onClick={handleButtonClick}
                gradientColors={["#1a5276", "#733d90"]}
            />)}

            {isShowForm1 && (
                <JobDetailsPart1 onNext={handleForm1Submit} />
            )}
            {isShowForm2 && (
                <JobDetailsPart2 onNext={handleForm2Submit} />
            )}


        </div >


    )
}

export default CreateForm;