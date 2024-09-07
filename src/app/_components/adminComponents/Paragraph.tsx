"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Paragraph({
  id,
  paragraph,
  handleRemove,
}: {
  id: string;
  paragraph: string;
  handleRemove: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <li
      className="relative flex items-center justify-between rounded-md border bg-blue-100 px-2 py-1"
      key={id}
      ref={setNodeRef}
      style={style}
    >
      <p className="flex w-full break-all" {...attributes} {...listeners}>
        {paragraph}
      </p>
      <span>
        <FaTimes
          onClick={() => handleRemove(id)}
          className="cursor-pointer text-lg text-red-500 delay-75 hover:animate-spin hover:text-red-600"
        />
      </span>
    </li>
  );
}
