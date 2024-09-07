export default function Button({
  text,
  type,
  styles,
  disabled,
  onClick,
  icon,
}: {
  text: string;
  type?: "button" | "submit" | "reset";
  styles?: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactElement;
}) {
  return (
    <button
      type={type ?? "button"}
      className={`flex  items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold uppercase tracking-wide text-white transition-all duration-150 hover:bg-blue-500 disabled:cursor-wait disabled:bg-blue-500 ${styles} tracking-wider`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="">{icon}</span>}
      {icon ? <span>{text}</span> : <span className="mx-auto">{text}</span>}
    </button>
  );
}
