import {
  CardSquare,
  CarouselSlider,
  Category,
  EnquireButton,
  FaqSection,
  Reviews,
  SearchBar,
  SectionTitle,
  TravelTownIntro,
} from "../_components";
import { api } from "~/trpc/server";
import ArrowRightIcon from "~/assets/svg/arrowRightIcon";
import Image from "next/image";
import { dynamicBlurDataUrl } from "~/utils/dynamicBlurDataUrl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Explore exclusive travel deals and packages with Travel Town Holidays. Discover international and domestic destinations tailored to your dreams.",
  keywords: [
    "Travel Town Holidays",
    "Best Travel Deals",
    "Holiday Packages",
    "Affordable Vacation Packages",
    "Custom Travel Packages",
    "International Travel Packages",
    "Domestic Travel Deals",
    "Family Vacation Packages",
    "Luxury Travel Experiences",
    "Adventure Tours",
    "Best Travel Deals for International Destinations",
    "Affordable Holiday Packages for Families",
    "Customizable Travel Packages for Couples",
    "Top Domestic Travel Packages in India",
    "Luxury Vacation Packages at Affordable Prices",
    "traveltownholidays",
    "Travel Town Holidays Reviews",
    "Travel Town Holidays Packages",
    "Book with Travel Town Holidays",
    "Travel Town Holidays Discounts",
  ],
};

