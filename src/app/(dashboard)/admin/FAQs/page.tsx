"use client";
import { Button, FormInput, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/react";
import { FaTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import type { FaqType } from "~/utils/types";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import scrollTo from "~/utils/scrollTo";
import { ParagraphsArray } from "~/app/_components/adminComponents";

export default function FAQs() {
  useEffect(() => {
    document.title = "Travel Town Holidays | Admin | FAQs";
  });
  const [content, setContent] = useState<FaqType>({
    question: "",
    answer: [],
  });
  const {
    data,
    refetch,
    isLoading,
    isPending: initPending,
  } = api.admin.getFAQs.useQuery();

  const [isEditing, setIsEditing] = useState(false);

  const { mutate: addFAQs, isPending: addPending } =
    api.admin.addFAQs.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.question) {
          error.data?.zodError?.fieldErrors.question.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.answer) {
          error.data?.zodError?.fieldErrors.answer.map((err) =>
            toast.error(err),
          );
          return null;
        }
        toast.error(error.message);
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        setContent({
          question: "",
          answer: [],
        });
        if (data) toast.success(data.message);
        void refetch();
      },
    });

  const { mutate: updateFAQs, isPending: updatePending } =
    api.admin.updateFAQs.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.question) {
          error.data?.zodError?.fieldErrors.question.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.answer) {
          error.data?.zodError?.fieldErrors.answer.map((err) =>
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
          question: "",
          answer: [],
        });
        toast.success(data.message);
        void refetch();
      },
    });

  const { mutate: deleteFAQs } = api.admin.deleteFAQs.useMutation({
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
      updateFAQs({
        id: content.id,
        question: content.question.trim(),
        answer: content.answer,
      });
    } else {
      addFAQs({
        question: content.question.trim(),
        answer: content.answer,
      });
    }
  };

  const handleAnswerAddition = (paragraph: string[]) => {
    setContent((prevContent) => ({
      ...prevContent,
      answer: [...paragraph],
    }));
  };

  const handleDelete = (id: string) => {
    deleteFAQs({ id });
  };

  const handleCancel = () => {
    setContent({
      question: "",
      answer: [],
    });
    setIsEditing(false);
  };

  const handleEdit = (id: string) => {
    const faq = data?.FAQs.find((faq) => faq.id === id);
    if (faq) {
      setContent({
        id: faq.id,
        question: faq.question,
        answer: faq.answer,
      });
      setIsEditing(true);
    }
  };

  return (
    <main className="min-h-[80vh] py-16">
      <div className="align-section-center">
        <SectionTitle title="FAQs admin page" pageTitle={true} />
      </div>
      <section>
        <div className="align-section-center section-bg-white mb-4 py-4">
          <SectionTitle title="Faqs Images" adminSubTitle={true} />
          <form onSubmit={handleSubmit} id="faqs">
            <FormInput
              name="question"
              label="question"
              type="text"
              value={content.question}
              onChange={handleChange}
              required
            />
            <ParagraphsArray
              handleAddition={handleAnswerAddition}
              paragraphs={content.answer}
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
        <div>
          {data?.FAQs?.length == 0 && (
            <h2 className="align-section-center section-bg-white mb-8 p-4 text-xl capitalize">
              no FAQs have been added yet, Kindly add FAQs.
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
            {data?.FAQs.map((content) => {
              return (
                <li
                  key={content.id}
                  className="align-section-center section-bg-white my-2 flex flex-col px-2  py-2"
                >
                  <div className="flex items-center justify-between gap-1">
                    <p className="break-all font-semibold">
                      {content.question}
                    </p>
                    <div className="flex items-center gap-6">
                      <button
                        type="button"
                        onClick={() => handleDelete(content.id)}
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
                          scrollTo("#faqs", 150);
                          handleEdit(content.id);
                        }}
                        className="flex items-center gap-1 rounded-md border bg-green-600 px-2 py-1 text-sm font-semibold uppercase text-white duration-150 hover:bg-green-500"
                      >
                        <span>edit</span>
                        <span>
                          <FaRegEdit />
                        </span>
                      </button>
                    </div>
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
