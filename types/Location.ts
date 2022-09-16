import { LocationSchema } from "../utils/schema/locationFormSchema";

export type IContact = {
  fullName: string;
  job: string;
  email: string;
  phone: string;
};

export type ILocation = LocationSchema;
