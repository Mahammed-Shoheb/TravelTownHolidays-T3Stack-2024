import { EnquireButton, PackageDetails, PageHero } from "~/app/_components";
import formatLinks from "~/utils/formatLinks";
import { api } from "~/trpc/server";
import formatCurrency from "~/utils/formatCurrency";
import type { Metadata } from "next";
import { Calender, HomeIcon, LocationIcon, PriceTag } from "~/assets/svg";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const packageDestination = await api.client.getPackageDetails({
    packageDestination: formatLinks(slug, false),
  });

  return {
    title: formatLinks(slug, false),
    description: packageDestination?.details[0]?.sectionDetails
      .join(" ")
      .slice(0, 140),
    keywords: packageDestination?.name,
    openGraph: {
      url: `https://traveltownholidays.com/package-details/${formatLinks(slug, false)}`,
      images: [
        {
          url:
            packageDestination?.image ??
            "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725635169/Travel%20Town%202024/placeholder_images/11702037_21201309_o3ylsx.jpg",
          width: 800,
          height: 600,
          alt: packageDestination?.imageDescription,
        },
      ],
    },
  };
}

export default async function page({ params: { slug } }: Props) {
  const packageDetails = await api.client.getPackageDetails({
    packageDestination: formatLinks(slug, false),
  });
  if (!packageDetails) return null;
  const {
    image,
    imageDescription,
    name,
    days,
    details,
    itinerary,
    places,
    price,
  } = packageDetails;
  return (
    <main className="relative">
      <PageHero src={image} alt={imageDescription} />
      <section className="mb-4 bg-white pb-4 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.5)]">
        <div className="align-section-center py-4 md:ps-16">
          <h1 className="flex items-center gap-2 text-2xl font-bold md:text-3xl">
            <span className="w-8">
              <HomeIcon />
            </span>
            <span className="capitalize">{name}</span>
          </h1>
          <p className="flex items-center gap-4">
            <span>
              <LocationIcon className="w-6" />
            </span>
            <span>{places}</span>
          </p>
          <div>
            <p className="flex items-center gap-4">
              <span>
                <PriceTag className="w-6" />
              </span>
              <span>{formatCurrency.format(price)}</span>
            </p>
            <p className="flex items-center gap-4">
              <span>
                <Calender className="w-6" />
              </span>
              <span>{days}</span>
            </p>
          </div>
        </div>
      </section>
      <PackageDetails details={details} itinerary={itinerary} />
      <div className="fixed bottom-20 right-2 z-[100] sm:bottom-4 sm:right-20">
        <EnquireButton />
      </div>
    </main>
  );
}
