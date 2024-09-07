"use client";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { useEffect } from "react";
import type { MouseEventHandler } from "react";
import { CancelIcon } from "~/assets/svg";

export default function EnquiryModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup function to reset overflow
    };
  }, []);
  const handleContainerClick: MouseEventHandler<HTMLElement> = (e) => {
    const { target } = e;
    if (target instanceof HTMLElement) {
      const classList = target?.classList; // DOMTokenList
      if (classList.contains("container-element")) {
        closeModal();
      }
    }
  };
  return (
    <article
      className=" container-element fixed inset-0 z-[102]   overflow-y-auto bg-[rgb(0_0_0_/_40%)] "
      onClick={handleContainerClick}
    >
      <div className="sm-[85vw] mx-auto my-12 w-[90vw] grid-cols-2 sm:grid lg:w-[70vw]">
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725083141/Travel%20Town%202024/contact-form/pexels-olly-789822_spw6bb.jpg"
            }
            alt="Women talking in phone and smiling"
            width={300}
            height={600}
            className="hidden h-full w-full object-cover sm:block"
          />
        </div>
        <div className="relative rounded-md bg-white p-4 md:rounded-none">
          <button
            className="absolute right-2"
            onClick={closeModal}
            type="button"
          >
            <CancelIcon className="w-8 cursor-pointer duration-150 hover:scale-105" />
          </button>
          <ContactForm id="model" />
        </div>
      </div>
    </article>
  );
}
