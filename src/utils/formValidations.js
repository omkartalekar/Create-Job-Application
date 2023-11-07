export const validateForm2 = (formData) => {
  const validationErrors = {};

  if (formData.experienceMin === "" || formData.experienceMin < 0) {
    validationErrors.experienceMin = "Invalid minimum experience";
  }

  if (formData.experienceMax === "" || formData.experienceMax < 0) {
    validationErrors.experienceMax = "Invalid maximum experience";
  }

  if (formData.salaryMin === "" || formData.salaryMin < 0) {
    validationErrors.salaryMin = "Invalid minimum salary";
  }

  if (formData.salaryMax === "" || formData.salaryMax < 0) {
    validationErrors.salaryMax = "Invalid maximum salary";
  }

  if (formData.totalEmployees === "" || formData.totalEmployees < 0) {
    validationErrors.totalEmployees = "Invalid total employees";
  }

  return validationErrors;
};

export const validateForm1 = (formData) => {
  const validationErrors = {};

  if (!formData.jobTitle) {
    validationErrors.jobTitle = "Job title is required";
  }

  if (!formData.companyName) {
    validationErrors.companyName = "Company name is required";
  }

  if (!formData.industry) {
    validationErrors.industry = "Industry is required";
  }

  if (!formData.location) {
    validationErrors.location = "Location is required";
  }

  if (!formData.remoteType) {
    validationErrors.remoteType = "Remote type is required";
  }

  return validationErrors;
};
