import React, { useState } from 'react'
import { toast } from 'react-toastify';
import JobDetailsPart1 from '../JobDetailsPart1';
import JobDetailsPart2 from '../JobDetailsPart2';
import GradientButton from '../../Component/GradientButton';
import { createJob } from '../../service/api';
import { initialFormDetailsValues } from '../../constant/formDetailsConstants';
import JobListings from '../JobListings';

const CreateForm = () => {

    const [showButton, setShowButton] = useState(true);
    const [isShowForm1, setIsShowForm1] = useState(false);
    const [isShowForm2, setIsShowForm2] = useState(false);
    const [jobListingsVisible, setJobListingsVisible] = useState(false);
    const [formData, setFormData] = useState(initialFormDetailsValues);

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
    const handleForm2Submit = async (dataFromPart2) => {
        const updatedFormData = {
            ...formData,
            ...dataFromPart2,
        };
        try {
            const response = await createJob(updatedFormData);
            toast.success('Job added successfully');
            setFormData(initialFormDetailsValues);
            setIsShowForm2(false);
            setJobListingsVisible(true);
        } catch (error) {
            console.error(error);
            toast.error('Error while adding the job');
        }
    };

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",margin:0 }}>

            {showButton && (
                <div style={{
                    alignSelf: "flex-start", marginBottom: "450px" }}>
                    <GradientButton
                        text="Click Me"
                        onClick={handleButtonClick}
                        gradientColors={["#1a5276", "#733d90"]}
                    />
                    </div>)}

            {isShowForm1 && (
                <JobDetailsPart1 onNext={handleForm1Submit} />
            )}
            {isShowForm2 && (
                <JobDetailsPart2 onNext={handleForm2Submit} />
            )}

            {jobListingsVisible && <JobListings />}

        </div >


    )
}

export default CreateForm;