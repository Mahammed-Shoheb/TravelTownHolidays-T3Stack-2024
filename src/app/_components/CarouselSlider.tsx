"use client";
import { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

export default function CarouselSlider({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef.current!.slickNext();
  };
  const previous = () => {
    sliderRef.current!.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container align-section-center px-4 py-16">
      <SectionTitle title={title} />
      <div className="mb-4 flex justify-end gap-4">
        <button
          className="button grid place-items-center rounded-md bg-blue-500 p-2 duration-150 hover:bg-blue-400"
          onClick={previous}
          aria-label="previous"
          type="button"
        >
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <button
          className="button grid place-items-center rounded-md bg-blue-500 p-2 duration-150 hover:bg-blue-400"
          onClick={next}
          aria-label="next"
          type="button"
        >
          <FaArrowRight className="text-2xl text-white" />
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
}
