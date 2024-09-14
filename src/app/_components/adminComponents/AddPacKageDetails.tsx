"use client";
import { FaRegEdit, FaTimes } from "react-icons/fa";
import { useState } from "react";
import FormInput from "../FormInput";
import ParagraphsArray from "./ParagraphsArray";
import Button from "../Button";

type Details = {
  sectionName: string;
  sectionDetails: string[];
  displayList: boolean;
};

export default function AddPackageDetails({
  handleAddition,
  handleRemove,
  handleEdit,
  details,
  title,
}: {
  handleAddition: (image: Details) => void;
  handleRemove: (index: number) => void;
  handleEdit: (image: Details) => void;
  details: Details[];
  title: string;
}) {
  const [newDetails, setNewDetails] = useState<Details>({
    sectionName: "",
    sectionDetails: [],
    displayList: false,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = () => {
    if (newDetails.sectionName.trim() !== "") {
      if (isEditing) {
        handleEdit({
          ...newDetails,
          sectionName: newDetails.sectionName.trim(),
        });
        setIsEditing(false);
      } else {
        handleAddition({
          ...newDetails,
          sectionName: newDetails.sectionName.trim(),
        });
      }
    }
    setNewDetails({
      sectionName: "",
      sectionDetails: [],
      displayList: false,
    });
  };

  const handleParagraphAddition = (paragraph: string[]) => {
    if (paragraph.length) {
      setNewDetails((prev) => ({
        ...prev,
        sectionDetails: [...paragraph],
      }));
    }
  };

  const handleEditing = (id: number) => {
    setIsEditing(true);
    const detail = details[id];
    if (detail)
      setNewDetails({
        sectionName: detail?.sectionName,
        sectionDetails: detail?.sectionDetails,
        displayList: detail?.displayList,
      });
  };

  const handleCancel = () => {
    setNewDetails({
      sectionName: "",
      sectionDetails: [],
      displayList: false,
    });
    setIsEditing(false);
  };

  return (
    <div>
      <h3 className="text-sm font-semibold capitalize">{title}</h3>
      <div className="my-2 flex flex-col items-end gap-2  ">
        <FormInput
          name="sectionName"
          id="sectionName"
          label="section name"
          type="text"
          value={newDetails.sectionName}
          onChange={handleChange}
        />
        <div className="my-2 flex  w-full items-center gap-2">
          <input
            type="checkbox"
            name="displayList"
            id="displayList"
            onClick={() => {
              console.log(details);
              setNewDetails((prev) => ({
                ...prev,
                displayList: !prev.displayList,
              }));
            }}
            defaultChecked={newDetails.displayList}
          />
          <label htmlFor="displayList">
            Should this package be displayed in a list format
          </label>
        </div>
        <ParagraphsArray
          handleAddition={handleParagraphAddition}
          paragraphs={newDetails.sectionDetails}
          title="sectionDetails"
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
        {details.map((details, i) => {
          return (
            <li
              className="flex flex-col justify-between rounded-md bg-blue-100 px-2 py-1"
              key={details.sectionName}
            >
              <div className="flex justify-between">
                <p className="break-all">{details.sectionName}</p>
                <div className="flex items-center gap-4">
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
              <p className="break-all">
                Should this be displayed as a list on web page -
                {details.displayList ? "Yes" : "No"}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
