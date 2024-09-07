import * as React from "react";
const SvgComponent = (props: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <title />
    <g data-name="Shiled Cancel">
      <path
        d="M28 6c-8.49 0-11.16-3.54-11.18-3.57A1 1 0 0 0 16 2a1.08 1.08 0 0 0-.83.42S12.49 6 4 6a1 1 0 0 0-1 1v8.76c0 9.25 7.11 12 11.36 13.66l1.26.5a.94.94 0 0 0 .76 0l1.26-.5C21.89 27.77 29 25 29 15.76V7a1 1 0 0 0-1-1Z"
        style={{
          fill: "#d8e1ef",
        }}
      />
      <path
        d="m17.41 16 2.3-2.29a1 1 0 0 0-1.42-1.42L16 14.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"
        style={{
          fill: "#0593ff",
        }}
      />
    </g>
  </svg>
);
export default SvgComponent;