export default async function Home() {
  const {
    homePage,
    reviews,
    categories,
    internationalDestinations,
    domesticDestinations,
    faqs,
  } = await api.client.getHomePageContent();

  return (
    <main>
      {/* HERO SECTION */}
      <section className="align-section-center relative h-[60vh] px-0 sm:h-[90vh] md:h-[45vh] lg:h-[70vh]">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 -z-[2] h-full w-full rounded-lg object-cover"
          width={500}
          height={500}
          aria-hidden="true"
        >
          <source src={homePage?.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 grid place-items-center rounded-lg bg-[rgb(0_0_0_/_40%)] text-left text-white sm:text-center">
          <div className="grid w-[90%] place-items-center gap-2 sm:mx-auto sm:w-[80%] ">
            <h1 className="font-sans text-4xl font-bold capitalize sm:text-3xl md:text-4xl lg:text-5xl">
              Discover Your Dream Vacation: Book Exclusive Travel Deals Today!
            </h1>
            <p className="max-w-[40rem] text-sm text-slate-100 md:text-base">
              {homePage?.titleDetails}
            </p>
            <SearchBar />
            <div className="flex flex-col items-stretch justify-center gap-1 rounded-md bg-white bg-opacity-30 backdrop-blur-sm backdrop-filter sm:flex-row sm:gap-4 sm:rounded-full sm:ps-4 md:text-xl">
              <div className="flex gap-4">
                <a
                  href="#international"
                  className="group flex items-center justify-center gap-1 px-2 py-1 font-semibold capitalize duration-150 hover:text-slate-900 md:gap-2"
                >
                  <span>international</span>
                  <span className="w-4 text-white">
                    <ArrowRightIcon className="fill-white duration-150 group-hover:fill-slate-900" />
                  </span>
                </a>
                <a
                  href="#domestic"
                  className="group flex items-center justify-center gap-1 px-2 py-1 font-semibold capitalize duration-150 hover:text-slate-900 md:gap-2"
                >
                  <span>domestic</span>
                  <span className="w-4 text-white">
                    <ArrowRightIcon className="fill-white duration-150 group-hover:fill-slate-900" />
                  </span>
                </a>
              </div>
              <div className="flex justify-between gap-4">
                <a
                  href="#categories"
                  className="group flex items-center justify-center gap-1 px-2 py-1 font-semibold capitalize duration-150 hover:text-slate-900 md:gap-2"
                >
                  <span>categories</span>
                  <span className="w-4 text-white">
                    <ArrowRightIcon className="fill-white duration-150 group-hover:fill-slate-900" />
                  </span>
                </a>
                <EnquireButton homePage={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <TravelTownIntro />

      {/* INTERNATIONAL CAROUSEL SECTION */}
      <section id="international">
        <CarouselSlider title="international packages">
          {internationalDestinations?.map((destination) => {
            const { id, image, imageDescription, name, startingFrom } =
              destination;
            return (
              <CardSquare
                img={image}
                imgDesc={imageDescription}
                name={name}
                startingFrom={startingFrom}
                key={id}
              />
            );
          })}
        </CarouselSlider>
      </section>

      {/* DOMESTIC CAROUSEL SECTION */}
      <section className="bg-blue-100 bg-opacity-30" id="domestic">
        <CarouselSlider title="domestic packages">
          {domesticDestinations?.map((destination) => {
            const { id, image, imageDescription, name, startingFrom } =
              destination;
            return (
              <CardSquare
                img={image}
                imgDesc={imageDescription}
                name={name}
                startingFrom={startingFrom}
                key={id}
              />
            );
          })}
        </CarouselSlider>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-16" id="categories">
        <SectionTitle title="categories" />
        <div className="align-section-center">
          <div className="grid gap-4 gap-y-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories?.map((category, i) => {
              return <Category {...category} key={i} />;
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="bg-blue-100 bg-opacity-30">
        <div className="align-section-center py-16">
          <SectionTitle title="why choose us" />
          <p className="mx-auto mb-4 max-w-[40rem]">
            At Travel Town Holidays, we&apos;re passionate about creating
            unforgettable travel experiences. We believe everyone deserves a
            getaway that exceeds expectations, and we&apos;re dedicated to
            making that happen. Here&apos;s why Travel Town Holidays should be
            your one-stop shop for crafting your perfect vacation:
          </p>
          <div className="relative overflow-hidden py-16">
            <div className="absolute top-[50%] hidden h-[0.125rem] w-full rotate-90 bg-blue-500/50 backdrop-blur-sm backdrop-filter sm:flex"></div>
            <div className="relative mb-8 grid items-center justify-items-center sm:grid-cols-2 sm:gap-8">
              <div className="absolute left-[50%] top-[50%] hidden h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full border-4 border-blue-200 bg-blue-400 sm:block"></div>
              <Image
                src={
                  "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725076647/Travel%20Town%202024/Home%20Page%20images/laptop-2557615_1280_pz4rv6.jpg"
                }
                alt="Two people planning a trip together, looking at a map and using a laptop."
                width={400}
                height={400}
                loading="lazy"
                className="mb-4 h-60 w-auto rounded-lg object-cover shadow-md sm:h-48 lg:h-64"
                // placeholder="blur"
                // blurDataURL={await dynamicBlurDataUrl(
                //   "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725076647/Travel%20Town%202024/Home%20Page%20images/laptop-2557615_1280_pz4rv6.jpg",
                // )}
              />
              <div className="sm:ps-4">
                <h3 className="font-semibold">
                  Unbeatable Deals & Customization
                </h3>
                <p className="max-w-[25rem]">
                  We offer a vast selection of holiday packages at competitive
                  prices, catering to all budgets and travel styles. Whether you
                  crave an adventurous escape or a luxurious relaxation retreat,
                  we can tailor a package to your desires.
                </p>
              </div>
            </div>
            <div className="relative mb-8 grid items-center justify-items-center sm:grid-cols-2 sm:gap-8">
              <div className="absolute left-[50%] top-[50%] hidden h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full border-4 border-blue-200 bg-blue-400 sm:block"></div>
              <div className="order-2 sm:order-none">
                <h3 className="font-semibold">
                  Expertise & Personalized Service
                </h3>
                <p className="max-w-[25rem]">
                  Our team of travel experts boasts extensive knowledge of
                  domestic and international destinations. We&apos;ll listen to
                  your travel dreams and curate a personalized itinerary that
                  ensures you experience the best of your chosen location
                </p>
              </div>
              <Image
                src={
                  "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725078366/Travel%20Town%202024/Home%20Page%20images/pexels-alex-green-5699475_pthgud.jpg"
                }
                alt="Two people having a conversation over a table with a clipboard and a cup of coffee, representing a consultation or meeting."
                width={400}
                height={400}
                loading="lazy"
                className="mb-4 h-60 w-auto rounded-lg object-cover shadow-md sm:h-48 lg:h-64"
                // placeholder="blur"
                // blurDataURL={await dynamicBlurDataUrl(
                //   "https://res.cloudinary.com/dp2hek0t3/image/upload/v1725078366/Travel%20Town%202024/Home%20Page%20images/pexels-alex-green-5699475_pthgud.jpg",
                // )}
              />
            </div>
            <div className="relative mb-8 grid items-center justify-items-center sm:grid-cols-2 sm:gap-8">
              <div className="absolute left-[50%] top-[50%] hidden h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full border-4 border-blue-200 bg-blue-400 sm:block"></div>
              <Image
                src={
                  "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724766061/Travel%20Town%202024/Home%20Page%20images/pexels-olly-712413_x6daz6.jpg"
                }
                alt="Woman enjoying a fall day with leaves falling around her in a park, symbolizing joy and freedom in nature."
                width={400}
                height={400}
                loading="lazy"
                className="mb-4 h-60 w-auto rounded-lg object-cover shadow-md sm:h-48 lg:h-64"
                // placeholder="blur"
                // blurDataURL={await dynamicBlurDataUrl(
                //   "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724766061/Travel%20Town%202024/Home%20Page%20images/pexels-olly-712413_x6daz6.jpg",
                // )}
              />
              <div className="sm:ps-4">
                <h3 className="font-semibold">Transparency & Peace of Mind</h3>
                <p className="max-w-[25rem]">
                  We prioritize clear communication and transparency throughout
                  the booking process. There are no hidden fees – you&apos;ll
                  get a complete breakdown of all costs upfront. Plus, with our
                  24/7 dedicated tour managers, you&apos;ll have constant
                  support throughout your trip, should you need anything.
                </p>
              </div>
            </div>
          </div>
          <p className="mx-auto mb-4 max-w-[40rem]">
            Let Travel Town Holidays transform your travel plans into
            extraordinary memories. Contact us today and get ready to embark on
            an unforgettable adventure!
          </p>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      {reviews && <Reviews reviews={reviews} />}

      {/* FAQs SECTION */}
      {faqs && <FaqSection youtubeURL={homePage?.youtubeURL} faqs={faqs} />}
    </main>
  );
}
