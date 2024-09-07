import { ContactForm, PageHero } from "../../_components";
import type { Metadata } from "next";
import {
  LocationIcon,
  PhoneIcon,
  Gmail,
  TwentyFourSevenIcon,
} from "~/assets/svg";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Travel Town Holidays crafts unforgettable travel experiences tailored to your dreams. Explore exotic destinations, discover hidden gems, and create lasting memories - all with our expert guidance. Book your dream vacation today!",
  keywords: "travel town holidays contact",
  openGraph: {
    url: `https://traveltownholidays.com/contact`,
    images: [
      {
        url: "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724529270/traveltownholidays/main%20page%20images/contact-3994018_pnkelz.jpg",
        width: 800,
        height: 600,
        alt: "phone, gmail chat icons",
      },
    ],
  },
};

export default function page() {
  return (
    <main>
      <PageHero
        src={
          "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724529270/traveltownholidays/main%20page%20images/contact-3994018_pnkelz.jpg"
        }
        alt="phone, gmail chat icons"
      />
      <div className="align-section-center my-8 grid items-start gap-8 py-16 sm:grid-cols-2">
        <ContactForm />
        <section className="mt-6 grid place-items-center sm:mt-1">
          <div>
            <h2 className="mb-4 text-xl font-semibold capitalize sm:text-2xl">
              find us
            </h2>
            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
              <div className="flex items-start gap-2">
                <span className="w-8">
                  <LocationIcon />
                </span>
                <address>
                  <strong>HO:</strong> Siddeshwara Nilaya 1st Floor <br />
                  Siddannalane cubban pet,
                  <br />
                  Bangalore 560002
                </address>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-8">
                  <LocationIcon />
                </span>
                <address>
                  <strong>BO:</strong> #2nd Floor Parwaz Plaza
                  <br /> College Road, <br />
                  Hosapete 583201
                </address>
              </div>
            </div>
            <p className="mb-4">
              <span className="font-semibold">GST Reg.No:</span> 29FPEPS0892N1ZY
            </p>
            <div className="flex flex-col gap-4 ">
              <p className="flex items-center gap-2 font-semibold">
                <span className="w-16">
                  <TwentyFourSevenIcon />
                </span>
                <span> We are available 24x7 Mon-Sun</span>
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="flex items-center gap-2 font-semibold capitalize">
                    <span className="w-8">
                      <Gmail />
                    </span>
                    email ID:
                  </h3>
                  <a
                    href="mailto:info@traveltownholidays.com"
                    className="hover:text-blue-500"
                  >
                    info@traveltownholidays.com
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="flex items-center gap-2 font-semibold capitalize">
                    <span className="w-8">
                      <PhoneIcon />
                    </span>
                    phone number:
                  </h3>
                  <div className="flex gap-2">
                    <a href="tel:+919686879898" className="hover:text-blue-500">
                      +919686879898,
                    </a>
                    <a href="tel:+918971882060" className="hover:text-blue-500">
                      +918971882060
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30790.918564107495!2d76.383204!3d15.275166000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9d42274b0b901%3A0xddd54387670845ca!2sTravel%20Town%20Holidays!5e0!3m2!1sen!2sin!4v1716908388654!5m2!1sen!2sin"
          width={400}
          height={300}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mx-auto mb-8 w-[90vw] border-none"
        />
      </section>
    </main>
  );
}
