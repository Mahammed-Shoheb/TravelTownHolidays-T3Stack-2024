"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import formatLinks from "~/utils/formatLinks";

export default function Category({
  id,
  name,
  image,
  imageDescription,
}: {
  id: string;
  name: string;
  image: string;
  imageDescription: string;
}) {
  return (
    <Link
      href={`/categories/${formatLinks(name.toLowerCase())}`}
      key={id}
      className="group"
    >
      <motion.article
        initial="initial"
        animate="initial"
        whileHover="animate"
        className="relative"
      >
        <div className="overflow-hidden rounded-md">
          <Image
            src={image}
            alt={imageDescription}
            width={500}
            height={500}
            className="rounded-md transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 border-white backdrop-filter transition-all duration-300 group-hover:bg-white group-hover:bg-opacity-20 group-hover:backdrop-blur-sm ">
          <div className="absolute inset-0 m-4 grid place-items-center rounded-md border-2">
            <h3 className="bg-black/50 px-2 text-xl capitalize text-white backdrop-blur-sm backdrop-filter md:text-3xl">
              {name}
            </h3>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
