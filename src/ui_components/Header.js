import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.4,
      staggerDirection: 1,
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

const Header = () => {
  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="flex justify-between items-center shadow-lg sticky bg-white z-10"
      >
        <Link to={"/"}>
          <motion.div
            variants={header}
            className="flex items-center font-semibold"
          >
            <img src="/logo.jpg" className="h-20" />
            <h1>
              HORSE <span className="text-emerald-400">RIDE</span>
            </h1>
          </motion.div>
        </Link>

        <div
          initial="initial"
          animate="animate"
          className="flex justify-between items-center gap-4"
        >
          <motion.div
            variants={header}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="text-center"
          >
            <HoverCard>
              <HoverCardTrigger>
                <Phone className="cursor-pointer" />
              </HoverCardTrigger>
              <HoverCardContent>
                Contact :{" "}
                <span className="font-semibold cursor-pointer">
                  03682-22567
                </span>
              </HoverCardContent>
            </HoverCard>
          </motion.div>
          <motion.div
            variants={header}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="text-center"
          >
            <HoverCard>
              <HoverCardTrigger>
                <Mail className="cursor-pointer" />
              </HoverCardTrigger>
              <HoverCardContent>
                Mail :{" "}
                <span className="font-semibold cursor-pointer">
                  johndoe@gmail.com
                </span>
              </HoverCardContent>
            </HoverCard>
          </motion.div>
          <motion.div
            variants={header}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to={"/book"}>
              <button className="border-2 border-emerald-400 text-emerald-400 hover:text-emerald-300 rounded-lg m-3 px-3 py-1">
                Book Now
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
