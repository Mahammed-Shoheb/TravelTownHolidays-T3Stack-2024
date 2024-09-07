import Image from "next/image";
import Link from "next/link";
import {
  LocationIcon,
  ClipBoard,
  MealIcon,
  HotelIcon,
  TransportIcon,
  PlaneIcon,
} from "~/assets/svg";
import formatCurrency from "~/utils/formatCurrency";
import formatLinks from "~/utils/formatLinks";
import React from "react";
import EnquireButton from "./EnquireButton";
import { dynamicBlurDataUrl } from "~/utils/dynamicBlurDataUrl";

type Packages = {
  id: string;
  name: string;
  price: number;
  places: string;
  perCouple: boolean;
  days: string;
  image: string;
  imageDescription: string;
  hotelsIcon: boolean;
  mealPlanIcon: boolean;
  transfersIcon: boolean;
  flightIcon: boolean;
};

export default function Packages({ packages }: { packages: Packages[] }) {
  return (
    <div className="mx-auto lg:w-[70vw]">
      {packages.map(async (packageDetail) => {
        const {
          days,
          flightIcon,
          hotelsIcon,
          id,
          image,
          mealPlanIcon,
          name,
          places,
          price,
          transfersIcon,
          imageDescription,
          perCouple,
        } = packageDetail;
        return (
          <article
            className="section-bg-white relative mb-4 flex flex-col justify-between gap-2 p-4 sm:gap-4 lg:flex-row lg:gap-4"
            key={id}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="h-44 w-full shadow-[0px_0px_10px_3px_rgba(0,0,0,0.25)] sm:w-64">
                <Image
                  src={image}
                  alt={imageDescription}
                  width={400}
                  height={300}
                  className="block h-full w-full object-cover"
                  placeholder="blur"
                  blurDataURL={await dynamicBlurDataUrl(image)}
                />
              </div>
              <div className="mb-4 flex flex-col justify-between gap-2  capitalize sm:gap-8 lg:flex-col lg:gap-12">
                <div>
                  <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                    {name}
                  </h2>
                  <p className="mb-2 inline-block rounded-md bg-blue-100 px-2 py-1 text-sm ">
                    {days}
                  </p>
                  <p className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">
                      <LocationIcon className="w-5" />
                    </span>
                    <span>{places}</span>
                  </p>
                </div>
                <ul className="z-[0] flex gap-4">
                  <li className="flex flex-col items-center justify-center">
                    <span className="w-8">
                      <ClipBoard />
                    </span>
                    <span className="text-sm">highlights</span>
                  </li>
                  {hotelsIcon && (
                    <li className="flex flex-col items-center justify-center">
                      <span className="w-8">
                        <HotelIcon />
                      </span>
                      <span className="text-sm">hotels</span>
                    </li>
                  )}
                  {mealPlanIcon && (
                    <li className="flex flex-col items-center justify-center">
                      <span className="w-8">
                        <MealIcon />
                      </span>
                      <span className="text-sm">meal plan</span>
                    </li>
                  )}
                  {transfersIcon && (
                    <li className="flex flex-col items-center justify-center">
                      <span className="w-8">
                        <TransportIcon />
                      </span>
                      <span className="text-sm">transfers</span>
                    </li>
                  )}
                  {flightIcon && (
                    <li className="flex flex-col items-center justify-center">
                      <span className="w-8">
                        <PlaneIcon />
                      </span>
                      <span className="text-sm">flight</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-2 capitalize lg:flex-col lg:items-start ">
              <p className="flex flex-col gap-1 font-semibold sm:flex-row sm:items-center sm:gap-2 lg:flex-col lg:items-baseline lg:gap-1">
                <span>from</span>
                <span className="text-xl lg:text-2xl">
                  {`${formatCurrency.format(price)}`}
                </span>
                {perCouple ? (
                  <span className="text-sm text-gray-500">per couple</span>
                ) : (
                  <span className="text-sm text-gray-500">per person</span>
                )}
              </p>
              <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
                <Link
                  href={`/package-details/${formatLinks(name)}`}
                  className="rounded-md border-2 border-blue-500 px-2 py-1 text-center text-sm uppercase tracking-wider text-black duration-150 hover:bg-blue-500 hover:text-white"
                >
                  view details
                </Link>
                <EnquireButton />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
