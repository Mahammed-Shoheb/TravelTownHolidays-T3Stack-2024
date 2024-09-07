"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import formatLinks from "~/utils/formatLinks";
import { HomeIcon } from "~/assets/svg";

export default function Breadcrumbs() {
  const path = usePathname();

  const generateBreadcrumbs = () => {
    const pathSegments = path.split("/").filter(Boolean); // Remove empty segments

    return pathSegments.map((segment, index) => {
      if (
        segment == "destination" ||
        segment == "categories" ||
        segment == "package-details"
      )
        return;
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`; // Build link path
      const label = segment.charAt(0).toUpperCase() + segment.slice(1); // Capitalize first letter

      // Handle active link styling (optional)
      const isActive = href === path;
      const activeClass = isActive
        ? "font-semibold text-blue-400"
        : "hover:text-blue-500 text-blue-400 duration-150";

      return (
        <li key={index} className="inline-flex items-center capitalize">
          {index !== pathSegments.length - 1 && (
            <>
              <Link href={href} className={activeClass}>
                {formatLinks(label, false)}
              </Link>
              <span className="px-3"> / </span>
            </>
          )}
          {index === pathSegments.length - 1 && (
            <span className={activeClass}>{formatLinks(label, false)}</span>
          )}
        </li>
      );
    });
  };

  return (
    <nav className="bg-slate-900 px-4 py-2 text-white ">
      <div className="align-section-center">
        <ul className="flex">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 capitalize delay-150 hover:text-blue-400"
            >
              <span className="w-6">
                <HomeIcon />
              </span>
              <span>home</span>
            </Link>
            <span className="px-3">/</span>
          </li>
          {generateBreadcrumbs()}
        </ul>
      </div>
    </nav>
  );
}
