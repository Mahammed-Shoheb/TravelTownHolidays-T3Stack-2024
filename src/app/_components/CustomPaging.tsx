"use client";
import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CustomPaging({
  images,
}: {
  images: {
    id: string;
    url: string;
    description: string;
  }[];
}) {
  const sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef.current!.slickNext();
  };
  const previous = () => {
    sliderRef.current!.slickPrev();
  };

  const settings = {
    customPaging: function (i: number) {
      return (
        <a className="">
          <Image
            src={images[i]!.url}
            alt={images[i]!.description}
            width={100}
            height={100}
            className="h-full w-full object-fill"
          />
        </a>
      );
    },
    dots: true,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container custom-paging relative h-44">
      <button
        className="absolute left-0 top-[50%] z-10 grid  translate-x-[-50%] translate-y-[-50%]  place-items-center rounded-md bg-blue-500 p-1 text-xs text-white hover:bg-blue-400"
        onClick={previous}
        aria-label="previous"
      >
        <FaArrowLeft className="text-xl" />
      </button>
      <button
        className="absolute right-0 top-[50%] z-10 grid translate-x-[50%] translate-y-[-50%] place-items-center rounded-md bg-blue-500 p-1 text-xs text-white hover:bg-blue-400"
        onClick={next}
        aria-label="next"
        type="button"
      >
        <FaArrowRight className="text-xl" />
      </button>
      <Slider {...settings} ref={sliderRef}>
        {images.map((img) => {
          return (
            <Image
              key={img.id}
              src={img.url}
              alt={img.description}
              height={300}
              width={300}
              className="block h-44 w-full object-cover"
            />
          );
        })}
      </Slider>
    </div>
  );
}
