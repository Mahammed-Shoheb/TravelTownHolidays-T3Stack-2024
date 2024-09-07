"use client";
import { Button, FormInput, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/react";
import { FaTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import type { ReviewsType } from "~/utils/types";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import scrollTo from "~/utils/scrollTo";

export default function Reviews() {
  useEffect(() => {
    document.title = "Travel Town Holidays | Admin | Reviews";
  });
  const [content, setContent] = useState<ReviewsType>({
    imageURL: "",
    imageDescription: "",
    personName: "",
    review: "",
  });
  const {
    data,
    refetch,
    isLoading,
    isPending: initPending,
  } = api.admin.getReviews.useQuery();

  const [isEditing, setIsEditing] = useState(false);

  const { mutate: addReview, isPending: addPending } =
    api.admin.addReview.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.imageURL) {
          error.data?.zodError?.fieldErrors.imageURL.map((err) =>
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
        if (error.data?.zodError?.fieldErrors.personName) {
          error.data?.zodError?.fieldErrors.personName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.review) {
          error.data?.zodError?.fieldErrors.review.map((err) =>
            toast.error(err),
          );
          return null;
        }
        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          imageURL: "",
          imageDescription: "",
          personName: "",
          review: "",
        });
        toast.success(data.message);
        void refetch();
      },
    });

  const { mutate: updateReview, isPending: updatePending } =
    api.admin.updateReview.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.imageURL) {
          error.data?.zodError?.fieldErrors.imageURL.map((err) =>
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
        if (error.data?.zodError?.fieldErrors.personName) {
          error.data?.zodError?.fieldErrors.personName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.review) {
          error.data?.zodError?.fieldErrors.review.map((err) =>
            toast.error(err),
          );
          return null;
        }
        setIsEditing(false);
        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          imageURL: "",
          imageDescription: "",
          personName: "",
          review: "",
        });
        toast.success(data.message);
        void refetch();
      },
    });

  const { mutate: deleteReview } = api.admin.deleteReview.useMutation({
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(isEditing);

    if (isEditing) {
      updateReview({
        id: content.id,
        imageURL: content.imageURL.trim(),
        imageDescription: content.imageDescription.trim(),
        personName: content.personName.trim(),
        review: content.review.trim(),
      });
    } else {
      addReview({
        imageURL: content.imageURL.trim(),
        imageDescription: content.imageDescription.trim(),
        personName: content.personName.trim(),
        review: content.review.trim(),
      });
    }
  };

  const handleDelete = (id: string) => {
    deleteReview({ id });
  };

  const handleCancel = () => {
    setContent({
      imageURL: "",
      imageDescription: "",
      personName: "",
      review: "",
    });
    setIsEditing(false);
  };

  const handleEdit = (id: string) => {
    const review = data?.reviews.find((review) => review.id === id);
    if (review) {
      setContent({
        id: review.id,
        imageURL: review.image,
        imageDescription: review.imageDescription,
        personName: review.personName,
        review: review.review,
      });
      setIsEditing(true);
    }
  };

  return (
    <main className="min-h-[80vh] py-16">
      <div className="align-section-center">
        <SectionTitle title="reviews admin page" pageTitle={true} />
      </div>
      <section>
        <div className="align-section-center section-bg-white mb-4 py-4">
          <SectionTitle title="Review Images" adminSubTitle={true} />
          <form onSubmit={handleSubmit} id="review">
            <FormInput
              name="personName"
              label="name of the person"
              type="text"
              value={content.personName}
              onChange={handleChange}
              required
            />
            <FormInput
              name="review"
              label="review"
              type="text"
              value={content.review}
              onChange={handleChange}
              required
            />
            <FormInput
              name="imageURL"
              label="cloudinary image URL"
              type="text"
              value={content.imageURL}
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
      </section>
      <section>
        <div>
          {data?.reviews?.length == 0 && (
            <h2 className="align-section-center section-bg-white mb-8 p-4 text-xl capitalize">
              no review has been added yet, Kindly add reviews.
            </h2>
          )}
          <ul>
            {isLoading &&
              [0, 1, 2, 3].map((i) => {
                return (
                  <li
                    className=" align-section-center section-bg-white my-4 flex flex-col gap-1 px-2  py-2"
                    key={i}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <div className="h-4 w-36 animate-pulse rounded-md bg-gray-200"></div>
                      <span className="h-4 w-4 animate-pulse  bg-gray-200"></span>
                    </div>
                    <div className="h-4 w-36 animate-pulse rounded-md bg-gray-200"></div>
                  </li>
                );
              })}
            {data?.reviews.map((content) => {
              return (
                <li
                  key={content.id}
                  className="align-section-center section-bg-white my-2 flex flex-col px-2  py-2"
                >
                  <div className="flex items-center justify-between gap-1">
                    <p className="break-all text-xl">{content.personName}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDelete(content.id)}
                        className="grid  place-items-center"
                      >
                        <FaTrashCan className="text-red-500 duration-150 hover:text-red-700" />
                      </button>
                      <button
                        onClick={() => {
                          scrollTo("#review", 150);
                          handleEdit(content.id);
                        }}
                        className="grid  place-items-center"
                      >
                        <FaRegEdit className="text-green-500 duration-150 hover:text-green-700" />
                      </button>
                    </div>
                  </div>
                  <p className="break-all">{content.review}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
