import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

let easeing = [0.6, -0.05, 0.01, 0.99];

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const letter = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ...transition,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

const hoverEffect = {
  whileHover: {
    scale: 1.5,
    rotate: 630,
    borderRadius: "100%",
  },
  whileTap: {
    scale: 0.8,
    rotate: 630,
    borderRadius: "100%",
  },
};

const Body = () => {
  return (
    <div className="my-2">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: easeing }}
        className="relative"
      >
        <div className="overflow-hidden">
          <Carousel />
        </div>
        <motion.div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-5">
          <motion.div
            variants={letter}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-6xl font-bold font-playwrite text-white"
          >
            <h1>Book a ride today</h1>
          </motion.div>
          <Link to={"/book"}>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              initial="initial"
              animate="animate"
              className="bg-emerald-400 text-white text-sm md:text-3xl font-poppins px-3 py-2 rounded-lg"
            >
              Book Now
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      <div className="flex justify-center flex-col items-center">
        <div className="flex justify-center items-center">
          <motion.h1
            variants={item}
            className="text-emerald-400 text-3xl font-semibold p-5"
          >
            Get to know your ride
          </motion.h1>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          exit="exit"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-4 gap-4 p-3"
        >
          <motion.div variants={item} whileHover={{ scale: 0.95 }}>
            <motion.div
              className="inline-block cursor-pointer"
              variants={hoverEffect}
            >
              <div className="">
                <img className="w-72 rounded-lg" src="/carousel/1.jpg" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-sm md:text-xl font-semibold p-1">Luffy</h1>
                <button className="border-2 border-emerald-400 text-emerald-400 text-xs md:text-sm rounded-lg px-2 py-1">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 0.95 }}>
            <motion.div className="inline-block cursor-pointer">
              <div className="">
                <img className="w-72 rounded-lg" src="/carousel/2.jpg" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-sm md:text-xl font-semibold p-1">Ace</h1>
                <button className="border-2 border-emerald-400 text-emerald-400 text-xs md:text-sm rounded-lg px-2 py-1">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 0.95 }}>
            <motion.div className="inline-block cursor-pointer">
              <div className="">
                <img className="w-72 rounded-lg" src="/carousel/4.jpg" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-sm md:text-xl font-semibold p-1">Zoro</h1>
                <button className="border-2 border-emerald-400 text-emerald-400 text-xs md:text-sm rounded-lg px-2 py-1">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 0.95 }}>
            <motion.div className="inline-block cursor-pointer">
              <div className="">
                <img className="w-72 rounded-lg" src="/carousel/5.jpg" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-sm md:text-xl font-semibold p-1">Shanks</h1>
                <button className="border-2 border-emerald-400 text-emerald-400 text-xs md:text-sm rounded-lg px-2 py-1">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Body;
