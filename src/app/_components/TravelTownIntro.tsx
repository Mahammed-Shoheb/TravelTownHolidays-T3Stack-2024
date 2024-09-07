"use client";
import { motion } from "framer-motion";
import {
  animateIntoViewLeft,
  animateIntoViewRight,
} from "~/utils/motion-helper";
import Image from "next/image";

export default function TravelTownIntro() {
  return (
    <section className="overflow-x-hidden bg-blue-100 bg-opacity-30">
      <div className="align-section-center py-16">
        <div className="mb-4 flex flex-col items-center justify-evenly gap-4 lg:flex-row">
          <motion.div
            variants={animateIntoViewRight}
            initial="initial"
            exit="exit"
            whileInView={"animate"}
            viewport={{ once: false }}
            className="grid place-items-center object-cover"
          >
            <Image
              src={
                "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724521450/Travel%20Town%202024/Home%20Page%20images/pexels-lara-jameson-8828672_ibqyps.jpg"
              }
              alt="A person planning a trip, sitting at a table with a world map spread out."
              width={400}
              height={400}
              loading="lazy"
              className="mb-4 h-60 w-auto rounded-lg object-cover shadow-md sm:h-48 lg:h-64"
            />
          </motion.div>
          <motion.div
            variants={animateIntoViewLeft}
            initial="initial"
            exit="exit"
            whileInView={"animate"}
            viewport={{ once: false }}
            className="grid max-w-[35rem] place-items-center"
          >
            <p className="text-base">
              Planning a vacation can be overwhelming. With countless
              destinations to choose from, endless accommodation options, and
              the pressure to find the best deals, organizing the perfect trip
              often feels like a daunting task. You might find yourself spending
              hours online, comparing prices and reading reviews, only to end up
              more confused than when you started.
            </p>
          </motion.div>
        </div>
        <div className="mb-4 flex flex-col items-center justify-evenly gap-4 lg:flex-row">
          <motion.div
            variants={animateIntoViewLeft}
            initial="initial"
            exit="exit"
            whileInView={"animate"}
            viewport={{ once: false }}
            className="order-2 grid max-w-[35rem] place-items-center lg:order-none"
          >
            <p>
              Not to mention, the fear of missing out on hidden gems or the
              worry of booking subpar experiences can add unnecessary stress.
              What if you could have a seamless, worry-free travel planning
              experience? Imagine the frustration of arriving at your
              destination only to realize there were better deals or more
              exciting activities you didn’t know about. This can turn your
              dream vacation into a source of stress and disappointment.
            </p>
          </motion.div>
          <motion.div
            variants={animateIntoViewRight}
            initial="initial"
            exit="exit"
            whileInView={"animate"}
            viewport={{ once: false }}
            className="grid place-items-center object-cover"
          >
            <Image
              src={
                "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724570274/Travel%20Town%202024/Home%20Page%20images/pexels-ivan-samkov-5428994_dda5nu.jpg"
              }
              alt="Group of people sitting at a table in front of laptop discussing about there travel plan"
              width={400}
              height={400}
              loading="lazy"
              className="mb-4 h-60 w-auto rounded-lg object-cover shadow-md sm:h-48 lg:h-64"
            />
          </motion.div>
        </div>
        <div className="mb-4 flex flex-col items-center justify-evenly gap-4 lg:flex-row">
          <motion.div
            variants={animateIntoViewRight}
            initial="initial"
            exit="exit"
            whileInView={"animate"}
            viewport={{ once: false }}
            className="grid place-items-center object-cover"
          >
            <Image
              src={
                "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724521443/Travel%20Town%202024/Home%20Page%20images/istockphoto-905433284-1024x1024-transformed_e4cnss.jpg"
              }
              alt="A travel agent with two people discussing about there travel plan"
              width={400}
              height={400}
              loading="lazy"
              className="mb-4 h-60 w-auto rounded-lg object-cover shadow-md sm:h-48 lg:h-64"
            />
          </motion.div>
          <motion.div
            variants={animateIntoViewLeft}
            initial="initial"
            exit="exit"
            whileInView={"animate"}
            viewport={{ once: false }}
            className="grid max-w-[35rem] place-items-center"
          >
            <p>
              At our travel agency, we take the hassle out of vacation planning.
              Our team of experienced travel experts is dedicated to curating
              personalized trips that match your preferences and budget. We
              handle everything—from finding the best flights and accommodations
              to uncovering the must-see attractions and hidden gems. With our
              exclusive deals and insider knowledge, you can relax knowing
              you&apos;re getting the best value and experiences. Let us turn
              your travel dreams into reality, so you can focus on making
              memories, not plans.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
