"use client";
import { FaRegEdit, FaTimes } from "react-icons/fa";
import { useState } from "react";
import FormInput from "../FormInput";
import ParagraphsArray from "./ParagraphsArray";
import Button from "../Button";

type Itinerary = {
  day: number;
  details: string[];
  title: string;
};

export default function AddPackageItinerary({
  handleAddition,
  handleRemove,
  handleEdit,
  itinerary,
  title,
}: {
  handleAddition: (image: Itinerary) => void;
  handleEdit: (image: Itinerary) => void;
  handleRemove: (index: number) => void;
  itinerary: Itinerary[];
  title: string;
}) {
  const [newItinerary, setNewItinerary] = useState<Itinerary>({
    day: 0,
    details: [],
    title: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItinerary((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = () => {
    if (newItinerary.title.trim() !== "") {
      if (isEditing) {
        handleEdit({
          ...newItinerary,
          title: newItinerary.title.trim(),
          day: Number(newItinerary.day),
        });
        setIsEditing(false);
      } else {
        handleAddition({
          ...newItinerary,
          title: newItinerary.title.trim(),
          day: Number(newItinerary.day),
        });
      }
      setNewItinerary({ day: 0, details: [], title: "" });
    }
  };

  const handleParagraphAddition = (paragraph: string[]) => {
    if (paragraph.length) {
      setNewItinerary((prev) => ({
        ...prev,
        details: [...paragraph],
      }));
    }
  };

  const handleEditing = (id: number) => {
    setIsEditing(true);
    const dayDetails = itinerary[id];
    if (dayDetails)
      setNewItinerary({
        day: dayDetails?.day,
        details: dayDetails?.details,
        title: dayDetails?.title,
      });
  };

  const handleCancel = () => {
    setNewItinerary({ day: 0, details: [], title: "" });
    setIsEditing(false);
  };

  return (
    <div>
      <h3 className="text-sm font-semibold capitalize">{title}</h3>
      <div className="my-2 flex  flex-col items-end gap-2 ">
        <FormInput
          name="day"
          id="day"
          label="day"
          type="number"
          value={newItinerary.day}
          onChange={handleChange}
        />
        <FormInput
          name="title"
          id="title"
          label="title"
          type="text"
          value={newItinerary.title}
          onChange={handleChange}
        />

        <ParagraphsArray
          handleAddition={handleParagraphAddition}
          paragraphs={newItinerary.details}
          title="add few paragraphs for the day"
        />
        <div className="my-2 flex justify-end gap-2">
          <Button
            text={`${isEditing ? "save" : "add"}`}
            type="button"
            onClick={handleAdd}
          />
          <Button
            text={"cancel"}
            type="button"
            styles={`${isEditing ? "block" : "hidden"}`}
            onClick={handleCancel}
          />
        </div>
      </div>
      <ul className="order-2 flex flex-col gap-2 py-1">
        {itinerary.map((details, i) => {
          return (
            <li
              className="flex flex-col justify-between rounded-md bg-blue-100 px-2 py-1"
              key={details.day}
            >
              <div className="flex justify-between">
                <p className="break-all">Day : {details.day}</p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleRemove(i)}
                    className="grid  place-items-center"
                  >
                    <FaTimes className="cursor-pointer text-lg text-red-500 delay-75 hover:animate-spin hover:text-red-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditing(i)}
                    className="grid place-items-center"
                  >
                    <FaRegEdit className="text-green-500 duration-150 hover:text-green-700" />
                  </button>
                </div>
              </div>
              <p className="break-all">{details.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
