import * as Yup from "yup";
import { emailSchema, fullNameSchema } from "./common";

export interface LocationSchema {
  title: string;
  address: string;
  fullName: string;
  job: string;
  email: string;
  phone: string;
}

const locationFormSchema: Yup.SchemaOf<LocationSchema> = Yup.object().shape({
  title: Yup.string().required("Title field cannot be empty"),
  address: Yup.string().required("Address field cannot be empty"),
  fullName: fullNameSchema,
  job: Yup.string().required("Job Position field cannot be empty"),
  email: emailSchema,
  phone: Yup.string()
    .required("Phone field cannot be empty")
    .min(8, "Please input valid phone"),
});

export default locationFormSchema;
