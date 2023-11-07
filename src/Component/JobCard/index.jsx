import React from 'react'
import companyLogo from "../../images/companyLogo.png"
import Typography from '../Typography'
import { employeeRange } from '../../utils/employeeRange';
import { renderApplyButton } from '../../utils/applyButton';
import EditDeleteButton from '../EditDeleteButton';

const JobCard = ({ job }) => {
    const employeeCount = employeeRange(job?.totalEmployees);
    return (
        <div style={{ width: "830px", height: "320px", backgroundColor: "#FFFFFF", border: "1px solid #E6E6E6", marginBottom: "10px",gap:"10px",borderRadius:"10px",padding:"16px 24px 16px 24px",display:"flex",flexDirection:"row"}}>
            <div style={{ width: "782px", height: "288px",display:"flex",flexDirection:"row"}}>

                <div style={{ gap: "8px", display: "flex", flexDirection: "row" }}>
                    <img src={companyLogo} alt="logo" height={"48px"} width={"48px"} />
                    <div style={{ margin: 0 }}>
                        <Typography text={job?.jobTitle} customStyle={{
                            display: "flex", justifyContent: "flex-start", margin: 0,
                            font: "Poppins", fontWeight: "400", fontSize: "24px", lineHeight: "32px"
                        }} />
                        <Typography text={`${job?.companyName} - ${job?.industry}`} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", display: "flex", justifyContent: "flex-start",
                        }} />
                        <Typography text={`${job?.location} (${" " + job?.remoteType + " "})`} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", display: "flex", justifyContent: "flex-start",
                        }} />
                        <Typography text={`Experience (${job?.experienceMin} - ${job?.experienceMax} years)`} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", display: "flex", justifyContent: "flex-start",
                        }} />
                        <Typography text={`INR (₹) ${job?.salaryMin} - ${job?.salaryMax} / Month`} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", display: "flex", justifyContent: "flex-start",
                        }} />
                        <Typography text={`${employeeCount} employees`} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", display: "flex", justifyContent: "flex-start",
                        }} />
                        {renderApplyButton(job?.applyType)}
                    </div>
                </div>

            </div>
            <EditDeleteButton job={job} style={{ position: "absolute", top: "8px", right: "8px" }} />
        </div>
    )
}

export default JobCard