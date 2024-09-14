"use client";
import { Button, FormInput, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/react";
import { useState } from "react";
import type { PackageType } from "~/utils/types";
import ParagraphsArray from "./ParagraphsArray";
import AddPackageItinerary from "./AddPackageItinerary";
import AddPackageDetails from "./AddPacKageDetails";
import toast from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import scrollTo from "~/utils/scrollTo";

type Details = {
  sectionName: string;
  sectionDetails: string[];
  displayList: boolean;
};

type Itinerary = {
  day: number;
  details: string[];
  title: string;
};

export default function AddPackage() {
  const [content, setContent] = useState<PackageType>({
    packageName: "",
    packagePrice: 0,
    packageIsPerCouple: false,
    packagePlaces: "",
    packageDays: "",
    packageImageURL: "",
    packageImageDescription: "",
    packageDestination: "",
    PackageCategories: [],
    packageDetails: [],
    packageItinerary: [],
    flightIcon: false,
    hotelsIcon: false,
    mealPlanIcon: false,
    transfersIcon: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const {
    data,
    refetch,
    isLoading,
    isPending: initPending,
  } = api.admin.getPackages.useQuery();

  const { mutate: addPackage, isPending: addPending } =
    api.admin.addPackage.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.packageName) {
          error.data?.zodError?.fieldErrors.packageName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packagePrice) {
          error.data?.zodError?.fieldErrors.packagePrice.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packagePlaces) {
          error.data?.zodError?.fieldErrors.packagePlaces.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageDays) {
          error.data?.zodError?.fieldErrors.packageDays.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageImageURL) {
          error.data?.zodError?.fieldErrors.packageImageURL.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageImageDescription) {
          error.data?.zodError?.fieldErrors.packageImageDescription.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageDestination) {
          error.data?.zodError?.fieldErrors.packageDestination.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.PackageCategories) {
          error.data?.zodError?.fieldErrors.PackageCategories.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageDetails) {
          error.data?.zodError?.fieldErrors.packageDetails.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageItinerary) {
          error.data?.zodError?.fieldErrors.packageItinerary.map((err) =>
            toast.error(err),
          );
          return null;
        }
        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          packageName: "",
          packagePrice: 0,
          packageIsPerCouple: false,
          packagePlaces: "",
          packageDays: "",
          packageImageURL: "",
          packageImageDescription: "",
          packageDestination: "",
          PackageCategories: [],
          packageDetails: [],
          packageItinerary: [],
          flightIcon: false,
          hotelsIcon: false,
          mealPlanIcon: false,
          transfersIcon: false,
        });

        void refetch();
        toast.success(data.message);
      },
    });
  const { mutate: updatePackage, isPending: updatePending } =
    api.admin.updatePackage.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.packageName) {
          error.data?.zodError?.fieldErrors.packageName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packagePrice) {
          error.data?.zodError?.fieldErrors.packagePrice.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packagePlaces) {
          error.data?.zodError?.fieldErrors.packagePlaces.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageDays) {
          error.data?.zodError?.fieldErrors.packageDays.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageImageURL) {
          error.data?.zodError?.fieldErrors.packageImageURL.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageImageDescription) {
          error.data?.zodError?.fieldErrors.packageImageDescription.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageDestination) {
          error.data?.zodError?.fieldErrors.packageDestination.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.PackageCategories) {
          error.data?.zodError?.fieldErrors.PackageCategories.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageDetails) {
          error.data?.zodError?.fieldErrors.packageDetails.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.packageItinerary) {
          error.data?.zodError?.fieldErrors.packageItinerary.map((err) =>
            toast.error(err),
          );
          return null;
        }
        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          packageName: "",
          packagePrice: 0,
          packageIsPerCouple: false,
          packagePlaces: "",
          packageDays: "",
          packageImageURL: "",
          packageImageDescription: "",
          packageDestination: "",
          PackageCategories: [],
          packageDetails: [],
          packageItinerary: [],
          flightIcon: false,
          hotelsIcon: false,
          mealPlanIcon: false,
          transfersIcon: false,
        });
        void refetch();
        setIsEditing(false);
        toast.success(data.message);
      },
    });
  const { mutate: deletePackage } = api.admin.deletePackage.useMutation({
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

  const handleCategoriesAddition = (paragraph: string[]) => {
    if (paragraph.length) {
      setContent((prevContent) => ({
        ...prevContent,
        PackageCategories: [...paragraph],
      }));
    }
  };

  const handleDetailsAddition = (details: Details) => {
    if (details) {
      setContent((prevContent) => ({
        ...prevContent,
        packageDetails: [...prevContent.packageDetails, details],
      }));
    }
  };
  const handleDetailsEdit = (details: Details) => {
    if (details) {
      setContent((prevContent) => ({
        ...prevContent,
        packageDetails: [
          ...prevContent.packageDetails.map((detail) => {
            if (detail.sectionName === details.sectionName) {
              return {
                ...detail,
                ...details,
              };
            }
            return detail;
          }),
        ],
      }));
    }
  };

  const handleDetailsRemove = (index: number) => {
    setContent((prevContent) => ({
      ...prevContent,
      packageDetails: [
        ...prevContent.packageDetails.filter((_, i) => i !== index),
      ],
    }));
  };
  const handleItineraryAddition = (itinerary: Itinerary) => {
    if (itinerary) {
      setContent((prevContent) => ({
        ...prevContent,
        packageItinerary: [...prevContent.packageItinerary, itinerary],
      }));
    }
  };
  const handleItineraryEdit = (itinerary: Itinerary) => {
    if (itinerary) {
      setContent((prevContent) => ({
        ...prevContent,
        packageItinerary: [
          ...prevContent.packageItinerary.map((dayDetail) => {
            if (dayDetail.day === itinerary.day) {
              return {
                ...dayDetail,
                ...itinerary,
              };
            }
            return dayDetail;
          }),
        ],
      }));
    }
  };

  const handleItineraryRemove = (index: number) => {
    setContent((prevContent) => ({
      ...prevContent,
      packageItinerary: [
        ...prevContent.packageItinerary.filter((_, i) => i !== index),
      ],
    }));
  };

  const handleCancel = () => {
    setContent({
      packageName: "",
      packagePrice: 0,
      packageIsPerCouple: false,
      packagePlaces: "",
      packageDays: "",
      packageImageURL: "",
      packageImageDescription: "",
      packageDestination: "",
      PackageCategories: [],
      packageDetails: [],
      packageItinerary: [],
      flightIcon: false,
      hotelsIcon: false,
      mealPlanIcon: false,
      transfersIcon: false,
    });
    setIsEditing(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      updatePackage({
        id: content.id,
        packageName: content.packageName.trim().toLowerCase(),
        packagePrice: Number(content.packagePrice),
        packageIsPerCouple: content.packageIsPerCouple,
        packagePlaces: content.packagePlaces.trim(),
        packageDays: content.packageDays.trim(),
        packageImageURL: content.packageImageURL.trim(),
        packageImageDescription: content.packageImageDescription.trim(),
        packageDestination: content.packageDestination.trim().toLowerCase(),
        PackageCategories: content.PackageCategories,
        packageDetails: content.packageDetails,
        packageItinerary: content.packageItinerary,
        flightIcon: content.flightIcon,
        hotelsIcon: content.hotelsIcon,
        mealPlanIcon: content.mealPlanIcon,
        transfersIcon: content.transfersIcon,
      });
    } else {
      addPackage({
        packageName: content.packageName.trim().toLowerCase(),
        packagePrice: Number(content.packagePrice),
        packageIsPerCouple: content.packageIsPerCouple,
        packagePlaces: content.packagePlaces.trim(),
        packageDays: content.packageDays.trim(),
        packageImageURL: content.packageImageURL.trim(),
        packageImageDescription: content.packageImageDescription.trim(),
        packageDestination: content.packageDestination.trim().toLowerCase(),
        PackageCategories: content.PackageCategories,
        packageDetails: content.packageDetails,
        packageItinerary: content.packageItinerary,
        flightIcon: content.flightIcon,
        hotelsIcon: content.hotelsIcon,
        mealPlanIcon: content.mealPlanIcon,
        transfersIcon: content.transfersIcon,
      });
    }
  };

  const handleDelete = (id: string) => {
    deletePackage({ id });
  };

  const handleEdit = (id: string) => {
    const packageDetail = data?.packages.find(
      (packageDetail) => packageDetail.id === id,
    );
    if (packageDetail) {
      setContent({
        id: packageDetail.id,
        packageName: packageDetail.name,
        packagePrice: packageDetail.price,
        packageIsPerCouple: packageDetail.perCouple,
        packagePlaces: packageDetail.places,
        packageDays: packageDetail.days,
        packageImageURL: packageDetail.image,
        packageImageDescription: packageDetail.imageDescription,
        packageDestination: packageDetail.destination.name,
        PackageCategories: packageDetail.categories.map(
          (category) => category.name,
        ),
        packageDetails: packageDetail.details,
        packageItinerary: packageDetail.itinerary,
        flightIcon: packageDetail.flightIcon,
        hotelsIcon: packageDetail.hotelsIcon,
        mealPlanIcon: packageDetail.mealPlanIcon,
        transfersIcon: packageDetail.transfersIcon,
      });
      setIsEditing(true);
    }
  };

  return (
    <main>
      <section>
        <div className="align-section-center section-bg-white mb-4 py-4">
          <SectionTitle title="add package" adminSubTitle={true} />
          <form onSubmit={handleSubmit} id="package">
            <FormInput
              name="packageName"
              type="text"
              label="name"
              value={content.packageName}
              onChange={handleChange}
              required
            />
            <FormInput
              name="packagePrice"
              type="number"
              label="price"
              value={content.packagePrice}
              onChange={handleChange}
              required
            />
            <div className="my-2 flex items-center gap-2">
              <input
                type="checkbox"
                name="packageIsPerCouple"
                id="packageIsPerCouple"
                checked={content.packageIsPerCouple}
                onChange={() => {
                  setContent((prevContent) => ({
                    ...prevContent,
                    packageIsPerCouple: !prevContent.packageIsPerCouple,
                  }));
                }}
              />
              <label htmlFor="packageIsPerCouple">
                Is this price for per couple ?
              </label>
            </div>
            <FormInput
              name="packagePlaces"
              label="Places"
              type="text"
              value={content.packagePlaces}
              onChange={handleChange}
              required
            />
            <FormInput
              name="packageDays"
              label="days"
              type="text"
              value={content.packageDays}
              onChange={handleChange}
              required
            />
            <FormInput
              name="packageImageURL"
              label="ImageURL"
              type="text"
              value={content.packageImageURL}
              onChange={handleChange}
              required
            />
            <FormInput
              name="packageImageDescription"
              label="Image Description"
              type="text"
              value={content.packageImageDescription}
              onChange={handleChange}
              required
            />
            <FormInput
              name="packageDestination"
              label="Destination city with which you want to associate this with"
              type="text"
              value={content.packageDestination}
              onChange={handleChange}
              required
            />
            <ParagraphsArray
              handleAddition={handleCategoriesAddition}
              paragraphs={content.PackageCategories}
              title="add the category name with which you want to associate this with"
            />
            <AddPackageDetails
              handleAddition={handleDetailsAddition}
              handleRemove={handleDetailsRemove}
              handleEdit={handleDetailsEdit}
              details={content.packageDetails}
              title="add few package details(ex: overview, inclusions)"
            />
            <AddPackageItinerary
              handleAddition={handleItineraryAddition}
              handleRemove={handleItineraryRemove}
              handleEdit={handleItineraryEdit}
              itinerary={content.packageItinerary}
              title="Itinerary"
            />

            <fieldset className="border-2 border-slate-950 p-2">
              <legend>Select the icons to be displayed</legend>
              <div className="my-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="flightIcon"
                  id="flightIcon"
                  checked={content.flightIcon}
                  onChange={() => {
                    setContent((prevContent) => ({
                      ...prevContent,
                      flightIcon: !prevContent.flightIcon,
                    }));
                  }}
                />
                <label htmlFor="flightIcon">Flight Icon</label>
              </div>
              <div className="my-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="hotelsIcon"
                  id="hotelsIcon"
                  checked={content.hotelsIcon}
                  onChange={() => {
                    setContent((prevContent) => ({
                      ...prevContent,
                      hotelsIcon: !prevContent.hotelsIcon,
                    }));
                  }}
                />
                <label htmlFor="hotelsIcon">hotel Icon</label>
              </div>
              <div className="my-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="mealPlanIcon"
                  id="mealPlanIcon"
                  checked={content.mealPlanIcon}
                  onChange={() => {
                    setContent((prevContent) => ({
                      ...prevContent,
                      mealPlanIcon: !prevContent.mealPlanIcon,
                    }));
                  }}
                />
                <label htmlFor="mealPlanIcon">Meal Plan Icon</label>
              </div>
              <div className="my-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="transfersIcon"
                  id="transfersIcon"
                  checked={content.transfersIcon}
                  onChange={() => {
                    setContent((prevContent) => ({
                      ...prevContent,
                      transfersIcon: !prevContent.transfersIcon,
                    }));
                  }}
                />
                <label htmlFor="transfersIcon">Transfers Icon</label>
              </div>
            </fieldset>
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
          {data?.packages?.length == 0 && (
            <h2 className="align-section-center section-bg-white mb-8 p-4 text-xl capitalize">
              no package has been added yet, Kindly add packages.
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
            {data?.packages.map((packageDetail) => {
              return (
                <li
                  key={packageDetail.id}
                  className="align-section-center section-bg-white my-4 flex items-center justify-between py-4"
                >
                  <p className="font-semibold capitalize">
                    {packageDetail.name}
                  </p>
                  <div className="flex items-center gap-6">
                    <button
                      type="button"
                      onClick={() => handleDelete(packageDetail.id)}
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
                        scrollTo("#package", 150);
                        handleEdit(packageDetail.id);
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
