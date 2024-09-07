export default function SectionTitle({
  title,
  pageTitle,
  subTitle,
  adminSubTitle,
}: {
  title: string;
  pageTitle?: boolean;
  subTitle?: boolean;
  adminSubTitle?: boolean;
}) {
  if (pageTitle) {
    return (
      <div className="mb-8">
        <h1 className="text-center text-2xl font-bold capitalize text-slate-900 md:text-3xl lg:text-5xl">
          {title}
        </h1>
        <span className="mx-auto block h-1 w-20 bg-blue-600"></span>
      </div>
    );
  }
  if (subTitle) {
    return (
      <div className="mb-4">
        <h2 className="pb-1 text-xl font-semibold capitalize text-slate-900 md:text-xl lg:text-4xl">
          {title}
        </h2>
        <span className="block h-1 w-20 bg-blue-600"></span>
      </div>
    );
  }
  if (adminSubTitle) {
    return (
      <div className="mb-4">
        <h2 className="text-xl font-bold capitalize text-slate-900">{title}</h2>
        <span className="block h-1 w-20 bg-blue-600"></span>
      </div>
    );
  }
  return (
    <div className="mb-4 md:mb-8">
      <h2 className="text-center text-xl font-bold capitalize text-slate-900 md:text-2xl lg:text-4xl">
        {title}
      </h2>
      <span className="mx-auto block h-1 w-20 bg-blue-600"></span>
    </div>
  );
}
