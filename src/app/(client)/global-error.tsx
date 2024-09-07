"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="grid h-screen place-items-center text-center">
          <div>
            <h2 className="text-2xl font-semibold">Something went wrong!</h2>
            <button
              type="button"
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
      </body>
    </html>
  );
}
