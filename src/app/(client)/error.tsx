"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid h-[calc(100vh-8rem)] place-items-center text-center">
      <div>
        <h2 className="text-2xl font-semibold">Something went wrong!</h2>
        <button
          className="rounded-md bg-blue-500 px-2 py-1 tracking-wider text-white hover:bg-blue-600"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
