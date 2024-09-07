import type { Metadata } from "next";
import { Packages, PageHero, SectionTitle } from "~/app/_components";
import { api } from "~/trpc/server";
import formatLinks from "~/utils/formatLinks";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const category = await api.client.getCategory({
    category: formatLinks(slug, false),
  });

  return {
    title: formatLinks(slug, false),
    description:
      "Explore a wide range of travel categories with Travel Town Holidays. From luxury vacations and adventure trips to family getaways and romantic escapes, find the perfect travel package tailored to your needs. Discover your next dream destination today!",
    keywords: [
      "Travel Package Categories",
      "Find the Best Travel Categories at Travel Town Holidays",
      "Affordable Family Travel and Getaways",
      "Best Romantic Travel Packages for Couples",
      "Group Travel Deals and Adventure Trips",
    ],
    openGraph: {
      url: `https://traveltownholidays.com/categories/${formatLinks(slug, false)}`,
      images: [
        {
          url:
            category?.image ??
            "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725635169/Travel%20Town%202024/placeholder_images/11702037_21201309_o3ylsx.jpg",
          width: 800,
          height: 600,
          alt: category?.imageDescription,
        },
      ],
    },
  };
}

export default async function page({ params: { slug } }: Props) {
  const category = await api.client.getCategory({
    category: formatLinks(slug, false),
  });
  if (!category) return null;
  const {
    description,
    image,
    imageDescription,
    name,
    packages: packages,
  } = category;

  return (
    <main>
      <PageHero src={image} alt={imageDescription} />
      <section>
        <div className="align-section-center py-16">
          <div className="mb-8">
            <SectionTitle title={name} pageTitle={true} />
            {description.map((paragraph, index) => {
              return (
                <p
                  className="mx-auto mb-2 max-w-[40rem] leading-5 tracking-wide"
                  key={index}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
          <Packages packages={packages} />
        </div>
      </section>
    </main>
  );
}
