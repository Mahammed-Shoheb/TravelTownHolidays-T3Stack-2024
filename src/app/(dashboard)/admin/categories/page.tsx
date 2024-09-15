"use client";
import { Button, FormInput, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/react";
import { useEffect, useState } from "react";
import type { CategoryType } from "~/utils/types";
import { ParagraphsArray } from "~/app/_components/adminComponents";
import toast from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import scrollTo from "~/utils/scrollTo";

export default function Categories() {
  useEffect(() => {
    document.title = "Travel Town Holidays | admin | Categories";
  });
  const [content, setContent] = useState<CategoryType>({
    categoryName: "",
    categoryDescription: [],
    categoryImageURL: "",
    categoryImageDescription: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const {
    data,
    refetch,
    isLoading,
    isPending: initPending,
  } = api.admin.getCategories.useQuery();

  const { mutate: addCategory, isPending: addPending } =
    api.admin.addCategory.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.categoryName) {
          error.data?.zodError?.fieldErrors.categoryName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.categoryDescription) {
          error.data?.zodError?.fieldErrors.categoryDescription.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.categoryImageURL) {
          error.data?.zodError?.fieldErrors.categoryImageURL.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.categoryImageDescription) {
          error.data?.zodError?.fieldErrors.categoryImageDescription.map(
            (err) => toast.error(err),
          );
          return null;
        }
        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          categoryName: "",
          categoryDescription: [],
          categoryImageURL: "",
          categoryImageDescription: "",
        });
        toast.success(data?.message);
        void refetch();
      },
    });
  const { mutate: updateCategory, isPending: updatePending } =
    api.admin.updateCategory.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.categoryName) {
          error.data?.zodError?.fieldErrors.categoryName.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.categoryDescription) {
          error.data?.zodError?.fieldErrors.categoryDescription.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.categoryImageURL) {
          error.data?.zodError?.fieldErrors.categoryImageURL.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.categoryImageDescription) {
          error.data?.zodError?.fieldErrors.categoryImageDescription.map(
            (err) => toast.error(err),
          );
          return null;
        }
        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          categoryName: "",
          categoryDescription: [],
          categoryImageURL: "",
          categoryImageDescription: "",
        });
        setIsEditing(false);
        toast.success(data?.message);
        void refetch();
      },
    });

  const { mutate: deleteCategory } = api.admin.deleteCategory.useMutation({
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
    setContent((prevContent) => ({
      ...prevContent,
      categoryDescription: [...paragraph],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      updateCategory({
        id: content.id,
        categoryName: content.categoryName.trim().toLowerCase(),
        categoryDescription: content.categoryDescription,
        categoryImageURL: content.categoryImageURL.trim(),
        categoryImageDescription: content.categoryImageDescription.trim(),
      });
    } else {
      addCategory({
        categoryName: content.categoryName.trim().toLowerCase(),
        categoryDescription: content.categoryDescription,
        categoryImageURL: content.categoryImageURL.trim(),
        categoryImageDescription: content.categoryImageDescription.trim(),
      });
    }
  };

  const handleDelete = (id: string) => {
    deleteCategory({ id });
  };

  const handleCancel = () => {
    setContent({
      categoryName: "",
      categoryDescription: [],
      categoryImageURL: "",
      categoryImageDescription: "",
    });
    setIsEditing(false);
  };

  const handleEdit = (id: string) => {
    const category = data?.categories.find((category) => category.id === id);
    if (category) {
      setContent({
        id: category.id,
        categoryName: category.name,
        categoryDescription: category.description,
        categoryImageURL: category.image,
        categoryImageDescription: category.imageDescription,
      });
      setIsEditing(true);
    }
  };

  return (
    <main className="min-h-[80vh] py-16">
      <div className="align-section-center">
        <SectionTitle title="categories admin page" pageTitle={true} />
      </div>
      <section>
        <div className="align-section-center section-bg-white mb-4 py-4">
          <SectionTitle title="category" adminSubTitle={true} />
          <form onSubmit={handleSubmit} id="categories">
            <FormInput
              name="categoryName"
              type="text"
              label="name"
              value={content.categoryName}
              onChange={handleChange}
              required
            />
            <FormInput
              name="categoryImageURL"
              label="cloudinary image URL"
              type="text"
              value={content.categoryImageURL}
              onChange={handleChange}
              required
            />
            <FormInput
              name="categoryImageDescription"
              label="image description"
              type="text"
              value={content.categoryImageDescription}
              onChange={handleChange}
              required
            />
            <ParagraphsArray
              handleAddition={handleDescriptionAddition}
              paragraphs={content.categoryDescription}
              title="add few paragraphs about the category"
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
        {data?.categories?.length == 0 && (
          <h2 className="align-section-center section-bg-white mb-8 p-4 text-xl capitalize">
            no category has been added yet, Kindly add categories.
          </h2>
        )}
        <ul>
          {isLoading &&
            [0, 1, 2, 3].map((i) => {
              return (
                <li
                  className="align-section-center  section-bg-white my-4 flex h-8  items-center justify-between py-4"
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
          {data?.categories.map((category) => {
            return (
              <li
                key={category.id}
                className="align-section-center section-bg-white my-4 flex items-center justify-between py-4 "
              >
                <p className="font-semibold capitalize">{category.name}</p>
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() => handleDelete(category.id)}
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
                      scrollTo("#categories", 150);
                      handleEdit(category.id);
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
      </section>
    </main>
  );
}
