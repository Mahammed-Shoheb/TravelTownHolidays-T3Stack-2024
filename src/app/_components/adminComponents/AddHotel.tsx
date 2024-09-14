"use client";
import { Button, FormInput, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/react";
import { useState } from "react";
import type { HotelType } from "~/utils/types";
import AddImages from "./AddImages";
import toast from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import ParagraphsArray from "./ParagraphsArray";
import scrollTo from "~/utils/scrollTo";

type Image = {
  url: string;
  description: string;
};

export default function AddHotel() {
  const [content, setContent] = useState<HotelType>({
    hotelDestination: "",
    hotelName: "",
    hotelImages: [],
    hotelPrice: 0,
    hotelSectionName: "",
    hotelSectionDetails: [],
    hotelAddress: "",
    hotelIsPerCouple: false,
  });
  const [isEditing, setIsEditing] = useState(false);

  const {
    data,
    refetch,
    isLoading,
    isPending: initPending,
  } = api.admin.getHotels.useQuery();

  const { mutate: addHotel, isPending: addPending } =
    api.admin.addHotel.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.hotelDestination) {
          error.data?.zodError?.fieldErrors.hotelDestination.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelImages) {
          error.data?.zodError?.fieldErrors.hotelImages.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelAddress) {
          error.data?.zodError?.fieldErrors.hotelAddress.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelPrice) {
          error.data?.zodError?.fieldErrors.hotelPrice.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelSectionName) {
          error.data?.zodError?.fieldErrors.hotelSectionName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelSectionDetails) {
          error.data?.zodError?.fieldErrors.hotelSectionDetails.map((err) =>
            toast.error(err),
          );
          return null;
        }

        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          hotelDestination: "",
          hotelName: "",
          hotelImages: [],
          hotelPrice: 0,
          hotelSectionName: "",
          hotelSectionDetails: [],
          hotelAddress: "",
          hotelIsPerCouple: false,
        });
        void refetch();
        toast.success(data.message);
      },
    });
  const { mutate: updateHotel, isPending: updatePending } =
    api.admin.updateHotel.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.hotelDestination) {
          error.data?.zodError?.fieldErrors.hotelDestination.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelImages) {
          error.data?.zodError?.fieldErrors.hotelImages.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelAddress) {
          error.data?.zodError?.fieldErrors.hotelAddress.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelPrice) {
          error.data?.zodError?.fieldErrors.hotelPrice.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelSectionName) {
          error.data?.zodError?.fieldErrors.hotelSectionName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.hotelSectionDetails) {
          error.data?.zodError?.fieldErrors.hotelSectionDetails.map((err) =>
            toast.error(err),
          );
          return null;
        }

        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          hotelDestination: "",
          hotelName: "",
          hotelImages: [],
          hotelPrice: 0,
          hotelSectionName: "",
          hotelSectionDetails: [],
          hotelAddress: "",
          hotelIsPerCouple: false,
        });
        void refetch();
        setIsEditing(false);
        toast.success(data.message);
      },
    });
  const { mutate: deleteHotel } = api.admin.deleteHotel.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (data) => {
      toast.success(data.message);
      void refetch();
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent((prevContent) => ({
      ...prevContent,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageAddition = (image: Image) => {
    if (image) {
      setContent((prevContent) => ({
        ...prevContent,
        hotelImages: [...prevContent.hotelImages, image],
      }));
    }
  };

  const handleImageRemove = (index: number) => {
    setContent((prevContent) => ({
      ...prevContent,
      hotelImages: [...prevContent.hotelImages.filter((_, i) => i !== index)],
    }));
  };

  const handleSectionDetails = (paragraph: string[]) => {
    if (paragraph.length) {
      setContent((prevContent) => ({
        ...prevContent,
        hotelSectionDetails: [...paragraph],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      updateHotel({
        id: content.id,
        hotelDestination: content.hotelDestination.trim().toLowerCase(),
        hotelName: content.hotelName.trim(),
        hotelImages: content.hotelImages,
        hotelSectionName: content.hotelSectionName.trim(),
        hotelSectionDetails: content.hotelSectionDetails,
        hotelAddress: content.hotelAddress.trim(),
        hotelPrice: Number(content.hotelPrice),
        hotelIsPerCouple: content.hotelIsPerCouple,
      });
    } else {
      addHotel({
        hotelDestination: content.hotelDestination.trim().toLowerCase(),
        hotelName: content.hotelName.trim(),
        hotelImages: content.hotelImages,
        hotelSectionName: content.hotelSectionName.trim(),
        hotelSectionDetails: content.hotelSectionDetails,
        hotelAddress: content.hotelAddress.trim(),
        hotelPrice: Number(content.hotelPrice),
        hotelIsPerCouple: content.hotelIsPerCouple,
      });
    }
  };
  const handleDelete = (id: string) => {
    deleteHotel({ id });
  };
  const handleCancel = () => {
    setContent({
      hotelDestination: "",
      hotelName: "",
      hotelImages: [],
      hotelPrice: 0,
      hotelSectionName: "",
      hotelSectionDetails: [],
      hotelAddress: "",
      hotelIsPerCouple: false,
    });
    setIsEditing(false);
  };

  const handleEdit = (id: string) => {
    const hotel = data?.hotels.find((hotel) => hotel.id === id);
    if (hotel) {
      setContent({
        id: hotel.id,
        hotelDestination: hotel.hotelDestination.name,
        hotelName: hotel.name,
        hotelImages: hotel.images,
        hotelPrice: hotel.price,
        hotelSectionName: hotel.sectionName,
        hotelSectionDetails: hotel.sectionDetails,
        hotelAddress: hotel.address,
        hotelIsPerCouple: hotel.perCouple,
      });
      setIsEditing(true);
    }
  };

  return (
    <section>
      <div className="align-section-center section-bg-white mb-4 py-4">
        <SectionTitle title="add hotel details" adminSubTitle={true} />
        <form onSubmit={handleSubmit} id="hotelForm">
          <FormInput
            name="hotelDestination"
            type="text"
            label="name of the destination in hotel destinations with which you want this to be associated with"
            value={content.hotelDestination}
            onChange={handleChange}
            required
          />
          <FormInput
            name="hotelName"
            type="text"
            label="name"
            value={content.hotelName}
            onChange={handleChange}
            required
          />
          <FormInput
            name="hotelAddress"
            type="text"
            label="address"
            value={content.hotelAddress}
            onChange={handleChange}
            required
          />

          <FormInput
            name="hotelPrice"
            label="price"
            type="number"
            value={content.hotelPrice}
            onChange={handleChange}
            required
          />
          <div className="my-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="hotelIsPerCouple"
              id="hotelIsPerCouple"
              checked={content.hotelIsPerCouple}
              onChange={() => {
                setContent((prevContent) => ({
                  ...prevContent,
                  hotelIsPerCouple: !prevContent.hotelIsPerCouple,
                }));
              }}
            />
            <label htmlFor="hotelIsPerCouple">
              Is this price for per couple ?
            </label>
          </div>

          <AddImages
            handleAddition={handleImageAddition}
            handleRemove={handleImageRemove}
            images={content.hotelImages}
            title="add few images for image gallery"
          />

          <FormInput
            name="hotelSectionName"
            label="section name"
            type="text"
            value={content.hotelSectionName}
            onChange={handleChange}
            required
          />

          <ParagraphsArray
            handleAddition={handleSectionDetails}
            paragraphs={content.hotelSectionDetails}
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
        {data?.hotels?.length == 0 && (
          <h2 className="align-section-center section-bg-white mb-8 p-4 text-xl capitalize">
            no hotel has been added yet, Kindly add hotels.
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
          {data?.hotels.map((hotel) => {
            return (
              <li
                key={hotel.id}
                className="align-section-center section-bg-white my-4 flex items-center justify-between py-4"
              >
                <p className="font-semibold capitalize">{hotel.name}</p>
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() => handleDelete(hotel.id)}
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
                      scrollTo("#hotelForm", 150);
                      handleEdit(hotel.id);
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
