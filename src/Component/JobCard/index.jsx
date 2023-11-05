import React from 'react'
import companyLogo from "../../images/companyLogo.png"
import Typography from '../Typography'

const JobCard = ({job}) => {
    return (
        <div style={{ width: "830px", height: "320px", backgroundColor: "#FFFFFF", border: "1px solid #E6E6E6"}}>

            <div style={{ width: "782px", height: "288px", justifyContent: "space-between" }}>

                <div style={{ width: "357px", height: "288px", gap: "8px", display: "flex", flexDirection: "row" }}>
                    <img src={companyLogo} alt="logo" height={"48px"} width={"48px"} />
                    <div style={{ width: "301px", height: "288px", gap: "20px", justifyContent: "flex-start" }}>
                        <Typography text={job?.jobTitle} customStyle={{
                            display: "flex", justifyContent: "flex-start",
                            width: "172px", height: "32px", font: "Poppins", fontWeight: "400", fontSize: "24px", lineHeight: "32px"
                        }} />
                        <Typography text={job?.companyName} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", display: "flex", justifyContent: "flex-start",
                        }} />
                        <Typography text={job?.location} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", marginBottom: "24px", color: "#646464", display: "flex", justifyContent: "flex-start",
                        }} />
                        <Typography text={job?.remoteType} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", display: "flex", justifyContent: "flex-start",
                        }} />
                        <Typography text={job?.experienceMin} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", display: "flex", justifyContent: "flex-start",
                        }} />
                        <Typography text={job?.salaryMin} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", display: "flex", justifyContent: "flex-start",
                        }} />
                        <Typography text={job?.totalEmployees} customStyle={{
                            font: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", display: "flex", justifyContent: "flex-start",
                        }} />
                    </div>

                </div>
                <div style={{ width: "782px", height: "288px", justifyContent: "space-between" }}>

                </div>

            </div>

        </div>

    )
}

export default JobCard