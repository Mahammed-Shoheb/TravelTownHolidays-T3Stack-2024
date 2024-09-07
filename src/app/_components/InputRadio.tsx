export default function InputRadio({
  name,
  label,
  id,
}: {
  name: string;
  label: string;
  id: string;
}) {
  return (
    <div className="mb-2 flex w-full  gap-2 rounded-md bg-gray-100 px-2 py-1">
      <input type="radio" name={name} id={id} className="cursor-pointer" />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
}
