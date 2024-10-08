import * as React from "react";
const SvgComponent = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#2197F3"
      d="M24 14c-3.86 0-7 3.09-7 6.89 0 2.51 2.779 6.017 4.662 8.11H15v-6a1 1 0 0 0-1-1H9v-4.58c1.328-1.34 6-6.273 6-9.53C15 4.09 11.86 1 8 1S1 4.09 1 7.89c0 3.257 4.672 8.19 6 9.53V23a1 1 0 0 0 1 1h5v6a1 1 0 0 0 1 1h10c.13 0 .259-.027.382-.077.038-.016.067-.045.102-.066.074-.04.15-.075.216-.137.64-.63 6.3-6.25 6.3-9.83 0-3.8-3.14-6.89-7-6.89z"
    />
    <path
      fill="#3F51B5"
      d="M24 14c-3.86 0-7 3.09-7 6.89 0 3.58 5.66 9.2 6.3 9.83.2.19.45.28.7.28s.5-.09.7-.28c.64-.63 6.3-6.25 6.3-9.83 0-3.8-3.14-6.89-7-6.89zM8 1C4.14 1 1 4.09 1 7.89c0 3.58 5.66 9.2 6.3 9.83.2.19.45.28.7.28s.5-.09.7-.28c.64-.63 6.3-6.25 6.3-9.83C15 4.09 11.86 1 8 1z"
    />
    <path
      fill="#2197F3"
      d="M10 7.89a2 2 0 1 1-3.999.001A2 2 0 0 1 10 7.89zM26 20.89a2 2 0 1 1-3.999.001A2 2 0 0 1 26 20.89z"
    />
  </svg>
);
export default SvgComponent;
