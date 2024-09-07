import * as React from "react";
const SvgComponent = (props: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <defs>
      <style>
        {".cls-mealIcon{fill:#ffbd1b}.cls-2-mealIcon{fill:#0070d4}"}
      </style>
    </defs>
    <title />
    <g id="Layer_12" data-name="Layer 12">
      <path
        d="M12.5 20a5.5 5.5 0 1 1 5.5-5.5 5.51 5.51 0 0 1-5.5 5.5Zm0-10a4.5 4.5 0 1 0 4.5 4.5 4.5 4.5 0 0 0-4.5-4.5Z"
        className="cls-mealIcon"
      />
      <path
        d="m2.88 5.5.12 4-.5-.5h2l-.5.5.11-4a.39.39 0 0 1 .78 0l.11 4a.49.49 0 0 1-.47.5h-2A.48.48 0 0 1 2 9.52l.13-4a.38.38 0 0 1 .75 0Z"
        className="cls-2-mealIcon"
      />
      <path
        d="m6.91 5.5.09 4a.49.49 0 0 1-.48.5h-2a.5.5 0 0 1 0-1h2L6 9.5l.09-4a.41.41 0 0 1 .81 0Z"
        className="cls-2-mealIcon"
      />
      <path
        d="M3.79 19.5 4 9.5a.5.5 0 0 1 1 0l.21 10a.71.71 0 1 1-1.42 0s0 .01 0 0ZM19.79 19.5 20 12a.5.5 0 0 1 1 0l.21 7.5a.71.71 0 1 1-1.42 0s0 .01 0 0Z"
        className="cls-2-mealIcon"
      />
      <rect
        width={5}
        height={2}
        x={2}
        y={9}
        className="cls-2-mealIcon"
        rx={0.5}
        ry={0.5}
      />
      <path
        d="M20.5 12A2.2 2.2 0 0 1 18 9.5C18 7.67 19 5 20.5 5S23 7.67 23 9.5a2.2 2.2 0 0 1-2.5 2.5Zm0-6C19.89 6 19 7.84 19 9.5c0 1.26.53 1.5 1.5 1.5s1.5-.24 1.5-1.5c0-1.66-.89-3.5-1.5-3.5Z"
        className="cls-2-mealIcon"
      />
      <path
        d="M12.5 18a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Zm0-6a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5Z"
        className="cls-mealIcon"
      />
    </g>
  </svg>
);
export default SvgComponent;
