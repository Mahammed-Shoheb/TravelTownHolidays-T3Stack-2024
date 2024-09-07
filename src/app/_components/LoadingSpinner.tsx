export default function LoadingSpinner() {
  return (
    <div
      className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent  "
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
