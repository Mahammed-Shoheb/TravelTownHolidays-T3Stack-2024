"use client";

import { useState } from "react";

interface ReadMoreProps {
  isList?: boolean;
  children: string | React.ReactElement[];
  count?: number;
}

export default function ReadMore({
  isList,
  children,
  count = 4,
}: ReadMoreProps) {
  const [isReadMore, setIsReadMore] = useState(true);
  const text = children;

  if (isList && text?.length <= count) {
    return (
      <ul className="list-image-[url(data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%2024%2024%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M15.5%205H11l5%207-5%207h4.5l5-7z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M8.5%205H4l5%207-5%207h4.5l5-7z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E)] ps-4">
        {text}
      </ul>
    );
  }
  if (isList && typeof text != "string") {
    return (
      <ul className="list-image-[url(data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20viewBox%3D%220%200%2024%2024%22%20height%3D%221em%22%20width%3D%221em%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M15.5%205H11l5%207-5%207h4.5l5-7z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M8.5%205H4l5%207-5%207h4.5l5-7z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E)] ps-4">
        {isReadMore
          ? text?.map((listItem: React.ReactNode, index: number) => {
              if (index < count) return listItem;
              return null;
            })
          : text}
        <span
          onClick={() => setIsReadMore(!isReadMore)}
          className="cursor-pointer text-lg text-sky-500 hover:text-sky-800"
        >
          {isReadMore ? " Read More..." : " Show Less"}
        </span>
      </ul>
    );
  }

  if (typeof text == "string") {
    if (text.length < 220) {
      return <p>{text}</p>;
    }

    return (
      <p>
        {isReadMore ? text.slice(0, 200) : text}
        <span
          onClick={() => setIsReadMore(!isReadMore)}
          className="cursor-pointer text-lg text-sky-500 hover:text-sky-800"
        >
          {isReadMore ? " Read More..." : " Show Less"}
        </span>
      </p>
    );
  }
}
