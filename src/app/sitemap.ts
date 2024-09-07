import type { MetadataRoute } from "next";
import { api } from "~/trpc/server";
import formatLinks from "~/utils/formatLinks";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domesticDestinations = await api.client.getDomesticDestinations();
  const internationalDestinations =
    await api.client.getInternationalDestinations();
  const getHotelDestinations = await api.client.getHotelDestinations();
  const internationalURLs: MetadataRoute.Sitemap =
    internationalDestinations?.map((d) => {
      return {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/destination/${formatLinks(d.name.toLowerCase())}`,
      };
    });
  const domesticURLs: MetadataRoute.Sitemap = domesticDestinations?.map((d) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/destination/${formatLinks(d.name.toLowerCase())}`,
    };
  });
  const hotelsURLs: MetadataRoute.Sitemap = getHotelDestinations?.map((d) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/destination/${formatLinks(d.name.toLowerCase())}`,
    };
  });

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancellation`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/hotels`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/offers`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/domestic-packages`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/international-packages`,
    },
    ...domesticURLs,
    ...internationalURLs,
    ...hotelsURLs,
  ];
}
