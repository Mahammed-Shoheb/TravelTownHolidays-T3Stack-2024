"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import type { RouterOutputs } from "~/trpc/react";
import formatLinks from "~/utils/formatLinks";
import {
  LocationIcon,
  PhoneIcon,
  Instagram,
  FaceBook,
  Gmail,
  TwentyFourSevenIcon,
  CopyrightIcon,
} from "~/assets/svg";

type FooterLinks = RouterOutputs["client"]["getFooterLinks"];

export default function Footer({ footerLinks }: { footerLinks: FooterLinks }) {
  const path = usePathname();
  return (
    <footer className="bg-cont relative mb-14 flex h-[85rem] items-end bg-[url('https://res.cloudinary.com/dp2hek0t3/image/upload/v1725678603/Travel%20Town%202024/Home%20Page%20images/hot-air-balloon-2599511_1920_virvl5.jpg')] bg-cover bg-center bg-no-repeat pt-28 text-white md:mb-0  md:h-[50rem]">
      <div className="absolute top-0 w-full lg:-top-8">
        <p
          aria-hidden="true"
          role="presentation"
          className="text-center font-serif text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[7.5rem]"
        >
          <span role="presentation" aria-hidden="true">
            Travel Town Holidays
          </span>
        </p>
      </div>

      <div className="w-full bg-slate-900/60  backdrop-blur-sm backdrop-filter">
        <div className="align-section-center overflow-hidden py-16">
          <div className="grid gap-4 md:grid-cols-5">
            {/* address */}
            <div className="flex flex-col gap-2">
              <Link href={"/"}>
                <Logo footer />
              </Link>
              <div>
                <p className="mb-4">
                  <span className="font-semibold">GST Reg.No:</span>{" "}
                  29FPEPS0892N1ZY
                </p>
                <div className="flex flex-col gap-4 ">
                  <p className="flex items-center gap-2 font-semibold">
                    <span className="w-12">
                      <TwentyFourSevenIcon />
                    </span>
                    <span> We are available 24x7 Mon-Sun</span>
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="flex gap-2 font-semibold capitalize">
                        <span className="">
                          <Gmail className="w-6" />
                        </span>
                        email ID:
                      </h3>
                      <a
                        href="mailto:info@traveltownholidays.com"
                        className="hover:text-blue-500"
                      >
                        info@traveltownholidays.com
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="flex gap-2 font-semibold capitalize">
                        <span className="w-6">
                          <PhoneIcon />
                        </span>
                        phone number:
                      </h3>
                      <div className="flex flex-col gap-2 text-xs">
                        <a
                          href="tel:+919686879898"
                          className="hover:text-blue-500"
                        >
                          +919686879898,
                        </a>
                        <a
                          href="tel:+918971882060"
                          className="hover:text-blue-500"
                        >
                          +918971882060
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* about company */}
            <div className="py-2 capitalize">
              <h3 className="mb-6 border-b-2 border-blue-600 pb-2 text-xl font-bold">
                about company
              </h3>
              <ul className="flex flex-wrap gap-4 lg:flex-col">
                <li>
                  <Link
                    href="/about"
                    className={`hover:text-blue-600 ${path == "/about" && "text-lg font-bold text-blue-500"}`}
                  >
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`hover:text-blue-600 ${path == "/contact" && "text-lg font-bold text-blue-500"}`}
                  >
                    contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cancellation"
                    className={`hover:text-blue-600 ${path == "/cancellation" && "text-lg font-bold text-blue-500"}`}
                  >
                    cancellation policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className={`hover:text-blue-600 ${path == "/privacy" && "text-lg font-bold text-blue-500"}`}
                  >
                    privacy policy
                  </Link>
                </li>
              </ul>
            </div>
            {/* Featured */}
            <div className=" py-2 capitalize">
              <h3 className="mb-6 border-b-2 border-b-blue-500 pb-2 text-xl font-bold">
                Featured
              </h3>
              <ul className="flex flex-wrap gap-4 lg:flex-col">
                {footerLinks.featured?.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link
                        href={`/destination/${formatLinks(link.name.toLowerCase())}`}
                        className={`hover:text-blue-600 ${path == link.name && "text-lg font-bold text-blue-500"}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* packages */}
            <div className="py-2 capitalize">
              <h3 className="mb-6 border-b-2 border-b-blue-500 pb-2 text-xl font-bold">
                packages
              </h3>
              <ul className="flex flex-wrap gap-4 lg:flex-col">
                {footerLinks.packages?.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link
                        href={`/destination/${formatLinks(link.name.toLowerCase())}`}
                        className={`hover:text-blue-600 ${path == link.name && "text-lg font-bold text-blue-500"}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* address */}
            <div className="py-2 capitalize">
              <h3 className="mb-6 border-b-2 border-b-blue-500 pb-2 text-xl font-bold">
                address
              </h3>
              <div className="flex items-start gap-2">
                <span className="w-6">
                  <LocationIcon />
                </span>
                <address>
                  <strong>HO:</strong> Siddeshwara Nilaya 1st Floor <br />
                  Siddannalane cubban pet,
                  <br />
                  Bangalore 560002
                </address>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6">
                  <LocationIcon />
                </span>
                <address>
                  <strong>BO:</strong> #2nd Floor Parwaz Plaza
                  <br /> College Road, <br />
                  Hosapete 583201
                </address>
              </div>
            </div>
          </div>

          <hr className="my-12 border border-white sm:my-8" />
          {/* copy write info */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="mb-6 flex items-center justify-center gap-2 sm:mb-0">
              {new Date().getFullYear()}{" "}
              <span>
                <CopyrightIcon className="w-6" />
              </span>
              Travel Town Holidays
            </p>
            <ul className="flex justify-center gap-2  text-xl text-gray-100 md:text-3xl">
              <li>
                <a
                  aria-label="Click to visit our instagram page"
                  href="https://instagram.com/traveltownholidays?utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaceBook className="w-8" />
                </a>
              </li>
              <li>
                <a
                  aria-label="Click to visit our instagram page"
                  href="https://www.facebook.com/traveltownholidays2021/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
