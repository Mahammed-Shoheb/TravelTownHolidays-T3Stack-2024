import * as React from "react";
const SvgComponent = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1000 1000"
    {...props}
  >
    <title />
    <path
      d="M500 1000C223.9 1000 0 776.1 0 500S223.9 0 500 0s500 223.9 500 500-223.9 500-500 500z"
      style={{
        fill: "#25d366",
      }}
    />
    <path
      d="M733.9 267.2c-62-62.1-144.6-96.3-232.5-96.4-181.1 0-328.6 147.4-328.6 328.6 0 57.9 15.1 114.5 43.9 164.3L170.1 834l174.2-45.7c48 26.2 102 40 157 40h.1c181.1 0 328.5-147.4 328.6-328.6.1-87.8-34-170.4-96.1-232.5zM501.5 772.8h-.1c-49 0-97.1-13.2-139-38.1l-10-5.9L249 755.9l27.6-100.8-6.5-10.3c-27.3-43.5-41.8-93.7-41.8-145.4.1-150.6 122.6-273.1 273.3-273.1 73 0 141.5 28.5 193.1 80.1 51.6 51.6 80 120.3 79.9 193.2 0 150.7-122.6 273.2-273.1 273.2zm149.8-204.6c-8.2-4.1-48.6-24-56.1-26.7-7.5-2.7-13-4.1-18.5 4.1s-21.2 26.7-26 32.2c-4.8 5.5-9.6 6.2-17.8 2.1-8.2-4.1-34.7-12.8-66-40.8-24.4-21.8-40.9-48.7-45.7-56.9-4.8-8.2-.5-12.7 3.6-16.8 3.7-3.7 8.2-9.6 12.3-14.4 4.1-4.8 5.5-8.2 8.2-13.7 2.7-5.5 1.4-10.3-.7-14.4-2.1-4.1-18.5-44.5-25.3-61-6.7-16-13.4-13.8-18.5-14.1-4.8-.2-10.3-.3-15.7-.3-5.5 0-14.4 2.1-21.9 10.3-7.5 8.2-28.7 28.1-28.7 68.5s29.4 79.5 33.5 84.9c4.1 5.5 57.9 88.4 140.3 124 19.6 8.5 34.9 13.5 46.8 17.3 19.7 6.3 37.6 5.4 51.7 3.3 15.8-2.4 48.6-19.9 55.4-39 6.8-19.2 6.8-35.6 4.8-39-2-3.4-7.5-5.4-15.7-9.6z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
    />
  </svg>
);
export default SvgComponent;
