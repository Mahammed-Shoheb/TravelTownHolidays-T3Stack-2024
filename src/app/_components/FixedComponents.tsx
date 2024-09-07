"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BiSolidOffer, BiSolidPhoneCall } from "react-icons/bi";
import { RiHomeHeartLine } from "react-icons/ri";

import { FaWpforms } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useModal } from "./context/ModalContext";
import EnquiryFormContainer from "./EnquiryFormContainer";

export default function FixedComponents() {
  const { openModal } = useModal();
  const path = usePathname();

  return (
    <>
      <div className="fixed -right-40 top-[60%] z-[100] hidden rotate-90  justify-evenly gap-2  capitalize md:flex">
        <Link
          href="/offers"
          className="flex items-center justify-center gap-2 bg-teal-700 px-4 py-3 font-semibold text-white  shadow-sm shadow-slate-900 hover:bg-orange-500"
        >
          <span className="grid place-items-center text-lg">
            <BiSolidOffer />
          </span>
          <span>offers</span>
        </Link>
        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-cyan-700 px-2 py-3 font-semibold text-white  shadow-sm shadow-slate-900 hover:bg-amber-500"
          onClick={openModal}
        >
          <span className="grid place-items-center text-lg">
            <FaWpforms />
          </span>
          <span className="capitalize">send enquiry</span>
        </button>
        <a
          href={`https://wa.me/919686879898?text=Hi Travel Town Holidays Team,%0a%0a Webpage URL: https://traveltownholidays.com${path}.%0a%0aI recently came across your Holiday packages on your website. I'm particularly interested in one of the offers and would love to discuss the details further. Could someone please reach out to me?.%0a%0aThank you!`}
          className="flex items-center justify-center gap-2 bg-green-700 px-2 py-3 font-semibold text-white shadow-sm shadow-slate-900 hover:bg-slate-800"
          target="_blank"
          rel="noreferrer"
        >
          <span className="grid place-items-center text-lg">
            <FaWhatsapp />
          </span>
          <span>whatsApp</span>
        </a>
      </div>

      <div className="fixed bottom-0 z-[100] flex w-full items-center  justify-evenly bg-slate-100 py-2 capitalize md:hidden">
        <Link
          href="/"
          className="flex flex-col items-center justify-center hover:text-sky-900"
        >
          <span className="text-2xl">
            <RiHomeHeartLine />
          </span>
          <span className="text-sm">home</span>
        </Link>
        <a
          href="tel:+919686879898"
          className="flex flex-col items-center justify-center hover:text-sky-900"
        >
          <span className="text-2xl">
            <BiSolidPhoneCall />
          </span>
          <span className="text-sm">call</span>
        </a>
        <a
          href={`https://wa.me/919686879898?text=Hi Travel Town Holidays Team,%0a%0a Webpage URL: https://traveltownholidays.com${path}.%0a%0aI recently came across your Holiday packages on your website. I'm particularly interested in one of the offers and would love to discuss the details further. Could someone please reach out to me?.%0a%0aThank you!`}
          className="flex flex-col items-center justify-center hover:text-sky-900"
          target="_blank"
        >
          <span className="text-2xl">
            <FaWhatsapp />
          </span>
          <span className="text-sm">whatsApp</span>
        </a>
        <Link
          href="/offers"
          className="flex flex-col items-center justify-center hover:text-sky-900"
        >
          <span className="grid place-items-center text-lg">
            <BiSolidOffer className="text-2xl" />
          </span>
          <span className="text-sm">offers</span>
        </Link>
        <button
          className="flex flex-col items-center justify-center hover:text-sky-900"
          onClick={openModal}
        >
          <span className="text-2xl">
            <FaWpforms />
          </span>
          <span className="text-sm">enquiry</span>
        </button>
      </div>
      <EnquiryFormContainer />
    </>
  );
}
