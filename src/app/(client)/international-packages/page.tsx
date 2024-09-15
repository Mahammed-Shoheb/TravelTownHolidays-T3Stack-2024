import type { Metadata } from "next";
import { DestinationsList, PageHero } from "~/app/_components";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: "International Packages",
  description:
    "Discover exclusive international travel packages with Travel Town Holidays. Explore top global destinations with curated vacation deals tailored to your preferences. Book your dream holiday abroad today and experience the world like never before!",
  keywords: [
    "International Travel Packages",
    "International Holiday Packages",
    "International Vacation Deals",
    "Affordable International Packages",
    "International Tour Packages",
    "Book International Holidays",
    "Affordable Family International Travel Deals",
  ],
  openGraph: {
    url: `https://traveltownholidays.com/international-packages`,
    images: [
      {
        url: "https://res.cloudinary.com/dp2hek0t3/image/upload/v1726307225/Travel%20Town%202024/domestic-internation-page/International_Image_cgzk9i.png",
        width: 800,
        height: 600,
        alt: "world map",
      },
    ],
  },
};

export default async function page() {
  const destinations = await api.client.getInternationalDestinations();

  return (
    <main>
      <PageHero
        src={
          "https://res.cloudinary.com/dp2hek0t3/image/upload/v1726307225/Travel%20Town%202024/domestic-internation-page/International_Image_cgzk9i.png"
        }
        alt="world map"
      />
      <h1 className="text-center text-lg font-bold text-slate-900 sm:text-2xl lg:text-3xl">
        International Packages
      </h1>
      <DestinationsList destinations={destinations} />
    </main>
  );
}
