import { Packages, PageHero, SectionTitle } from "~/app/_components";
import formatLinks from "~/utils/formatLinks";
import { api } from "~/trpc/server";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const destination = await api.client.getDestination({
    destination: formatLinks(slug, false),
  });

  return {
    title: formatLinks(slug, false),
    description: destination?.description.join(" "),
    keywords: formatLinks(slug, false),
    openGraph: {
      url: `https://traveltownholidays.com/destination/${formatLinks(slug, false)}`,
      images: [
        {
          url:
            destination?.image ??
            "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725635169/Travel%20Town%202024/placeholder_images/11702037_21201309_o3ylsx.jpg",
          width: 800,
          height: 600,
          alt: destination?.imageDescription,
        },
      ],
    },
  };
}

export default async function page({ params: { slug } }: Props) {
  const destination = await api.client.getDestination({
    destination: formatLinks(slug, false),
  });
  if (!destination) return null;
  const { description, image, imageDescription, name, packages } = destination;

  return (
    <main>
      <PageHero src={image} alt={imageDescription} />
      <section>
        <div className="align-section-center py-12">
          <div className="mb-8">
            <SectionTitle title={name} pageTitle={true} />
            {description.map((paragraph, index) => {
              return (
                <p
                  className="mx-auto mb-2 max-w-[95%] leading-5 tracking-wide"
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
