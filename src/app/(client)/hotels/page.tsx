import Image from "next/image";
import Link from "next/link";
import { EnquireButton, PageHero, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/server";
import formatCurrency from "~/utils/formatCurrency";
import formatLinks from "~/utils/formatLinks";
import type { Metadata } from "next";
import { dynamicBlurDataUrl } from "~/utils/dynamicBlurDataUrl";

export const metadata: Metadata = {
  title: "Hotels",
  description:
    "Find the best hotel deals with Travel Town Holidays. Discover luxury and budget-friendly hotels worldwide, tailored to your travel needs. Book your perfect stay today and enjoy exclusive discounts on top accommodations.",
  keywords: [
    "Best Hotel Deals",
    "Budget Hotels",
    "Best Hotel Deals for Family Vacations",
    "Affordable Hotels with Exclusive Discounts",
    "Affordable Resort Hotels with Great Deals",
  ],
  openGraph: {
    url: "https://traveltownholidays.com/hotels",
    images: [
      {
        url: "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725085272/Travel%20Town%202024/page-hero-images/pexels-jess-vide-4602230_edquj8.jpg",
        width: 800,
        height: 600,
        alt: "City view showing huge buildings",
      },
    ],
  },
};

export default async function page() {
  const hotelDestinations = await api.client.getHotelDestinations();
  if (!hotelDestinations) return null;

  return (
    <main>
      <PageHero
        src={
          "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725085272/Travel%20Town%202024/page-hero-images/pexels-jess-vide-4602230_edquj8.jpg"
        }
        alt="City view showing huge buildings"
      />
      <section>
        <div className="align-section-center py-16">
          <div className="mb-4">
            <SectionTitle title="hotels" pageTitle={true} />
          </div>
          <div className="mx-auto lg:w-[70vw]">
            {hotelDestinations.map(async (hotelDestination) => {
              const {
                name,
                id,
                image,
                imageDescription,
                sectionDetails,
                sectionName,
                startingFromPrice,
                description,
              } = hotelDestination;
              return (
                <article
                  className="section-bg-white relative mb-4 flex flex-col justify-between gap-2 p-4 sm:gap-4 lg:flex-row lg:gap-8"
                  key={id}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                    <div className="h-44 w-full shadow-[0px_0px_10px_3px_rgba(0,0,0,0.25)] sm:w-64">
                      <Image
                        src={image}
                        alt={imageDescription}
                        width={400}
                        height={300}
                        placeholder="blur"
                        blurDataURL={await dynamicBlurDataUrl(image)}
                        className="block h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                        {name}
                      </h2>
                      {description.map((paragraph, index) => {
                        return (
                          <p
                            className="mx-auto mb-2 max-w-[95%] text-center leading-5 tracking-wide"
                            key={index}
                          >
                            {paragraph}
                          </p>
                        );
                      })}
                      <div className="text-xs text-gray-500">
                        <h3 className="text-base capitalize text-black">
                          {sectionName}
                        </h3>
                        <ul className="list-disc ps-4">
                          {sectionDetails.map((list, index) => {
                            return <li key={index}>{list}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-2 capitalize lg:flex-col lg:items-start">
                    <p className="flex flex-col gap-1 font-semibold sm:flex-row sm:items-center sm:gap-2 lg:flex-col lg:items-baseline lg:gap-1">
                      <span>from</span>
                      <span className="text-xl lg:text-2xl">
                        {`${formatCurrency.format(startingFromPrice)}`}
                      </span>
                      <span className="text-sm text-gray-500">per person</span>
                    </p>
                    <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
                      <Link
                        href={`/hotels/${formatLinks(name)}`}
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
        </div>
      </section>
    </main>
  );
}
