import React, { useState } from 'react';
import Modal from 'react-modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { removeJobById, updateJobById } from '../../service/api';
import { useDispatch } from 'react-redux';
import { getAllJobs } from '../../redux/actions/jobActions';
import FormField from '../FormField';
import PrimaryText from '../PrimaryText';
import RadioButton from '../RadioButton';
import PrimaryButton from '../PrimaryButton';
import { toast } from 'react-toastify';

// Modal.setAppElement('#root');

const EditDeleteButton = ({ job }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    jobTitle: job.jobTitle,
    companyName: job.companyName,
    industry: job.industry,
    location: job.location,
    remoteType: job.remoteType,
    experienceMin: job.experienceMin,
    experienceMax: job.experienceMax,
    salaryMin: job.salaryMin,
    salaryMax: job.salaryMax,
    totalEmployees: job.totalEmployees,
    applyType: job.applyType
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOptionClick = (option) => {
    let applyType = option === 1 ? "Quick apply" : "External apply";
    setFormData({
      ...formData,
      applyType
    });
    setSelectedOption(option);
  };

  const openEditModal = () => {
    setSelectedOption(job.applyType === "Quick apply" ? 1 : 2);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const deleteJob = async () => {
    try {
      await removeJobById(job.id);
      dispatch(getAllJobs());
      toast.success('Job deleted successfully');
    } catch (error) {
      toast.error('Error while deleting job');
    }
  };

  const UpdateJob = async () => {
    try {
      const response = await updateJobById(job.id,formData);
      toast.success('Job updated successfully');
      setEditModalOpen(false);
      dispatch(getAllJobs());
    } catch (error) {
      toast.error('Error while adding the job');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        onClick={openEditModal}
        style={{
          display: 'flex',
          width: '80px',
          height: '40px',
          borderRadius: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid blue',
          padding: '0px 8px',
          marginRight: '20px',
          cursor: 'pointer',
        }}
      >
        <EditIcon color="black" fontSize="medium" />
        <p style={{ fontSize: '14px', fontWeight: '700', marginLeft: '5px' }}>Edit</p>
      </div>

      <div
        onClick={deleteJob}
        style={{
          display: 'flex',
          width: '80px',
          height: '40px',
          backgroundColor: 'red',
          borderRadius: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
          padding: '0px 8px',
          cursor: 'pointer',
        }}
      >
        <DeleteIcon color="black" fontSize="medium" />
        <p style={{ fontSize: '12px', fontWeight: '700' }}>Delete</p>
      </div>

      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Job Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(69, 187, 215, 9)',
          },
          content: {
            width: '60%',
            margin: 'auto',
          },
        }}
      >
        <div style={{ width: "300px" }}>
          <FormField label="Job title" inputProps={{
            type: "text", placeholder: "ex. UX UI Designer", name: "jobTitle",
            value: formData.jobTitle,
            onChange: handleInputChange,
          }} includeSpan={false} />

          <FormField label="Company name" inputProps={{
            type: "text", placeholder: "ex. Google", name: "companyName",
            value: formData.companyName,
            onChange: handleInputChange,
          }} includeSpan={true} />
          <FormField label="Industry" inputProps={{
            type: "text", placeholder: "ex. Information Technology", name: "industry",
            value: formData.industry,
            onChange: handleInputChange,
          }} includeSpan={true} />
        </div>

        <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "26px" }}>
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

        <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "24px" }}>
          <FormField label="Experience" inputProps={{
            type: "number", placeholder: "Minimum", name: "experienceMin",
            value: formData.experienceMin,
            onChange: handleInputChange,
          }} includeSpan={false} />
          <FormField label="  " inputProps={{
            type: "number", placeholder: "Maximum", name: "experienceMax",
            value: formData.experienceMax,
            onChange: handleInputChange,
          }} includeSpan={false} />
        </div>

        <div style={{ height: "60px", width: "513px", display: "flex", flexDirection: "row", gap: "24px", marginBottom: "24px" }}>
          <FormField label="Minimum Salary" inputProps={{
            type: "number", placeholder: "Minimum", name: "salaryMin",
            value: formData.salaryMin,
            onChange: handleInputChange,
          }} />
          <FormField label="Maximum Salary" inputProps={{
            type: "number", placeholder: "Maximum", name: "salaryMax",
            value: formData.salaryMax,
            onChange: handleInputChange,
          }} />
        </div>
        <div style={{ width: "185px" }}>

          <FormField label="Total employee" inputProps={{
            type: "number", placeholder: "ex. 100", name: "totalEmployees",
            value: formData.totalEmployees,
            onChange: handleInputChange,
          }} />
        </div>
        <div style={{ height: "60px", gap: "4px", display: "flex", justifyContent: "flex-start", flexDirection: "column", marginBottom: "66px" }}>
          <PrimaryText customStyle={{ fontSize: "14px", lineHeight: "20px", fontWeight: "500", display: "flex", justifyContent: "flex-start" }} includeSpan={false} text="Apply type" />

          <div style={{ height: "36px", borderRadius: "5px", gap: "24px", padding: "8px 0px 8px 0", display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <RadioButton checked={selectedOption === 1} onClick={() => handleOptionClick(1)} />
              <p style={{ marginLeft: "5px", marginRight: "10px", color: "#7A7A7A" }}>Quick apply</p>
              <RadioButton checked={selectedOption === 2} onClick={() => handleOptionClick(2)} />
              <p style={{ marginLeft: "5px", color: "#7A7A7A" }}>External apply</p>
            </div>
            <div style={{ marginLeft: "auto",cursor:"pointer" }}>
              <PrimaryButton text="Update" onClick={UpdateJob}/>
            </div>

          </div>

        </div>

      </Modal>
    </div>
  );
};

export default EditDeleteButton;
