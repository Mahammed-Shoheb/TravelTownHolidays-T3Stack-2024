// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { carouselVariants } from "~/utils/motion-helper";

// export default function Carousel() {
//   const arr = [
//     {
//       src: "https://res.cloudinary.com/dp2hek0t3/image/upload/traveltownholidays/pexels-andrew-jones-10682557_1_ohejt6.jpg",
//     },
//     {
//       src: "https://res.cloudinary.com/dp2hek0t3/image/upload/traveltownholidays/ubud-bali-2379365_1920_1_krteof.jpg",
//     },
//     {
//       src: "https://res.cloudinary.com/dp2hek0t3/image/upload/traveltownholidays/kuala-lumpur-gd334e9a34_1920_1_q1wjnp.jpg",
//     },
//     {
//       src: "https://res.cloudinary.com/dp2hek0t3/image/upload/traveltownholidays/pexels-kin-pastor-777059_1_xkoemx.jpg",
//     },
//     {
//       src: "https://res.cloudinary.com/dp2hek0t3/image/upload/traveltownholidays/water-g7f2022ad9_1920_1_nkvxvv.jpg",
//     },
//     {
//       src: "https://res.cloudinary.com/dp2hek0t3/image/upload/traveltownholidays/sea-gf205b04d9_1920_1_xwp1xk.jpg",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === arr.length - 1 ? 0 : prevIndex + 1,
//     );
//   };

//   // const handlePrev = () => {
//   //   setCurrentIndex((prevIndex) =>
//   //     prevIndex === 0 ? arr.length - 1 : prevIndex - 1,
//   //   );
//   // };

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       handleNext();
//     }, 1000 * 3);

//     return () => clearTimeout(timeoutId);
//   }, [currentIndex]);

//   return (
//     <section className="relative mx-auto  h-96 w-80  overflow-x-hidden rounded-2xl ">
//       {arr.map((ele, index) => {
//         return (
//           <motion.article
//             key={index}
//             className="carousel-item absolute h-full w-full"
//             initial={false}
//             animate={currentIndex === index ? "center" : "exit"}
//             variants={carouselVariants}
//             custom={index - currentIndex}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           >
//             <Image
//               src={ele.src}
//               width={300}
//               height={500}
//               alt=""
//               className="block h-full  w-full  object-cover"
//             />
//             <span className="absolute left-0 top-0 rounded-ee-2xl rounded-ss-2xl bg-yellow-400 px-2 py-1">
//               place
//             </span>
//           </motion.article>
//         );
//       })}
//     </section>
//   );
// }
