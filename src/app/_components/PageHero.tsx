import Image from "next/image";
import type { StaticImageData } from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import { dynamicBlurDataUrl } from "~/utils/dynamicBlurDataUrl";

export default async function PageHero({
  src,
  alt,
  width,
  height,
}: {
  src: StaticImageData | string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <section className="mb-4">
      <div className="align-section-center relative mb-2 px-0">
        <Image
          src={src}
          alt={alt}
          className="h-[30vh] w-full rounded-lg object-cover sm:h-[80vh] md:h-[40vh] lg:h-[60vh]"
          width={width ?? 1200}
          height={height ?? 800}
          placeholder="blur"
          blurDataURL={await dynamicBlurDataUrl(src)}
        />
      </div>
      <Breadcrumbs />
    </section>
  );
}
