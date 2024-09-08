import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dynamicBlurDataUrl } from "~/utils/dynamicBlurDataUrl";
import formatLinks from "~/utils/formatLinks";

type Destinations = {
  image: string;
  name: string;
  id: string;
  imageDescription: string;
};

export default function DestinationsList({
  destinations,
}: {
  destinations: Destinations[];
}) {
  return (
    <section className="my-5 ">
      <div className="align-section-center grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map(async (destination) => {
          const { id, image, imageDescription, name } = destination;
          return (
            <article
              key={id}
              className="group relative h-80 overflow-hidden rounded-md"
            >
              <Link href={`/destination/${formatLinks(name.toLowerCase())}`}>
                <Image
                  src={image}
                  alt={imageDescription}
                  width={400}
                  height={400}
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL={await dynamicBlurDataUrl(image)}
                  className="block h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-125"
                />
                <div className="absolute bottom-0 w-full bg-black/40 px-2 py-1 text-center font-semibold capitalize backdrop-blur-sm backdrop-filter">
                  <h2 className="text-white">{name}</h2>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
