"use client";

import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

type Props = {
  name: string;
  closeModel: () => void;
  confirmDelete: () => void;
};

export default function ConfirmationModel({
  name,
  closeModel,
  confirmDelete,
}: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup function to reset overflow
    };
  }, []);
  return (
    <div className="fixed inset-0 z-[102] grid h-screen w-screen place-items-center bg-black/25">
      <div className="relative rounded-md bg-white px-8 py-4">
        <h3 className="text-xl">Are you sure you want to delete this ?</h3>
        <p className="mb-16 max-w-[25rem]">
          By deleting this you will delete all the associated {name}
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={confirmDelete}
            type="button"
            className="flex items-center gap-1 rounded-md border bg-red-600 px-2 py-1 text-sm font-semibold uppercase text-white duration-150 hover:bg-red-500"
          >
            confirm
          </button>
          <button
            onClick={closeModel}
            type="button"
            className="flex items-center gap-1 rounded-md border bg-green-600 px-2 py-1 text-sm font-semibold uppercase text-white duration-150 hover:bg-green-500"
          >
            cancel
          </button>
        </div>
        <button
          type="button"
          onClick={closeModel}
          className="absolute right-2 top-2 border-none bg-transparent text-xl text-red-600 hover:text-red-500"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
