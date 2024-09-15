import type { Metadata } from "next";
import { DestinationsList, PageHero } from "~/app/_components";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: "Domestic Packages",
  description:
    "Explore top domestic travel packages with Travel Town Holidays. Discover affordable and curated vacation deals within your country, tailored to your preferences. Book now and experience the best of local destinations!",
  keywords: [
    "Domestic Travel Packages",
    "Domestic Holiday Packages",
    "Domestic Vacation Deals",
    "Affordable Domestic Packages",
    "Domestic Tour Packages",
    "Best Domestic Travel Packages in India",
    "Affordable Family Domestic Travel Deals",
  ],
  openGraph: {
    url: `https://traveltownholidays.com/domestic-packages`,
    images: [
      {
        url: "https://res.cloudinary.com/dp2hek0t3/image/upload/v1726307209/Travel%20Town%202024/domestic-internation-page/Domestic_Image_ni9wqm.png",
        width: 800,
        height: 600,
        alt: "map of india with coins",
      },
    ],
  },
};

export default async function page() {
  const destinations = await api.client.getDomesticDestinations();

  return (
    <main>
      <PageHero
        src={
          "https://res.cloudinary.com/dp2hek0t3/image/upload/v1726307209/Travel%20Town%202024/domestic-internation-page/Domestic_Image_ni9wqm.png"
        }
        alt="map of india with coins"
      />
      <h1 className="text-center text-lg font-bold text-slate-900 sm:text-2xl lg:text-3xl">
        Domestic Packages
      </h1>
      {destinations && <DestinationsList destinations={destinations} />}
    </main>
  );
}
