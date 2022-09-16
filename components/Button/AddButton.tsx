import { PlusIcon } from "@heroicons/react/24/outline";
import { MouseEvent } from "react";
import Button from ".";

const AddButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement | SVGSVGElement>
) => {
  return (
    <Button icon={<PlusIcon height={20} color="white" />} {...props}>
      <label className="text-sm text-white font-light cursor-pointer">
        Add New Location
      </label>
    </Button>
  );
};

export default AddButton;
