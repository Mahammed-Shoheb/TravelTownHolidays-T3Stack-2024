import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionTitle, WhatsAppButton } from "~/app/_components";
import { api } from "~/trpc/server";
import { dynamicBlurDataUrl } from "~/utils/dynamicBlurDataUrl";
import formatCurrency from "~/utils/formatCurrency";

export const metadata: Metadata = {
  title: "Offers",
  description:
    "Discover exclusive travel deals and special offers at Travel Town Holidays. Save on your next vacation with our limited-time discounts on holiday packages. Book now and enjoy amazing savings!",
  keywords: [
    "Travel Town Holidays Offers",
    "Travel Deals",
    "Holiday Discounts",
    "Special Offers",
    "Exclusive Travel Deals from Travel Town Holidays",
    "Best Offers on Vacation Packages",
  ],
  openGraph: {
    url: `https://traveltownholidays.com/offers`,
    images: [
      {
        url: "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725084290/Travel%20Town%202024/page-hero-images/pexels-karolina-grabowska-5625130_nhf3cy.jpg",
        width: 800,
        height: 600,
        alt: "Red balloons with percentage symbols and a red shopping bag, representing a sale or discount promotion.",
      },
    ],
  },
};

export default async function page() {
  const offers = await api.client.getOffers();

  return (
    <main>
      <PageHero
        src={
          "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725084290/Travel%20Town%202024/page-hero-images/pexels-karolina-grabowska-5625130_nhf3cy.jpg"
        }
        alt="Red balloons with percentage symbols and a red shopping bag, representing a sale or discount promotion."
      />
      <section className="bg-gray-100">
        <div className="align-section-center py-12">
          <SectionTitle title="offers" pageTitle={true} />
          <div className="mx-auto lg:w-[70vw]">
            {offers?.map(async (offer) => {
              const {
                name,
                id,
                description,
                image,
                imageDescription,
                price,
                sectionDetails,
                sectionName,
                specialPrice,
                perCouple,
              } = offer;
              return (
                <article
                  className="section-bg-white mb-4 flex flex-col justify-between gap-2 p-4 sm:gap-8 lg:flex-row lg:gap-8"
                  key={id}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                    <div className="h-44 w-full shadow-[0px_0px_10px_3px_rgba(0,0,0,0.25)] sm:w-64">
                      <Image
                        src={image}
                        alt={imageDescription}
                        width={400}
                        height={300}
                        className="block h-full w-full object-fill"
                        placeholder="blur"
                        blurDataURL={await dynamicBlurDataUrl(image)}
                      />
                    </div>
                    <div className="mb-4 flex flex-col justify-between gap-2 capitalize sm:flex-col md:gap-8 lg:gap-12">
                      <div>
                        <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                          {name}
                        </h2>
                        <div className="text-xs text-gray-500">
                          <h3 className="text-base capitalize text-black">
                            {sectionName}
                          </h3>
                          <ul>
                            {sectionDetails.map((detail, index) => {
                              return <li key={index}>{detail}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                      <div>
                        {description.map((paragraph, index) => {
                          return (
                            <p className="max-w-[35rem] text-sm" key={index}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-2 capitalize sm:flex-row lg:flex-col lg:items-start">
                    <div className="flex flex-col gap-1 font-semibold sm:flex-row sm:items-center sm:gap-2 lg:flex-col lg:items-baseline lg:gap-1">
                      <p>price</p>
                      <p className="text-xl text-gray-500 line-through lg:text-2xl">
                        {`${formatCurrency.format(price)}`}
                      </p>
                      <p className="flex flex-col gap-1 font-semibold sm:flex-row sm:items-center sm:gap-2 lg:flex-col lg:items-baseline lg:gap-1">
                        <span className="text-xl lg:text-2xl">
                          {`${formatCurrency.format(specialPrice)}`}
                        </span>
                        {perCouple ? (
                          <span className="text-sm text-gray-500">
                            per couple
                          </span>
                        ) : (
                          <span className="text-sm text-gray-500">
                            per person
                          </span>
                        )}
                      </p>
                    </div>
                    <div>
                      <p>contact us for more details</p>
                      <WhatsAppButton title={name} />
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
