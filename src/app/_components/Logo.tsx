import Image from "next/image";
import logo from "~/assets/svg/logo.svg";

export default function Logo({
  footer = false,
  sidebar = false,
}: {
  footer?: boolean;
  sidebar?: boolean;
}) {
  if (sidebar) {
    return (
      <Image
        src={logo as string}
        alt="travel town holidays"
        className="h-8 w-auto"
        width={600}
        height={200}
      />
    );
  }

  if (footer) {
    return (
      <Image
        src={logo as string}
        alt="travel town holidays"
        className="h-16 w-auto"
        width={600}
        height={200}
      />
    );
  }
  return (
    <Image
      src={logo as string}
      alt="travel town holidays"
      className="h-8 w-auto lg:h-12"
      width={600}
      height={200}
    />
  );
}
