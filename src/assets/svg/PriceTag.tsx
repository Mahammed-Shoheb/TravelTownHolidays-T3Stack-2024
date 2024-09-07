import * as React from "react";
const SvgComponent = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 2048 2048"
    {...props}
  >
    <path
      d="M1464.6 583.4c16 16 24.9 37.4 24.9 60 0 11.3-2.2 22.3-6.4 32.5s-10.4 19.5-18.4 27.5c-16 16-37.4 24.9-60 24.9s-44-8.8-60-24.9c-33.1-33.1-33.1-87 0-120.1 16-16 37.3-24.9 60-24.9s43.9 8.9 59.9 25z"
      style={{
        fill: "#ff8587",
      }}
    />
    <path
      d="m1752.8 295.2 4 665.7-788.6 788.6-669.7-669.7 788.6-788.6 665.7 4zm-228.1 348.2c0-32.1-12.5-62.2-35.2-84.9s-52.8-35.2-84.9-35.2c-32.1 0-62.2 12.5-84.9 35.2-46.8 46.8-46.8 123 0 169.8 22.7 22.7 52.8 35.2 84.9 35.2 16 0 31.6-3.1 46-9.1 14.4-6 27.6-14.8 38.9-26.1 22.7-22.7 35.2-52.8 35.2-84.9zm-148.9 519.9c6.9-6.9 6.9-18 0-24.9L912.5 675.2c-6.9-6.9-18-6.9-24.9 0-6.9 6.9-6.9 18 0 24.9l463.3 463.3c3.4 3.4 7.9 5.2 12.4 5.2s9-1.8 12.5-5.3zm-115.1 115.1c6.9-6.9 6.9-18 0-24.9L797.5 790.2c-6.9-6.9-18-6.9-24.9 0-6.9 6.9-6.9 18 0 24.9l463.2 463.3c3.4 3.4 7.9 5.1 12.4 5.1 4.6 0 9.1-1.7 12.5-5.1zm-115 115c6.9-6.9 6.9-18 0-24.9L682.4 905.3c-6.9-6.9-18-6.9-24.9 0-6.9 6.9-6.9 18 0 24.9l463.2 463.3c3.4 3.4 7.9 5.1 12.4 5.1 4.7 0 9.2-1.8 12.6-5.2zm-115 115.1c6.9-6.9 6.9-18 0-24.9l-463.2-463.3c-6.9-6.9-18-6.9-24.9 0-6.9 6.9-6.9 18 0 24.9l463.2 463.3c3.4 3.4 7.9 5.1 12.4 5.1s9-1.7 12.5-5.1z"
      style={{
        fill: "#ffe17d",
      }}
    />
    <path d="M1787.8 277.6 1792 968c0-4.5-1.7-8.9-5.1-12.3-6.9-6.9-18-6.9-24.9 0l-5.2 5.2-4-665.7-665.7-4 5.2-5.2c6.9-6.9 6.9-18 0-24.9-3.4-3.4-7.9-5.1-12.3-5.1l690.4 4.2c9.6 0 17.4 7.8 17.4 17.4z" />
    <path d="M1792 968.1v.1c0 .6 0 1.2-.1 1.8 0 .3-.1.6-.1.9-.2 1.4-.6 2.7-1.1 4-.1.2-.2.5-.3.7-.1.1-.1.3-.2.4l-.3.6c-.1.3-.3.5-.4.8-.1.2-.3.5-.4.7-.6.9-1.3 1.8-2.1 2.6-3.2 3.2-7.5 5.2-12.4 5.2h-.1c-9.7 0-17.5-7.8-17.6-17.5V961l5.2-5.2c6.9-6.9 18-6.9 24.9 0 3.3 3.4 5 7.8 5 12.3z" />
    <path d="M1791.9 970c.1-.6.1-1.2.1-1.8 0 .6 0 1.2-.1 1.8zM1791.8 970.9c0-.3.1-.6.1-.9 0 .3-.1.6-.1.9zM1790.4 975.5c.1-.2.2-.5.3-.7-.1.3-.2.5-.3.7zM1789.9 976.5l.3-.6-.3.6zM1789 978c.1-.2.3-.4.4-.7-.1.3-.2.5-.4.7zM1786.9 980.6l-806.3 806.3c-3.4 3.4-7.9 5.1-12.4 5.1s-9-1.7-12.4-5.1l-694.6-694.6c-6.9-6.9-6.9-18 0-24.9l805.7-805.7c-2.8 3.1-4.6 7.2-4.6 11.8-.1 9.7 7.8 17.6 17.5 17.7h7.4l-788.6 788.6 669.7 669.7 788.6-788.6v7.4c.1 9.7 7.9 17.5 17.6 17.5h.1c4.8 0 9.1-2 12.3-5.2z" />
    <path d="M1489.5 558.5c22.7 22.7 35.2 52.8 35.2 84.9 0 32.1-12.5 62.2-35.2 84.9-11.3 11.3-24.5 20.1-38.9 26.1-14.4 6-29.9 9.1-46 9.1-32.1 0-62.2-12.5-84.9-35.2-46.8-46.8-46.8-123 0-169.8 22.7-22.7 52.8-35.2 84.9-35.2 32.1 0 62.2 12.5 84.9 35.2zm0 84.9c0-22.7-8.8-44-24.9-60s-37.4-24.9-60-24.9-44 8.8-60 24.9c-33.1 33.1-33.1 87 0 120.1 16 16 37.3 24.9 60 24.9s44-8.8 60-24.9c8-8 14.2-17.4 18.4-27.5 4.3-10.3 6.5-21.3 6.5-32.6zM1375.8 1138.5c6.9 6.9 6.9 18 0 24.9-3.4 3.4-7.9 5.2-12.4 5.2s-9-1.7-12.4-5.2L887.6 700.1c-6.9-6.9-6.9-18 0-24.9 6.9-6.9 18-6.9 24.9 0l463.3 463.3zM1260.7 1253.5c6.9 6.9 6.9 18 0 24.9-3.4 3.4-7.9 5.1-12.4 5.1s-9-1.7-12.4-5.1L772.6 815.1c-6.9-6.9-6.9-18 0-24.9 6.9-6.9 18-6.9 24.9 0l463.2 463.3zM1145.7 1368.5c6.9 6.9 6.9 18 0 24.9-3.4 3.4-7.9 5.1-12.4 5.1s-9-1.7-12.4-5.1L657.6 930.2c-6.9-6.9-6.9-18 0-24.9 6.9-6.9 18-6.9 24.9 0l463.2 463.2zM1092.2 261.1c6.9 6.9 6.9 18 0 24.9l-5.2 5.2h-7.4c-9.7-.1-17.5-8-17.5-17.7 0-4.5 1.8-8.7 4.6-11.8 1.8-1.9 4-3.5 6.6-4.5.2-.1.4-.2.6-.2 1-.4 2.1-.6 3.1-.8.3 0 .6-.1.9-.1h.1c.5 0 1.1-.1 1.7-.1h.1c4.6 0 9 1.7 12.4 5.1z" />
    <path d="M1078.1 256.1c.5 0 1.1-.1 1.7-.1-.6 0-1.1 0-1.7.1zM1078 256.1c-.3 0-.6.1-.9.1.3 0 .6-.1.9-.1zM1074 257c-.2.1-.4.1-.6.2.2-.1.4-.1.6-.2zM1030.7 1483.6c6.9 6.9 6.9 18 0 24.9-3.4 3.4-7.9 5.1-12.4 5.1s-9-1.7-12.4-5.1l-463.2-463.3c-6.9-6.9-6.9-18 0-24.9 6.9-6.9 18-6.9 24.9 0l463.1 463.3z" />
  </svg>
);
export default SvgComponent;
