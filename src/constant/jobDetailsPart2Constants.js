import * as Yup from "yup";

export const jobDetailsPart2Schema = Yup.object().shape({
  experienceMin: Yup.number().required("Minimum experience is required"),
  experienceMax: Yup.number().required("Maximum experience is required"),
  salaryMin: Yup.number().required("Minimum salary is required"),
  salaryMax: Yup.number().required("Maximum salary is required"),
  totalEmployees: Yup.number().required("Total employees is required"),
});

export const initialJobDetailsPart2Values = {
  experienceMin: 0,
  experienceMax: 0,
  salaryMin: 0,
  salaryMax: 0,
  totalEmployees: 0,
  applyType: "",
};
