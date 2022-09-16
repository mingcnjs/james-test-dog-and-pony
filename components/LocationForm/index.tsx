import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ILocation } from "../../types/Location";
import locationFormSchema, {
  LocationSchema,
} from "../../utils/schema/locationFormSchema";
import Input from "../Input/Input";

type LocationFormProps = {
  onClose?: () => void;
  onClick: (data: LocationSchema) => void;
  location?: ILocation;
  locationIndex?: number;
};

const LocationForm = ({ onClose, onClick, location }: LocationFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitted },
  } = useForm<LocationSchema>({ resolver: yupResolver(locationFormSchema) });

  const title = watch("title");
  const address = watch("address");
  const fullName = watch("fullName");
  const job = watch("job");
  const email = watch("email");
  const phone = watch("phone");

  useEffect(() => {
    if (location) {
      setValue("title", location.title);
      setValue("address", location.address);
      setValue("fullName", location.fullName);
      setValue("job", location.job);
      setValue("email", location.email);
      setValue("phone", location.phone);
    }
  }, [location, setValue]);

  const onSubmit = (data: LocationSchema) => {
    onClick(data);
  };

  return (
    <div className="flex flex-col bg-white rounded-md p-5">
      <div className="flex justify-between items-center mb-12">
        <div className="text-md font-medium text-gray100">
          {location ? "Edit Location" : "New Location"}
        </div>
        <XMarkIcon width={20} color="#313e4f" onClick={onClose} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("title")}
          label="Title"
          error={errors?.title?.message}
        />
        <Input
          {...register("address")}
          label="Enter the address"
          error={errors?.address?.message}
        />
        <div className="divide-y divide-gray300 text-sky100 font-light">
          <div className="uppercase text-xs mb-4">Contact Information</div>
          <div className="pt-4">
            <Input
              {...register("fullName")}
              label="Full Name"
              error={errors?.fullName?.message}
            />
            <Input
              {...register("job")}
              label="Job Position"
              error={errors?.job?.message}
            />
            <Input
              {...register("email")}
              label="Email"
              placeholder="name@example.com"
              error={errors?.email?.message}
            />
            <Input
              {...register("phone")}
              label="Phone"
              placeholder="(xxx) xxx-xxxx"
              error={errors?.phone?.message}
            />
            <button
              type="submit"
              className="bg-sky100 w-16 rounded-md text-white p-2 disabled:bg-gray300"
              disabled={
                !title ||
                !address ||
                !fullName ||
                !job ||
                !email ||
                !phone ||
                (!isValid && isSubmitted)
              }
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LocationForm;
