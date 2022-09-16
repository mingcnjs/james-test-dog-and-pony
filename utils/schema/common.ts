import * as Yup from "yup";

export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const emailRequiredError = "Email is required";
export const emailPatternError = "Invalid email format";

export const emailSchema = Yup.string()
  .required(emailRequiredError)
  .matches(emailRegex, emailPatternError);

export const fullNameRequiredError = "Full Name is required";
export const nameLengthPatternError = "Please enter a valid name";

export const fullNameSchema = Yup.string()
  .required(fullNameRequiredError)
  .min(2, nameLengthPatternError)
  .max(50, nameLengthPatternError);
