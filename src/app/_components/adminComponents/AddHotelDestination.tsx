"use client";
import { Button, FormInput, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/react";
import { useState } from "react";
import type { HotelDestinationType } from "~/utils/types";
import ParagraphsArray from "./ParagraphsArray";
import toast from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import scrollTo from "~/utils/scrollTo";
import { useQueryClient } from "@tanstack/react-query";

export default function AddHotelDestination() {
  const [content, setContent] = useState<HotelDestinationType>({
    hotelDestinationName: "",
    hotelDestinationDescription: [],
    hotelDestinationImageURL: "",
    hotelDestinationImageDescription: "",
    hotelDestinationSectionName: "",
    hotelDestinationSectionDetails: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();
  const {
    data,
    refetch,
    isLoading,
    isPending: initPending,
  } = api.admin.getHotelDestination.useQuery();

  const { mutate: addDestination, isPending: addPending } =
    api.admin.addHotelDestination.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.hotelDestinationName) {
          error.data?.zodError?.fieldErrors.hotelDestinationName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelDestinationDescription) {
          error.data?.zodError?.fieldErrors.hotelDestinationDescription.map(
            (err) => toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelDestinationImageURL) {
          error.data?.zodError?.fieldErrors.hotelDestinationImageURL.map(
            (err) => toast.error(err),
          );
          return null;
        }
        if (
          error.data?.zodError?.fieldErrors.hotelDestinationImageDescription
        ) {
          error.data?.zodError?.fieldErrors.hotelDestinationImageDescription.map(
            (err) => toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelDestinationSectionName) {
          error.data?.zodError?.fieldErrors.hotelDestinationSectionName.map(
            (err) => toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelDestinationSectionDetails) {
          error.data?.zodError?.fieldErrors.hotelDestinationSectionDetails.map(
            (err) => toast.error(err),
          );
          return null;
        }

        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          hotelDestinationName: "",
          hotelDestinationDescription: [],
          hotelDestinationImageURL: "",
          hotelDestinationImageDescription: "",
          hotelDestinationSectionName: "",
          hotelDestinationSectionDetails: [],
        });
        await queryClient.invalidateQueries({ queryKey: ["getHotels"] });
        void refetch();
        toast.success(data.message);
      },
    });
  const { mutate: updateHotelDestination, isPending: updatePending } =
    api.admin.updateHotelDestination.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.hotelDestinationName) {
          error.data?.zodError?.fieldErrors.hotelDestinationName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelDestinationDescription) {
          error.data?.zodError?.fieldErrors.hotelDestinationDescription.map(
            (err) => toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelDestinationImageURL) {
          error.data?.zodError?.fieldErrors.hotelDestinationImageURL.map(
            (err) => toast.error(err),
          );
          return null;
        }
        if (
          error.data?.zodError?.fieldErrors.hotelDestinationImageDescription
        ) {
          error.data?.zodError?.fieldErrors.hotelDestinationImageDescription.map(
            (err) => toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelDestinationSectionName) {
          error.data?.zodError?.fieldErrors.hotelDestinationSectionName.map(
            (err) => toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelDestinationSectionDetails) {
          error.data?.zodError?.fieldErrors.hotelDestinationSectionDetails.map(
            (err) => toast.error(err),
          );
          return null;
        }

        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          hotelDestinationName: "",
          hotelDestinationDescription: [],
          hotelDestinationImageURL: "",
          hotelDestinationImageDescription: "",
          hotelDestinationSectionName: "",
          hotelDestinationSectionDetails: [],
        });
        await queryClient.invalidateQueries({ queryKey: ["getHotels"] });
        void refetch();
        setIsEditing(false);
        toast.success(data.message);
      },
    });
  const { mutate: deleteHotelDestination } =
    api.admin.deleteHotelDestination.useMutation({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: async (data) => {
        toast.success(data.message);
        await queryClient.invalidateQueries({ queryKey: ["getHotels"] });
        void refetch();
      },
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent((prevContent) => ({
      ...prevContent,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDescriptionAddition = (paragraph: string[]) => {
    if (paragraph.length) {
      setContent((prevContent) => ({
        ...prevContent,
        hotelDestinationDescription: [...paragraph],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      updateHotelDestination({
        id: content.id,
        hotelDestinationName: content.hotelDestinationName.trim().toLowerCase(),
        hotelDestinationDescription: content.hotelDestinationDescription,
        hotelDestinationImageURL: content.hotelDestinationImageURL.trim(),
        hotelDestinationImageDescription:
          content.hotelDestinationImageDescription.trim(),
        hotelDestinationSectionName: content.hotelDestinationSectionName.trim(),
        hotelDestinationSectionDetails: content.hotelDestinationSectionDetails,
      });
    } else {
      addDestination({
        hotelDestinationName: content.hotelDestinationName.trim().toLowerCase(),
        hotelDestinationDescription: content.hotelDestinationDescription,
        hotelDestinationImageURL: content.hotelDestinationImageURL.trim(),
        hotelDestinationImageDescription:
          content.hotelDestinationImageDescription.trim(),
        hotelDestinationSectionName: content.hotelDestinationSectionName.trim(),
        hotelDestinationSectionDetails: content.hotelDestinationSectionDetails,
      });
    }
  };

  const handleSectionDetails = (paragraph: string[]) => {
    if (paragraph.length) {
      setContent((prevContent) => ({
        ...prevContent,
        hotelDestinationSectionDetails: [...paragraph],
      }));
    }
  };

  const handleDelete = (id: string) => {
    deleteHotelDestination({ id });
  };

  const handleCancel = () => {
    setContent({
      hotelDestinationName: "",
      hotelDestinationDescription: [],
      hotelDestinationImageURL: "",
      hotelDestinationImageDescription: "",
      hotelDestinationSectionName: "",
      hotelDestinationSectionDetails: [],
    });
    setIsEditing(false);
  };

  const handleEdit = (id: string) => {
    const hotelDestination = data?.hotelDestinations.find(
      (hotelDestination) => hotelDestination.id === id,
    );
    if (hotelDestination) {
      setContent({
        id: hotelDestination.id,
        hotelDestinationName: hotelDestination.name,
        hotelDestinationDescription: hotelDestination.description,
        hotelDestinationImageURL: hotelDestination.image,
        hotelDestinationImageDescription: hotelDestination.imageDescription,
        hotelDestinationSectionName: hotelDestination.sectionName,
        hotelDestinationSectionDetails: hotelDestination.sectionDetails,
      });
      setIsEditing(true);
    }
  };

  return (
    <section>
      <div className="align-section-center section-bg-white mb-4 py-4">
        <SectionTitle title="add hotel destination" adminSubTitle={true} />
        <form onSubmit={handleSubmit} id="hotelDestination">
          <FormInput
            name="hotelDestinationName"
            type="text"
            label="name"
            value={content.hotelDestinationName}
            onChange={handleChange}
            required
          />
          <FormInput
            name="hotelDestinationImageURL"
            label="cloudinary image URL"
            type="text"
            value={content.hotelDestinationImageURL}
            onChange={handleChange}
            required
          />
          <FormInput
            name="hotelDestinationImageDescription"
            label="image description"
            type="text"
            value={content.hotelDestinationImageDescription}
            onChange={handleChange}
            required
          />
          <ParagraphsArray
            handleAddition={handleDescriptionAddition}
            paragraphs={content.hotelDestinationDescription}
            title="add few paragraphs about the hotel destination city"
          />
          <FormInput
            name="hotelDestinationSectionName"
            label="section name"
            type="text"
            value={content.hotelDestinationSectionName}
            onChange={handleChange}
            required
          />

          <ParagraphsArray
            handleAddition={handleSectionDetails}
            paragraphs={content.hotelDestinationSectionDetails}
            title="section details"
          />

          <div className="my-2 flex justify-end gap-2">
            <Button
              text={`${isEditing ? "save" : "add"}`}
              type="submit"
              disabled={initPending || updatePending || addPending}
            />
            <Button
              text={"cancel"}
              type="reset"
              styles={`${isEditing ? "block" : "hidden"}`}
              disabled={initPending || updatePending || addPending}
              onClick={handleCancel}
            />
          </div>
        </form>
      </div>
      <div>
        {data?.hotelDestinations?.length == 0 && (
          <h2 className="align-section-center section-bg-white mb-8 p-4 text-xl capitalize">
            no hotel destination city has been added yet, Kindly add hotel
            destinations.
          </h2>
        )}
        <ul>
          {isLoading &&
            [0, 1, 2, 3].map((i) => {
              return (
                <li
                  className="align-section-center section-bg-white my-2 flex h-8 items-center justify-between"
                  key={i}
                >
                  <div className="h-4 w-36 animate-pulse rounded-md bg-gray-200"></div>
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-pulse  bg-gray-200"></span>
                    <span className="h-4 w-4 animate-pulse  bg-gray-200"></span>
                  </div>
                </li>
              );
            })}
          {data?.hotelDestinations.map((hotelDestination) => {
            return (
              <li
                key={hotelDestination.id}
                className="align-section-center section-bg-white my-4 flex items-center justify-between py-4"
              >
                <p className="font-semibold capitalize">
                  {hotelDestination.name}
                </p>
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() => handleDelete(hotelDestination.id)}
                    className="flex items-center gap-1 rounded-md border bg-red-600 px-2 py-1 text-sm font-semibold uppercase text-white duration-150 hover:bg-red-500"
                  >
                    <span>delete</span>
                    <span>
                      <FaTrashCan />
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      scrollTo("#hotelDestination", 150);
                      handleEdit(hotelDestination.id);
                    }}
                    className="flex items-center gap-1 rounded-md border bg-green-600 px-2 py-1 text-sm font-semibold uppercase text-white duration-150 hover:bg-green-500"
                  >
                    <span>edit</span>
                    <span>
                      <FaRegEdit />
                    </span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
