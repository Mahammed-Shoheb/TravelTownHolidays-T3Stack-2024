const SvgComponent = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 23 23"
    {...props}
  >
    <path fill="#c0392b" d="M17 3h3v6h-3z" />
    <path fill="#bdc3c7" d="M12 3.031 3 12v9h18v-9l-9-8.969z" />
    <path fill="#95a5a6" d="m12 3.6-9 8.9v2l9-9 9 9v-2l-9-8.9z" />
    <path
      fill="#e74c3c"
      d="M12 1 .686 12.3 2.1 13.7 12 3.8l9.899 9.9 1.415-1.4L12 1z"
    />
    <path fill="#3498db" d="M14 10a2 2 0 1 1-4 0 2 2 0 1 1 4 0z" />
    <path fill="#e67e22" d="M10 15h4v6h-4z" />
    <path fill="#d35400" d="M13.5 18.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z" />
    <path
      fill="#2980b9"
      d="M12 8c-1.105 0-2 .9-2 2 0 .1.021.3.062.5C10.284 9.6 11.068 9 12 9s1.716.6 1.938 1.5c.041-.2.062-.4.062-.5 0-1.1-.895-2-2-2z"
    />
    <path fill="#f1c40f" d="M13.5 18a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z" />
    <path fill="#d35400" d="M10 14h4v1h-4z" />
  </svg>
);
export default SvgComponent;
