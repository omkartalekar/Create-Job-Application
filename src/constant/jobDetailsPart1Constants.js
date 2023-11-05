import * as Yup from "yup";

export const jobDetailsPart1Schema = Yup.object().shape({
  jobTitle: Yup.string().required("Job title is required"),
  companyName: Yup.string().required("Company name is required"),
  industry: Yup.string().required("Industry is required"),
  location: Yup.string().required("Location is required"),
  remoteType: Yup.string().required("Remote type is required"),
});

export const initialJobDetailsPart1Values = {
  jobTitle: "",
  companyName: "",
  industry: "",
  location: "",
  remoteType: "",
};
