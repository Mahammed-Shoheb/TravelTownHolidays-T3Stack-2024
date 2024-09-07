"use client";
import {
  Calender,
  Exclude,
  Include,
  Information,
  Star,
  Terms,
  Tips,
} from "~/assets/svg";
import { useEffect, useState } from "react";
import scrollTo from "~/utils/scrollTo";

type Itinerary = {
  day: number;
  details: string[];
  title: string;
};

type Details = {
  id: string;
  sectionName: string;
  sectionDetails: string[];
  displayList: boolean;
};

const sections = {
  overview: {
    title: "overview",
    icon: <Information />,
  },
  highlights: {
    title: "highlights",
    icon: <Star />,
  },
  itinerary: {
    title: "itinerary",
    icon: <Calender />,
  },
  inclusions: {
    title: "inclusions",
    icon: <Include />,
  },
  exclusions: {
    title: "exclusions",
    icon: <Exclude />,
  },
  tips: {
    title: "tips",
    icon: <Tips />,
  },
  terms: {
    title: "T&C",
    icon: <Terms />,
  },
};

type SectionNames =
  | "overview"
  | "highlights"
  | "itinerary"
  | "inclusions"
  | "exclusions"
  | "tips"
  | "terms";

export default function PackageDetails({
  itinerary,
  details,
}: {
  itinerary: Itinerary[];
  details: Details[];
}) {
  const sectionOrder: SectionNames[] = [
    "overview",
    "highlights",
    "itinerary",
    "inclusions",
    "exclusions",
    "tips",
    "terms",
  ];

  // Convert the itinerary into a section that fits into the details array
  const itinerarySection: Details = {
    id: "itinerary",
    sectionName: "itinerary",
    sectionDetails: itinerary.map(
      (item) => `Day ${item.day}: ${item.title} - ${item.details.join(", ")}`,
    ),
    displayList: false, // Set to false if you want to handle rendering the itinerary differently
  };

  // Combine itinerarySection with the details array
  const combinedDetails = [...details, itinerarySection];

  // Sort the combined array according to the desired order
  const sortedDetails = combinedDetails.sort(
    (a, b) =>
      sectionOrder.indexOf(a.sectionName.toLowerCase() as SectionNames) -
      sectionOrder.indexOf(b.sectionName.toLowerCase() as SectionNames),
  );

  const [tab, setTab] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (sortedDetails[0]?.sectionName)
      setTab(sortedDetails[0]?.sectionName.toLowerCase());

    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sortedDetails]);

  const handleNavClick = () => {
    scrollTo("#packageDetails", 80);
  };

  return (
    <div className="relative">
      <nav className="mb-4 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)] md:hidden">
        <div className="align-section-center flex flex-wrap gap-2 py-2 ">
          {sortedDetails.map((detail, index) => {
            const { sectionName } = detail;
            const title =
              sections[sectionName.toLowerCase() as SectionNames].title;
            const icon =
              sections[sectionName.toLowerCase() as SectionNames].icon;
            return (
              <button
                onClick={() => setTab(sectionName.toLowerCase())}
                className={`flex flex-col items-center justify-center gap-1 capitalize ${tab == sectionName.toLowerCase() && ""}`}
                role="tab"
                key={index}
              >
                <span className="w-6">{icon}</span>
                <span>{title}</span>
              </button>
            );
          })}
        </div>
      </nav>
      {!isScrolled && (
        <nav className="mb-4 hidden bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)] md:flex md:ps-16">
          <div className="align-section-center flex flex-wrap gap-2 py-2 ">
            {sortedDetails.map((detail, index) => {
              const { sectionName } = detail;
              const title =
                sections[sectionName.toLowerCase() as SectionNames].title;
              const icon =
                sections[sectionName.toLowerCase() as SectionNames].icon;
              return (
                <button
                  onClick={() => setTab(sectionName.toLowerCase())}
                  className={`flex flex-col items-center justify-center gap-1 capitalize ${tab == sectionName.toLowerCase() && ""}`}
                  role="tab"
                  key={index}
                  type="button"
                >
                  <span className="w-6">{icon}</span>
                  <span>{title}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}

      <div className="align-section-center relative flex items-start transition-all duration-150">
        {isScrolled && (
          <nav className="sticky top-[15%] z-[99] mb-4 hidden h-auto bg-white px-1 py-2 text-xs shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)] md:inline-flex">
            <div className="flex flex-col flex-wrap gap-6 overflow-hidden py-2">
              {sortedDetails.map((detail, index) => {
                const { sectionName } = detail;
                const title =
                  sections[sectionName.toLowerCase() as SectionNames].title;
                const icon =
                  sections[sectionName.toLowerCase() as SectionNames].icon;
                return (
                  <button
                    type="button"
                    onClick={() => {
                      setTab(sectionName.toLowerCase());
                      handleNavClick();
                    }}
                    className={`flex flex-col items-center justify-center gap-1 capitalize ${tab == sectionName.toLowerCase() && ""}`}
                    role="tab"
                    key={index}
                  >
                    <span className="w-6">{icon}</span>
                    <span>{title}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        )}
        <div
          className="grid gap-4 md:ms-10 lg:grid-cols-[50rem,10rem]"
          id="packageDetails"
        >
          {sortedDetails.map((detail) => {
            const { displayList, id, sectionDetails, sectionName } = detail;
            if (sectionName.toLowerCase() === "itinerary") {
              return (
                <section
                  key={id}
                  className={`mb-4 ${tab == sectionName.toLowerCase() ? "block" : "hidden overflow-hidden"}`}
                >
                  <div className="mb-8">
                    <h2 className="mb-2 text-xl font-semibold capitalize md:text-2xl">
                      {sectionName}
                    </h2>
                    {itinerary.map((item, index) => (
                      <div key={index} className="mb-8">
                        <div className="mb-4">
                          <h3 className="text-2xl font-semibold text-gray-500">
                            Day {item.day}
                          </h3>
                          <div className="w-full border border-blue-500"></div>
                        </div>
                        <div className="section-bg-white px-2 py-8 sm:px-4 lg:px-8">
                          <h4 className="mb-4 text-base font-semibold md:text-xl">
                            {item.title}
                          </h4>
                          {item.details.map((detail, index) => (
                            <p key={index} className="mb-2 text-justify">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            } else if (displayList) {
              return (
                <section
                  key={id}
                  className={`mb-4 ${tab == sectionName.toLowerCase() ? "block" : "hidden overflow-hidden"}`}
                >
                  <div className="mb-8">
                    <h2 className="mb-2 text-xl font-semibold capitalize md:text-2xl">
                      {sectionName}
                    </h2>
                    <div className="w-full border border-blue-500"></div>
                  </div>
                  <div className="section-bg-white px-2 py-8 sm:px-4 lg:px-8">
                    <ul className="list-disc ps-4">
                      {sectionDetails.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              );
            } else {
              return (
                <section
                  key={id}
                  className={`mb-4 ${tab == sectionName.toLowerCase() ? "block" : "hidden overflow-hidden"}`}
                >
                  <div className="mb-8">
                    <h3 className="mb-2 text-xl font-semibold capitalize md:text-2xl">
                      {sectionName}
                    </h3>
                    <div className="w-full border border-blue-500"></div>
                  </div>
                  <div className="section-bg-white px-2 py-8 sm:px-4 lg:px-8">
                    {sectionDetails.map((paragraph, index) => (
                      <p key={index} className="mb-2">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
