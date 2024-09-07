import Link from "next/link";
import notFound from "~/assets/svg/notFound.svg";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="grid min-h-[110vh] w-full place-items-center">
      <div className="mt-5 px-4 text-center">
        <Image
          src={notFound as string}
          alt="not found image"
          width={500}
          height={500}
          className="mx-auto mb-4 w-[60vw] sm:w-[40vw]"
        />
        <h1 className="mb-1 text-xl leading-5 md:text-3xl">Not Found</h1>
        <p className="mx-auto mb-4 max-w-[35rem] tracking-tight">
          While this particular destination may be a mystery, we have countless
          adventures waiting to be explored! Check out our homepage for
          inspiration.
        </p>
        <Link
          href="/admin"
          className="rounded-md border-2 border-blue-500 px-4 py-2 tracking-wider hover:bg-white hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
