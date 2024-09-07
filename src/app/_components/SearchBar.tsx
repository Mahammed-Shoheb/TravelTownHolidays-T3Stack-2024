"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { api } from "~/trpc/react";

export default function SearchBar() {
  const [searchWord, setSearchWord] = useState("");

  const { data, refetch, isLoading } =
    api.client.getSearchedDestination.useQuery({
      searchWord,
    });

  useEffect(() => {
    const getData = setTimeout(() => {
      void refetch();
    }, 2000);
    return () => clearTimeout(getData);
  }, [searchWord, refetch]);

  return (
    <div className="relative w-full">
      <div className="flex w-full">
        <label
          htmlFor="search"
          className="hidden"
          aria-label="search"
          aria-hidden="false"
        >
          search
        </label>
        <div className="flex w-full rounded-md bg-white">
          <span className="grid h-full  place-items-center border-r border-r-slate-400 px-2 text-xs">
            <FaSearch className="text-xl text-blue-400" />
          </span>
          <input
            aria-labelledby="search"
            type="search"
            name="search"
            id="search"
            title="search"
            role="search"
            autoComplete="false"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            className="w-full rounded-e-md border-l px-2 py-1 text-black outline-none"
            placeholder="Search for Destinations Ex:Kashmir, Bali, or Dubai"
          />
        </div>
      </div>
      <div className="absolute top-full z-[99] mt-1 flex w-full flex-col bg-white text-left">
        {isLoading && searchWord != "" && (
          <div
            className="my-2 ms-2 inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600 dark:text-blue-500"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {(!data || data.destinations.length == 0) &&
          searchWord != "" &&
          !isLoading && (
            <p className="z-[99] border-b-2 bg-white px-4 py-2 text-black">
              Sorry we could not find this destination, Kindly submit query to
              get quotes
            </p>
          )}
        {data &&
          data?.destinations.length > 0 &&
          data?.destinations.map((destination) => {
            const { id, name } = destination;
            return (
              <Link
                href={`/destination/${name}`}
                key={id}
                className="z-[99] border-b-2 bg-white px-4 py-2 text-black hover:bg-blue-200"
              >
                {name}
              </Link>
            );
          })}
      </div>
    </div>
  );
}
