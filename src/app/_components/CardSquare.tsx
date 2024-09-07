import Image from "next/image";
import Link from "next/link";
import formatCurrency from "~/utils/formatCurrency";
import formatLinks from "~/utils/formatLinks";
import { LocationIcon, OpenNewTab } from "~/assets/svg";
// import { dynamicBlurDataUrl } from "~/utils/dynamicBlurDataUrl";

export default async function CardSquare({
  img,
  name,
  startingFrom,
  imgDesc,
}: {
  img: string;
  name: string;
  startingFrom: number;
  imgDesc: string;
}) {
  return (
    <article>
      <Link
        href={`/destination/${formatLinks(name.toLowerCase())}`}
        className="relative block h-96 rounded-2xl shadow-lg"
      >
        <Image
          src={img}
          alt={imgDesc}
          width={270}
          height={400}
          loading="lazy"
          className="block h-full w-full rounded-xl object-cover object-center"
          // placeholder="blur"
          // blurDataURL={await dynamicBlurDataUrl(img)}
        />
        <div className="absolute bottom-2 left-0 right-0 mx-auto h-auto w-[90%] rounded-full  bg-black/50 pe-2 ps-4 text-white backdrop-blur-sm backdrop-filter">
          <h3 className="text- xl flex items-center justify-center gap-1 font-bold capitalize tracking-wide">
            <span>
              <LocationIcon className="w-5" />
            </span>
            <span>{name}</span>
          </h3>
        </div>
        <p className="absolute left-2 top-2 rounded-full bg-black/50 px-2  text-sm capitalize text-white backdrop-blur-sm backdrop-filter">
          from {formatCurrency.format(startingFrom)}/PP
        </p>
        <OpenNewTab className="absolute right-2 top-2 w-6 rounded-md  bg-black/50 fill-white text-white backdrop-blur-sm backdrop-filter" />
      </Link>
    </article>
  );
}
