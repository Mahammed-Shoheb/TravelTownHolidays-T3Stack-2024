import {
  CustomPaging,
  PageHero,
  SectionTitle,
  WhatsAppButton,
} from "~/app/_components";
import formatCurrency from "~/utils/formatCurrency";
import { api } from "~/trpc/server";
import formatLinks from "~/utils/formatLinks";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const hotelDestination = await api.client.getHotelDestination({
    hotelDestination: formatLinks(slug, false),
  });

  return {
    title: formatLinks(slug, false),
    description: hotelDestination?.description.join(" ").slice(0, 140),
    keywords: hotelDestination?.hotels.map((p) => p.name),
    openGraph: {
      url: `https://traveltownholidays.com/hotels/${formatLinks(slug, false)}`,
      images: [
        {
          url:
            hotelDestination?.image ??
            "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725635169/Travel%20Town%202024/placeholder_images/11702037_21201309_o3ylsx.jpg",
          width: 800,
          height: 600,
          alt: hotelDestination?.imageDescription,
        },
      ],
    },
  };
}

export default async function page({ params: { slug } }: Props) {
  const hotelDestination = await api.client.getHotelDestination({
    hotelDestination: formatLinks(slug, false),
  });
  if (!hotelDestination) return null;
  const { description, hotels, image, imageDescription, name } =
    hotelDestination;

  return (
    <main>
      <PageHero src={image} alt={imageDescription} />
      <section>
        <div className="align-section-center py-16">
          <div className="mb-4">
            <SectionTitle title={name} pageTitle={true} />
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
          </div>
          <div className="mx-auto lg:w-[70vw]">
            {hotels.map((hotel) => {
              return (
                <article
                  className="section-bg-white relative mb-4 flex flex-col justify-between gap-2 p-4 sm:gap-4 lg:flex-row lg:gap-8 lg:pb-8"
                  key={hotel.id}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                    <div className="h-44 w-full shadow-[0px_0px_10px_3px_rgba(0,0,0,0.25)] sm:w-64">
                      <CustomPaging images={hotel.images} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                        {hotel.name}
                      </h3>
                      <address>{hotel.address}</address>
                      <div className="text-xs text-gray-500">
                        <h4 className="text-base capitalize text-black">
                          {hotel.sectionName}
                        </h4>
                        <ul className="list-disc ps-4">
                          {hotel.sectionDetails.map((list, index) => {
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
                        {`${formatCurrency.format(hotel.price)}`}
                      </span>
                      {hotel.perCouple ? (
                        <span className="text-sm text-gray-500">
                          per couple
                        </span>
                      ) : (
                        <span className="text-sm text-gray-500">
                          per person
                        </span>
                      )}
                    </p>
                    <div className="flex flex-col gap-2">
                      <WhatsAppButton title={hotel.name} />
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
