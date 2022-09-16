import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import AddButton from "../components/Button/AddButton";
import Container from "../components/Container";
import LocationCard from "../components/LocationCard";
import LocationForm from "../components/LocationForm";
import { ILocation } from "../types/Location";
import { LocationSchema } from "../utils/schema/locationFormSchema";
import "react-toastify/dist/ReactToastify.css";

const mockLocation: ILocation = {
  title: "Headquarters",
  address: "3763 W. Dallas St.",
  fullName: "Hellena John",
  job: "Software Tester",
  email: "georgia.young@example.com",
  phone: "8085550111",
};

const Home: NextPage = () => {
  const [openLocation, setOpenLocation] = useState(false);
  const [locations, setLocations] = useState<ILocation[]>([mockLocation]);
  const [locationIndex, setLocationIndex] = useState<number>();

  const onAddLocation = () => {
    setOpenLocation(true);
  };

  const notify = (type: "create" | "edit") => {
    const notification =
      type === "create"
        ? "NEW LOCATION IS ADDED"
        : "THE LOCATION HAS BEEN UPDATED";
    toast.success(notification, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const onLocationFormSave = useCallback(
    (data: LocationSchema) => {
      if (locationIndex === 0 || locationIndex) {
        const updated = locations?.map((location, index) => {
          if (index === locationIndex) return data;
          else location;
        });
        setLocations(updated as ILocation[]);
      } else {
        setLocations([...locations, ...[data]]);
      }
      notify(locationIndex === 0 || locationIndex ? "edit" : "create");
      setOpenLocation(false);
      setLocationIndex(undefined);
    },
    [locationIndex, locations]
  );

  const onEditLocationCard = (i: number) => {
    setLocationIndex(i);
    setOpenLocation(true);
  };

  const onDeleteLocationCard = (locationId: number) => {
    if (!locationId) return;
    if (locations?.length === 1) {
      alert("Sorry, you can't delete last one location");
      return;
    }
    const filtered = locations.filter((_, i) => i !== locationId);
    setLocations(filtered);
    setLocationIndex(undefined);
  };

  return (
    <div className="bg-layout100 overflow-y-scroll h-screen">
      <Head>
        <title>Dog and Pony</title>
      </Head>
      <Container>
        <div className="flex flex-col w-[320px]">
          <h1 className="text-7xl text-center pt-24 pb-12 text-sky100 font-light">
            Offices
          </h1>
          {openLocation ? (
            <LocationForm
              onClose={() => setOpenLocation(false)}
              onClick={(data) => onLocationFormSave(data)}
              location={
                locationIndex === 0 || locationIndex
                  ? locations?.[locationIndex]
                  : undefined
              }
            />
          ) : (
            <AddButton onClick={onAddLocation} />
          )}
          <div className="mb-5">
            {locations?.map((location, index) => (
              <LocationCard
                key={index}
                {...location}
                onEdit={() => onEditLocationCard(index)}
                onDelete={() => onDeleteLocationCard(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
