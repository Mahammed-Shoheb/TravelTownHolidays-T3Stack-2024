export default function FormInput({
  name,
  label,
  type,
  required,
  id,
  value,
  onChange,
  disabled,
}: {
  name: string;
  label?: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative mb-2 w-full text-xs sm:mb-4 md:mb-0">
      <input
        disabled={disabled}
        type={type}
        name={name}
        id={id ? `${id}-${name}` : name}
        className="peer block w-full border-2 border-b-gray-500 border-l-transparent border-r-transparent border-t-transparent bg-transparent px-1 py-4   outline-none autofill:pb-2 autofill:pt-6 focus:border-b-blue-500  focus:pb-2 focus:pt-6
    disabled:cursor-not-allowed  disabled:bg-slate-200 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
        required={required}
        value={value}
        onChange={onChange}
        placeholder=""
      />
      <label
        htmlFor={id ? `${id}-${name}` : name}
        className=" pointer-events-none  absolute  left-0 top-0 h-full origin-[0_0] truncate px-1 py-4 capitalize peer-focus:-translate-y-1.5 peer-focus:translate-x-0.5  peer-focus:scale-90 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500 "
      >
        {label ?? name}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
    </div>
  );
}
