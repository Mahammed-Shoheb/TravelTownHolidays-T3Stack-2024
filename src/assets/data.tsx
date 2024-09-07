import {
  HomeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  HotelIcon,
  PhoneIcon,
  InternationalIcon,
  DomesticIcon,
} from "~/assets/svg";

export const navLinks = [
  {
    name: "Home",
    url: "/",
    icon: <HomeIcon />,
    containLinks: false,
  },
  {
    name: "domestic",
    url: "/domestic-packages",
    icon: <DomesticIcon />,
    icon2: <ArrowUpIcon />,
    hoverIcon: <ArrowDownIcon />,
    containLinks: true,
  },
  {
    name: "international",
    url: "/international-packages",
    icon: <InternationalIcon />,
    icon2: <ArrowUpIcon />,
    hoverIcon: <ArrowDownIcon />,
    containLinks: true,
  },
  {
    name: "hotels",
    url: "/hotels",
    icon: <HotelIcon />,
    containLinks: false,
  },
  {
    name: "contact",
    url: "/contact",
    icon: <PhoneIcon />,
    containLinks: false,
  },
];
export const adminNavLinks = [
  {
    name: "Home",
    url: "/admin",
  },
  {
    name: "reviews",
    url: "/admin/reviews",
  },
  {
    name: "categories",
    url: "/admin/categories",
  },
  {
    name: "hotels",
    url: "/admin/hotels",
  },
  {
    name: "packages",
    url: "/admin/packages",
  },
  {
    name: "offers",
    url: "/admin/offers",
  },
  {
    name: "FAQs",
    url: "/admin/FAQs",
  },
];
