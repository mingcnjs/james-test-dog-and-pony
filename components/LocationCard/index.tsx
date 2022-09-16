import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { IContact, ILocation } from "../../types/Location";
import ContactCard from "../ContactCard";

type LocationCardProps = {
  onEdit: () => void;
  onDelete: () => void;
} & ILocation;

const LocationCard = ({
  title,
  address,
  onEdit,
  onDelete,
  ...rest
}: LocationCardProps) => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      onClick={() => setExpand(!expand)}
      className={`rounded-md mt-8 shadow-xl overflow-hidden`}
    >
      <div
        className={`flex justify-between items-center px-[30px] py-[25px] cursor-pointer ${
          expand ? "bg-gray200" : "bg-white"
        } `}
      >
        <div className="flex flex-col">
          <div
            className={`text-xl font-bold ${
              expand ? "text-white" : "text-gray100"
            }`}
          >
            {title}
          </div>
          <div
            className={`text-sm font-light ${
              expand ? "text-white" : "text-gray200"
            }`}
          >
            {address}
          </div>
        </div>
        {expand ? (
          <ChevronUpIcon height={24} color="white" />
        ) : (
          <ChevronDownIcon height={24} color="#4cb1c3" />
        )}
      </div>
      {expand && rest && (
        <ContactCard contact={rest} onEdit={onEdit} onDelete={onDelete} />
      )}
    </div>
  );
};

export default LocationCard;
