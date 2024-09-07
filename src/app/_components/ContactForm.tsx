"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { usePathname } from "next/navigation";
import { api } from "~/trpc/react";
import { WhatsAppIcon } from "~/assets/svg";

type FormContent = {
  name: string;
  number: string;
  category: string;
  email: string;
  date: string;
  numberOfPax: string;
  requirements: string;
};

export default function ContactForm({
  id,
  styles,
}: {
  id?: string;
  styles?: string;
}) {
  const [formContent, setFormContent] = useState<FormContent>({
    name: "",
    category: "",
    email: "",
    number: "",
    date: "",
    numberOfPax: "",
    requirements: "",
  });

  const { data } = api.client.getFormCategories.useQuery();
  useEffect(() => {
    setFormContent((prev) => ({
      ...prev,
      category: data?.newCategories[0] ?? "",
    }));
  }, [data]);

  const path = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormContent((prevContent) => ({
      ...prevContent,
      [e.target.name]: e.target.value,
    }));
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormContent((prevContent) => ({
      ...prevContent,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSelectInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormContent((prevContent) => ({
      ...prevContent,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `https://wa.me/919686879898?text=Hello! Travel Town Holidays Team,%0a%0aI noticed your enticing holiday packages online and would love to get more information.%0a%0a Webpage URL: https://traveltownholidays.com${path}%0a${Object.entries(
      formContent,
    )
      .map((content) => {
        if (content[0] == "numberOfPax") {
          return `%0aNumber Of People: ${content[1]}`;
        }
        return `%0a${content[0].charAt(0).toUpperCase()}${content[0].slice(
          1,
        )}: ${content[1]}`;
      })
      .join(
        "",
      )} %0a%0aI'm hoping someone can get in touch with me.%0a%0aMuch appreciated.`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <form className={`px-4 ${styles}`} onSubmit={handleSubmit}>
      <h1 className="mb-6 text-xl font-semibold capitalize md:text-2xl">
        We appreciate your cooperation
      </h1>
      <div className=" mb-4">
        <div className="grid gap-2 sm:grid-cols-3 ">
          <FormInput
            name="name"
            type="text"
            required
            id={id}
            value={formContent.name}
            onChange={handleChange}
          />
          <FormInput
            name="number"
            type="tel"
            required
            id={id}
            value={formContent.number}
            onChange={handleChange}
          />
          <SelectInput
            name="category"
            label="select the category"
            id={id}
            value={formContent.category}
            onChange={handleSelectInputChange}
            options={data?.newCategories ?? []}
          />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <FormInput
            name="email"
            type="email"
            label="email"
            required
            id={id}
            value={formContent.email}
            onChange={handleChange}
          />
          <FormInput
            name="date"
            type="date"
            label="travel date"
            id={id}
            value={formContent.date}
            onChange={handleChange}
          />
        </div>
        <FormInput
          name="numberOfPax"
          type="numberOfPax"
          label="number of pax (ex:2 Adults & 1 Kid)"
          id={id}
          value={formContent.numberOfPax}
          onChange={handleChange}
        />
        <TextInput
          name="requirements"
          id={id}
          label="special requirement"
          value={formContent.requirements}
          onChange={handleTextAreaChange}
        />
      </div>
      <div className="flex justify-end">
        <Button
          text="submit"
          type="submit"
          icon={<WhatsAppIcon className="w-5" />}
        />
      </div>
    </form>
  );
}
