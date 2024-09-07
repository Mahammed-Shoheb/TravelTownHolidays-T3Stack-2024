export default function TextInput({
  id,
  name,
  label,
  value,
  onChange,
}: {
  id?: string;
  name: string;
  label?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="relative w-full text-xs">
      <textarea
        name={name}
        id={id ? `${id}-${name}` : name}
        rows={5}
        className="(:placeholder-shown)]:pb-1 placeholder:trans peer w-full border-b-2 border-gray-500 border-l-transparent border-r-transparent border-t-transparent bg-transparent px-1 py-2 outline-none autofill:pb-1 autofill:pt-3 focus:border-b-sky-500
    focus:pb-1 focus:pt-3 [&:not(:placeholder-shown)]:pt-3"
        value={value}
        onChange={onChange}
        placeholder=""
      ></textarea>
      <label
        htmlFor={id ? `${id}-${name}` : name}
        className=" pointer-events-none  absolute  left-0 top-0 h-full origin-[0_0] px-1 py-2 capitalize peer-focus:-translate-y-2 peer-focus:translate-x-0.5 peer-focus:scale-90 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
      >
        {label ?? name}
      </label>
    </div>
  );
}
