import { CircleCheck, CircleX, CrosshairIcon, CrossIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

let easeing = [0.6, -0.05, 0.01, 0.99];

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

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.9, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.9,
      ease: easeing,
    },
  },
};

const ConfirmationModal = ({
  fname,
  lname,
  date,
  time,
  setModal,
  setFirstName,
  setLastName,
  setPhone,
  setEmail,
  setName,
  setDate,
  setTimeSlot,
}) => {
  return (
    <motion.div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-start pt-16 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: easeing }}
        className="bg-white rounded-lg shadow-md p-6 w-[400px] md:w-[40%]"
      >
        <div className="text-red-600 flex justify-end cursor-pointer">
          <CircleX
            onClick={() => {
              setModal(false);
              setFirstName("");
              setLastName("");
              setPhone("");
              setEmail("");
              setName("");
              setDate(null);
              setTimeSlot("");
            }}
          />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <CircleCheck className="m-auto text-green-400 w-[100px] h-[100px]" />
        </div>
        <div className="text-center">
          <h1 className="text-gray-400">
            <span className="text-emerald-400 text-lg">Congrats</span>{" "}
            <span className="text-black font-semibold">
              {fname} {lname},
            </span>{" "}
            your booking has been confirmed on{" "}
            <span className="text-black">{date}</span> at{" "}
            <span className="text-black">"{time}"</span>.
          </h1>
          <p>Please make sure to arrive before time.</p>
          <p>We look forward to providing you with an amazing experience</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmationModal;
