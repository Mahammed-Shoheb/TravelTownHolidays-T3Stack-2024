"use client";
import { useModal } from "./context/ModalContext";

export default function EnquireButton({
  homePage = false,
}: {
  homePage?: boolean;
}) {
  const { openModal } = useModal();
  if (homePage) {
    return (
      <button
        type="button"
        className={`rounded-br-md bg-blue-700 px-2 py-1 text-center font-semibold uppercase tracking-wider duration-150 hover:bg-blue-600 sm:rounded-e-full md:px-4 md:py-2`}
        onClick={openModal}
      >
        enquire now
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`rounded-md bg-blue-700 px-4 py-2 text-center  text-sm font-semibold uppercase tracking-wider text-white hover:bg-blue-600`}
      onClick={openModal}
    >
      enquire now
    </button>
  );
}
