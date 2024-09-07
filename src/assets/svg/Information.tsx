import * as React from "react";
const SvgComponent = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    xmlSpace="preserve"
    viewBox="0 0 45 45"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <path
      fill="#2F88FF"
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M24 11a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      clipRule="evenodd"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M24.5 34V20h-2M21 34h7"
    />
  </svg>
);
export default SvgComponent;
