import React from 'react'
import FormField from '../../Component/FormField'
import PrimaryButtons from '../../Component/PrimaryButtons'

const JobDetailsPart1 = () => {
  return (
      <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", height: "564px", width: "577px", border: "1px solid #E6E6E6", backgroundColor: "#FFFFFF" }}>
          <div style={{ margin: "32px", width: "513px", height: "500px" }}>

              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "513px", height: "28px", marginBottom: "24px" }}>
                  <p style={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px", color: '#212121' }}>Create a job</p>
                  <p style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px" }}>Step 1</p>
              </div>

              <FormField label="Job title" inputProps={{ type: "text", placeholder: "ex. UX UI Designer" }} />
              <FormField label="Company name" inputProps={{ type: "text", placeholder: "ex. Google" }} />
              <FormField label="Industry" inputProps={{ type: "text", placeholder: "ex. Information Technology " }} />

              <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "96px" }}>
                  <FormField label="Location" inputProps={{ type: "text", placeholder: "ex. Chennai" }} />
                  <FormField label="Remote type" inputProps={{ type: "text", placeholder: "ex. In-office" }} />
              </div>
              <div>

              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <PrimaryButtons text="Next" />
              </div>



          </div>
      </div>
  )
}

export default JobDetailsPart1