"use client";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import FormInput from "../FormInput";

type Image = {
  url: string;
  description: string;
};

export default function AddImages({
  handleAddition,
  handleRemove,
  images,
  title,
}: {
  handleAddition: (image: Image) => void;
  handleRemove: (index: number) => void;
  images: Image[];
  title: string;
}) {
  const [newImage, setNewImage] = useState({ url: "", description: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewImage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = () => {
    if (newImage.url.trim() !== "" && newImage.description.trim() !== "") {
      handleAddition({
        url: newImage.url.trim(),
        description: newImage.description.trim(),
      });
      setNewImage({ url: "", description: "" });
    }
  };

  return (
    <div>
      <h3 className="text-sm font-semibold capitalize">{title}</h3>
      <div className="my-2 flex flex-col items-end gap-2 sm:flex-row  ">
        <FormInput
          name="url"
          id={newImage.url}
          label="cloudinary image URL"
          type="text"
          value={newImage.url}
          onChange={handleChange}
        />
        <FormInput
          name="description"
          id={newImage.description}
          label="image description "
          type="text"
          value={newImage.description}
          onChange={handleChange}
        />
        <button
          type="button"
          className="mb-4 bg-blue-500 px-2 py-1 font-semibold capitalize text-white duration-150 hover:bg-blue-400 md:mb-0"
          onClick={handleAdd}
        >
          add
        </button>
      </div>
      <ul className="order-2 flex flex-col gap-2 py-1">
        {images.map((image, i) => {
          return (
            <li
              className="flex flex-col gap-1 rounded-md bg-blue-100 px-2 py-1"
              key={image.url + i}
            >
              <div className="flex items-center justify-between">
                <p className="break-all">{image.url}</p>
                <span>
                  <FaTimes
                    onClick={() => handleRemove(i)}
                    className="cursor-pointer text-lg text-red-500 delay-75 hover:animate-spin hover:text-red-600"
                  />
                </span>
              </div>
              <p className="break-all">{image.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
