"use client";
import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import GoogleIcon from "~/assets/svg/google_logo_icon";
import Star from "~/assets/svg/Star";
import { Quote } from "~/assets/svg";

export default function Reviews({
  reviews,
}: {
  reviews: {
    image: string;
    id: string;
    review: string;
    imageDescription: string;
    personName: string;
  }[];
}) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    fade: false,
    arrows: false,
    speed: 500,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOntrue: true,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="slider-container mx-auto py-16">
      <SectionTitle title="reviews" />
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((reviewItem) => {
          const { id, image, imageDescription, personName, review } =
            reviewItem;
          return (
            <article
              key={id}
              className="relative grid h-full place-items-center overflow-hidden rounded-md bg-blue-100 px-2 py-8 backdrop-blur-sm backdrop-filter sm:px-8 sm:py-12"
            >
              <div className="grid place-items-center">
                <div className="mx-auto flex flex-col gap-8">
                  <div className="flex gap-8">
                    <Image
                      src={image}
                      width={80}
                      height={80}
                      alt={`${imageDescription} profile picture`}
                      className="h-12 w-12 rounded-[50%] object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold capitalize">
                        {personName}
                      </h3>
                      <div className="flex gap-2">
                        <span>
                          <Star className="w-5" />
                        </span>
                        <span>
                          <Star className="w-5" />
                        </span>
                        <span>
                          <Star className="w-5" />
                        </span>
                        <span>
                          <Star className="w-5" />
                        </span>
                        <span>
                          <Star className="w-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="max-w-[35rem] pl-2 text-sm">{review}</p>
                </div>
                <Quote className="absolute -right-5 -top-5 -z-10 w-20 rotate-180" />
              </div>
            </article>
          );
        })}
      </Slider>
      <p className="my-4 flex flex-col items-center justify-center gap-2 px-4 md:flex-row md:gap-4">
        Creating Unforgettable Memories, One Trip at a Time. Read What Our
        Travelers Say.{" "}
        <a
          href="https://g.co/kgs/u283m1R"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 underline"
        >
          <span>
            <GoogleIcon className="w-4" />
          </span>
          <span>Reviews</span>
        </a>
      </p>
    </section>
  );
}
