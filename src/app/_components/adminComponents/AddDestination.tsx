"use client";
import { Button, FormInput, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/react";
import { useState } from "react";
import type { DestinationType } from "~/utils/types";
import ParagraphsArray from "./ParagraphsArray";
import toast from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import scrollTo from "~/utils/scrollTo";
import { useQueryClient } from "@tanstack/react-query";

export default function AddDestination() {
  const [content, setContent] = useState<DestinationType>({
    destinationName: "",
    destinationDescription: [],
    destinationImageURL: "",
    destinationImageDescription: "",
    destinationDomestic: true,
    destinationFeatured: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const {
    data,
    refetch,
    isLoading,
    isPending: initPending,
  } = api.admin.getDestinations.useQuery();
  const queryClient = useQueryClient();

  const { mutate: addDestination, isPending: addPending } =
    api.admin.addDestination.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.destinationName) {
          error.data?.zodError?.fieldErrors.destinationName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.destinationDescription) {
          error.data?.zodError?.fieldErrors.destinationDescription.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.destinationImageURL) {
          error.data?.zodError?.fieldErrors.destinationImageURL.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.destinationImageDescription) {
          error.data?.zodError?.fieldErrors.destinationImageDescription.map(
            (err) => toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.destinationFeatured) {
          error.data?.zodError?.fieldErrors.destinationFeatured.map((err) =>
            toast.error(err),
          );
          return null;
        }

        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          destinationName: "",
          destinationDescription: [],
          destinationImageURL: "",
          destinationImageDescription: "",
          destinationDomestic: true,
          destinationFeatured: false,
        });
        await queryClient.invalidateQueries({ queryKey: ["getPackages"] });
        void refetch();
        toast.success(data.message);
      },
    });
  const { mutate: updateDestination, isPending: updatePending } =
    api.admin.updateDestination.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.destinationName) {
          error.data?.zodError?.fieldErrors.destinationName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.destinationDescription) {
          error.data?.zodError?.fieldErrors.destinationDescription.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.destinationImageURL) {
          error.data?.zodError?.fieldErrors.destinationImageURL.map((err) =>
            toast.error(err),
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
        if (error.data?.zodError?.fieldErrors.destinationFeatured) {
          error.data?.zodError?.fieldErrors.destinationFeatured.map((err) =>
            toast.error(err),
          );
          return null;
        }
        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          destinationName: "",
          destinationDescription: [],
          destinationImageURL: "",
          destinationImageDescription: "",
          destinationDomestic: true,
          destinationFeatured: false,
        });
        await queryClient.invalidateQueries({ queryKey: ["getPackages"] });
        void refetch();
        toast.success(data.message);
      },
    });

  const { mutate: deleteDestination } = api.admin.deleteDestination.useMutation(
    {
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: async (data) => {
        await queryClient.invalidateQueries({ queryKey: ["getPackages"] });
        toast.success(data.message);
        void refetch();
      },
    },
  );
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
        destinationDescription: [...paragraph],
      }));
    }
  };

  const handleCancel = () => {
    setContent({
      destinationName: "",
      destinationDescription: [],
      destinationImageURL: "",
      destinationImageDescription: "",
      destinationDomestic: true,
      destinationFeatured: false,
    });
    setIsEditing(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      updateDestination({
        id: content.id,
        destinationName: content.destinationName.trim(),
        destinationDescription: content.destinationDescription,
        destinationImageURL: content.destinationImageURL.trim(),
        destinationImageDescription: content.destinationImageDescription.trim(),
        destinationDomestic: content.destinationDomestic,
        destinationFeatured: content.destinationFeatured,
      });
    } else {
      addDestination({
        destinationName: content.destinationName.trim(),
        destinationDescription: content.destinationDescription,
        destinationImageURL: content.destinationImageURL.trim(),
        destinationImageDescription: content.destinationImageDescription.trim(),
        destinationDomestic: content.destinationDomestic,
        destinationFeatured: content.destinationFeatured,
      });
    }
  };
  const handleDelete = (id: string) => {
    deleteDestination({ id });
  };

  const handleEdit = (id: string) => {
    const destination = data?.destinations.find(
      (destination) => destination.id === id,
    );
    if (destination) {
      setContent({
        id: destination.id,
        destinationName: destination.name,
        destinationDescription: destination.description,
        destinationImageURL: destination.image,
        destinationImageDescription: destination.imageDescription,
        destinationDomestic: destination.domestic,
        destinationFeatured: destination.featured,
      });
      setIsEditing(true);
    }
  };

  return (
    <main>
      <section>
        <div className="align-section-center section-bg-white mb-4 py-4">
          <SectionTitle title="add holiday destination" adminSubTitle={true} />
          <form onSubmit={handleSubmit} id="destination">
            <FormInput
              name="destinationName"
              type="text"
              label="name"
              value={content.destinationName}
              onChange={handleChange}
              required
            />
            <FormInput
              name="destinationImageURL"
              label="cloudinary image URL"
              type="text"
              value={content.destinationImageURL}
              onChange={handleChange}
              required
            />
            <FormInput
              name="destinationImageDescription"
              label="image description"
              type="text"
              value={content.destinationImageDescription}
              onChange={handleChange}
              required
            />

            <div className="my-2 flex items-center gap-2">
              <input
                type="checkbox"
                name="destinationDomestic"
                id="destinationDomestic"
                checked={content.destinationDomestic}
                onChange={() => {
                  setContent((prevContent) => ({
                    ...prevContent,
                    destinationDomestic: !prevContent.destinationDomestic,
                  }));
                }}
              />
              <label htmlFor="destinationDomestic">
                Select if this is domestic
              </label>
            </div>

            <div className="my-2 flex items-center gap-2">
              <input
                type="checkbox"
                name="destinationFeatured"
                id="destinationFeatured"
                checked={content.destinationFeatured}
                onChange={() => {
                  setContent((prevContent) => ({
                    ...prevContent,
                    destinationFeatured: !prevContent.destinationFeatured,
                  }));
                }}
              />
              <label htmlFor="destinationFeatured">
                Select if this needs to be displayed in footer featured section
              </label>
            </div>

            <ParagraphsArray
              handleAddition={handleDescriptionAddition}
              paragraphs={content.destinationDescription}
              title="add few paragraphs about the destination city"
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
          {data?.destinations?.length == 0 && (
            <h2 className="align-section-center section-bg-white mb-8 p-4 text-xl capitalize">
              no destination city has been added yet, Kindly add destinations.
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
            {data?.destinations.map((destination) => {
              return (
                <li
                  key={destination.id}
                  className="align-section-center section-bg-white my-4 flex items-center justify-between py-4"
                >
                  <p className="font-semibold capitalize">{destination.name}</p>
                  <div className="flex items-center gap-6">
                    <button
                      type="button"
                      onClick={() => handleDelete(destination.id)}
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
                        scrollTo("#destination", 150);
                        handleEdit(destination.id);
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
    </main>
  );
}
