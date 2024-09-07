"use client";
import { useState } from "react";
import { Button, FormInput, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/react";
import type { HomePageDetailsType } from "~/utils/types";
import toast from "react-hot-toast";

export default function HomePage({
  data,
}: {
  data: HomePageDetailsType | null;
}) {
  const [content, setContent] = useState<HomePageDetailsType>({
    video: data?.video ?? "",
    id: data?.id ?? "",
    titleDetails: data?.titleDetails ?? "",
    youtubeURL: data?.youtubeURL ?? "",
  });

  const { mutate: updateHomePage, isPending } =
    api.admin.updateHomePage.useMutation({
      onError(error) {
        if (error.data?.zodError?.fieldErrors.video) {
          error.data?.zodError?.fieldErrors.video.map((err) =>
            toast.error(err),
          );
          return null;
        }
        if (error.data?.zodError?.fieldErrors.titleDetails) {
          error.data?.zodError?.fieldErrors.titleDetails.map((err) =>
            toast.error(err),
          );
          return null;
        }
        toast.error("!Oops, There was an error, Try again");
      },
      onSuccess: async (data) => {
        toast.success(`successfully ${data.message}`);
        if (data) {
          setContent(data.updatedHomePage);
        }
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
    updateHomePage({
      video: content.video.trim(),
      id: content.id,
      titleDetails: content.titleDetails.trim(),
      youtubeURL: content.youtubeURL.trim(),
    });
  };

  return (
    <section>
      <div className="section-bg-white align-section-center mb-4 py-4">
        <SectionTitle title="home page details" adminSubTitle={true} />
        <form onSubmit={handleSubmit}>
          {!content.id && (
            <>
              <FormInput
                name="video"
                label="video URL"
                type="text"
                value={content.video}
                onChange={handleChange}
                required
              />
              <FormInput
                name="titleDetails"
                label="main page paragraph"
                type="text"
                value={content.titleDetails}
                onChange={handleChange}
                required
              />
              <FormInput
                name="youtubeURL"
                label="youTube video URL"
                type="text"
                value={content.youtubeURL}
                onChange={handleChange}
                required
              />
              <div className="my-2 flex justify-end">
                <Button text="add" type="submit" disabled={isPending} />
              </div>
            </>
          )}
          {content.id && (
            <>
              <FormInput
                name="video"
                label="video URL"
                type="text"
                value={content.video}
                onChange={handleChange}
                required
              />
              <FormInput
                name="titleDetails"
                label="main page paragraph"
                type="text"
                value={content.titleDetails}
                onChange={handleChange}
                required
              />
              <FormInput
                name="youtubeURL"
                label="youTube video URL"
                type="text"
                value={content.youtubeURL}
                onChange={handleChange}
                required
              />
              <div className="my-2 flex justify-end">
                <Button text="save" type="submit" disabled={isPending} />
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
