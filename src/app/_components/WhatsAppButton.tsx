"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "~/assets/svg";

export default function WhatsAppButton({ title }: { title: string }) {
  const path = usePathname();

  return (
    <a
      href={`https://wa.me/919686879898?text=Hi Travel Town Holidays Team,%0a%0a Webpage URL: https://traveltownholidays.com${path}.%0a%0aI recently came across your Holiday packages on your website. I'm particularly interested in one of the offers and would love to discuss the details further.%0a%0apackage:${title}%0a%0a Could someone please reach out to me?.%0a%0aThank you!`}
      className="flex items-center justify-center gap-2 rounded-md bg-blue-600 px-2 py-3 font-semibold tracking-wider text-white shadow-md duration-150 hover:bg-blue-500"
      target="_blank"
      rel="noreferrer"
    >
      <span className="w-6">
        <WhatsAppIcon />
      </span>
      <span>whatsApp</span>
    </a>
  );
}
