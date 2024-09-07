"use client";
import { Button, FormInput, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/react";
import { useEffect, useState } from "react";
import type { OfferType } from "~/utils/types";
import toast from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { ParagraphsArray } from "~/app/_components/adminComponents";
import scrollTo from "~/utils/scrollTo";

export default function Page() {
  useEffect(() => {
    document.title = "Travel Town Holidays | admin | Offers";
  });
  const [content, setContent] = useState<OfferType>({
    name: "",
    description: [],
    image: "",
    imageDescription: "",
    price: 0,
    specialPrice: 0,
    perCouple: false,
    sectionName: "",
    sectionDetails: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const {
    data,
    refetch,
    isLoading,
    isPending: initPending,
  } = api.admin.getOffers.useQuery();

  const { mutate: addOffer, isPending: addPending } =
    api.admin.addOffer.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.name) {
          error.data?.zodError?.fieldErrors.name.map((err) => toast.error(err));
          return null;
        }
        if (error.data?.zodError?.fieldErrors.description) {
          error.data?.zodError?.fieldErrors.description.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.image) {
          error.data?.zodError?.fieldErrors.image.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.imageDescription) {
          error.data?.zodError?.fieldErrors.imageDescription.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.price) {
          error.data?.zodError?.fieldErrors.price.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.specialPrice) {
          error.data?.zodError?.fieldErrors.specialPrice.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.sectionName) {
          error.data?.zodError?.fieldErrors.sectionName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.sectionDetails) {
          error.data?.zodError?.fieldErrors.sectionDetails.map((err) =>
            toast.error(err),
          );
          return null;
        }
        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          name: "",
          description: [],
          image: "",
          imageDescription: "",
          price: 0,
          perCouple: false,
          specialPrice: 0,
          sectionDetails: [],
          sectionName: "",
        });
        void refetch();
        toast.success(data.message);
      },
    });
  const { mutate: updateOffer, isPending: updatePending } =
    api.admin.updateOffer.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.name) {
          error.data?.zodError?.fieldErrors.name.map((err) => toast.error(err));
          return null;
        }
        if (error.data?.zodError?.fieldErrors.description) {
          error.data?.zodError?.fieldErrors.description.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.image) {
          error.data?.zodError?.fieldErrors.image.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.imageDescription) {
          error.data?.zodError?.fieldErrors.imageDescription.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.price) {
          error.data?.zodError?.fieldErrors.price.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.specialPrice) {
          error.data?.zodError?.fieldErrors.specialPrice.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.sectionName) {
          error.data?.zodError?.fieldErrors.sectionName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.sectionDetails) {
          error.data?.zodError?.fieldErrors.sectionDetails.map((err) =>
            toast.error(err),
          );
          return null;
        }
        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          name: "",
          description: [],
          image: "",
          imageDescription: "",
          price: 0,
          specialPrice: 0,
          perCouple: false,
          sectionDetails: [],
          sectionName: "",
        });
        void refetch();
        toast.success(data.message);
      },
    });

  const { mutate: deleteOffer } = api.admin.deleteOffer.useMutation({
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

  const handleDescriptionAddition = (paragraph: string[]) => {
    if (paragraph) {
      setContent((prevContent) => ({
        ...prevContent,
        description: [...paragraph],
      }));
    }
  };

  const handleSectionDetails = (paragraph: string[]) => {
    if (paragraph) {
      setContent((prevContent) => ({
        ...prevContent,
        sectionDetails: [...paragraph],
      }));
    }
  };

  const handleCancel = () => {
    setContent({
      name: "",
      description: [],
      image: "",
      imageDescription: "",
      price: 0,
      perCouple: false,
      specialPrice: 0,
      sectionDetails: [],
      sectionName: "",
    });
    setIsEditing(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      updateOffer({
        id: content.id,
        name: content.name.trim().toLowerCase(),
        description: content.description,
        image: content.image.trim(),
        imageDescription: content.imageDescription.trim(),
        sectionName: content.sectionName.trim(),
        sectionDetails: content.sectionDetails,
        price: Number(content.price),
        perCouple: content.perCouple,
        specialPrice: Number(content.specialPrice),
      });
    } else {
      addOffer({
        name: content.name.trim().toLowerCase(),
        description: content.description,
        image: content.image.trim(),
        imageDescription: content.imageDescription.trim(),
        sectionName: content.sectionName.trim(),
        sectionDetails: content.sectionDetails,
        price: Number(content.price),
        perCouple: content.perCouple,
        specialPrice: Number(content.specialPrice),
      });
    }
  };
  const handleDelete = (id: string) => {
    deleteOffer({ id });
  };

  const handleEdit = (id: string) => {
    const offer = data?.offers.find((offer) => offer.id === id);
    if (offer) {
      setContent({
        id: offer.id,
        name: offer.name,
        description: offer.description,
        image: offer.image,
        imageDescription: offer.imageDescription,
        price: offer.price,
        perCouple: offer.perCouple,
        specialPrice: offer.specialPrice,
        sectionName: offer.sectionName,
        sectionDetails: offer.sectionDetails,
      });
      setIsEditing(true);
    }
  };

  return (
    <main className="py-16">
      <div className="align-section-center">
        <SectionTitle title="Offers admin page" pageTitle={true} />
      </div>
      <section>
        <div className="align-section-center section-bg-white mb-4 py-4">
          <SectionTitle title="add offers" adminSubTitle={true} />
          <form onSubmit={handleSubmit} id="offers">
            <FormInput
              name="name"
              type="text"
              label="name"
              value={content.name}
              onChange={handleChange}
              required
            />
            <FormInput
              name="image"
              label="cloudinary image URL"
              type="text"
              value={content.image}
              onChange={handleChange}
              required
            />
            <FormInput
              name="imageDescription"
              label="image description"
              type="text"
              value={content.imageDescription}
              onChange={handleChange}
              required
            />
            <FormInput
              name="price"
              label="price"
              type="number"
              value={content.price}
              onChange={handleChange}
              required
            />

            <FormInput
              name="specialPrice"
              label="special offer price"
              type="number"
              value={content.specialPrice}
              onChange={handleChange}
              required
            />

            <div className="my-2 flex items-center gap-2">
              <input
                type="checkbox"
                name="perCouple"
                id="perCouple"
                checked={content.perCouple}
                onChange={() => {
                  setContent((prevContent) => ({
                    ...prevContent,
                    perCouple: !prevContent.perCouple,
                  }));
                }}
              />
              <label htmlFor="perCouple">Is this price for per couple ?</label>
            </div>

            <ParagraphsArray
              handleAddition={handleDescriptionAddition}
              paragraphs={content.description}
              title="add few paragraphs about the offer"
            />
            <FormInput
              name="sectionName"
              label="section name"
              type="text"
              value={content.sectionName}
              onChange={handleChange}
              required
            />

            <ParagraphsArray
              handleAddition={handleSectionDetails}
              paragraphs={content.sectionDetails}
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
          {data?.offers?.length == 0 && (
            <h2 className="align-section-center section-bg-white mb-8 p-4 text-xl capitalize">
              no offer has been added yet, Kindly add offers.
            </h2>
          )}
          <ul>
            {isLoading &&
              [0, 1, 2, 3].map((i) => {
                return (
                  <li
                    className="align-section-center section-bg-white my-2 flex h-8  items-center justify-between"
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
            {data?.offers.map((offer) => {
              return (
                <li
                  key={offer.id}
                  className="align-section-center section-bg-white my-4 flex items-center justify-between py-4"
                >
                  <p className="capitalize">{offer.name}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDelete(offer.id)}
                      className="grid  place-items-center"
                    >
                      <FaTrashCan className="text-red-500 duration-150 hover:text-red-700" />
                    </button>
                    <button
                      onClick={() => {
                        scrollTo("#offers", 150);
                        handleEdit(offer.id);
                      }}
                      className="grid  place-items-center"
                    >
                      <FaRegEdit className="text-green-500 duration-150 hover:text-green-700" />
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
