"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { YouTubeIcon } from "~/assets/svg";

const answerVariants = {
  closed: { height: 0 },
  open: { height: "auto", duration: 0.2 },
};

type OpenFAQs = Record<string, boolean>;

export default function FaqSection({
  youtubeURL,
  faqs,
}: {
  youtubeURL: string | undefined;
  faqs: {
    question: string;
    answer: string[];
    id: string;
  }[];
}) {
  const [openFaqs, setOpenFaqs] = useState<OpenFAQs>({});

  const toggleFaq = (id: string) => {
    setOpenFaqs((prevOpenFaqs) => ({
      ...prevOpenFaqs,
      [id]: !prevOpenFaqs[id],
    }));
  };

  return (
    <section className="bg-slate-200 bg-opacity-30 px-2 py-16 md:px-6">
      <SectionTitle title="frequently asked questions" />
      <div className="align-section-center flex flex-col">
        {/* YOUTUBE VIDEO */}
        <div className="mb-8">
          {youtubeURL && (
            <iframe
              src={youtubeURL}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
              className="mx-auto mb-4 h-[15rem] w-[100%] rounded-lg shadow-lg sm:h-[12rem] sm:w-[80%] md:h-[25rem] "
            />
          )}
          <div className="flex items-center justify-center">
            <a
              href="https://youtube.com/@mdaltaftraveler?si=o37JM4CAXf75QaEK"
              className="flex items-center justify-between gap-2 rounded-md border-2 bg-blue-600 px-4 py-2 font-semibold capitalize text-white duration-150 hover:bg-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <YouTubeIcon className="w-6" />
              </span>
              <span>visit our youtube channel</span>
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => {
            const isOpen = openFaqs[faq.id];
            return (
              <div key={faq.id}>
                <div className="mb-2 bg-blue-100 px-2 py-2 shadow-md hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">
                      {faq.question}
                    </h3>
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="rounded-[50%] bg-blue-500 p-1 text-white duration-150 hover:bg-blue-400"
                      aria-label="toggle to show or hide answer"
                      type="button"
                    >
                      {isOpen ? (
                        <span aria-expanded="false">
                          <FaMinus />
                        </span>
                      ) : (
                        <span aria-expanded="true">
                          <FaPlus />
                        </span>
                      )}
                    </button>
                  </div>
                  <motion.div
                    animate={isOpen ? "open" : "closed"}
                    variants={answerVariants}
                    className="overflow-hidden"
                  >
                    {faq.answer.map((paragraph, index) => {
                      return <p key={index}>{paragraph}</p>;
                    })}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
