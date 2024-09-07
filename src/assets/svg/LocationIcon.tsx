import * as React from "react";
const SvgComponent = (props: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <style>{".cls-location{fill:#0072ff}"}</style>
    </defs>
    <title />
    <g id="Layer_2" data-name="Layer 2">
      <path
        d="M18.69 8.4a22.16 22.16 0 0 0-4 31.57L30 59.11a2.51 2.51 0 0 0 3.92 0L49.29 40a22.16 22.16 0 0 0-4-31.57 22.16 22.16 0 0 0-26.6-.03Zm11.62 29.49a13 13 0 1 1 14.58-14.58 13 13 0 0 1-14.58 14.58Z"
        className="cls-location"
      />
      <path
        d="m32.89 20.94-.92.92-1.09-1.09a4.33 4.33 0 0 0-6.29.17 4.5 4.5 0 0 0 .33 6.13L30.87 33a1.56 1.56 0 0 0 2.21 0l6.11-6.11A4.33 4.33 0 0 0 39 20.6a4.5 4.5 0 0 0-6.11.34Z"
        className="cls-location"
      />
    </g>
  </svg>
);
export default SvgComponent;
