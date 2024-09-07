export default function SelectInput({
  id,
  name,
  label,
  value,
  onChange,
  options,
}: {
  id?: string;
  name: string;
  label?: string;
  value?: string | number;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="w-full ">
      <label
        htmlFor={id ? `${id}-${name}` : name}
        className="mb-2 block text-xs font-medium capitalize"
      >
        {label ?? name}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        id={id ? `${id}-${name}` : name}
        className="block w-full rounded-lg border border-gray-500 px-2 py-1 pe-1 text-xs capitalize focus:border-blue-500 focus:outline-blue-500 focus:ring-red-500  active:ring-red-500 disabled:pointer-events-none disabled:opacity-50"
      >
        {options.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
