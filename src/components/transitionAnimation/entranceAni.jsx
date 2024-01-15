import { motion } from "framer-motion";
import { useState } from "react";
import image from "../images/mainlogo.jpg";

function EntranceAni() {
  const [displayitem, setdisplayitem] = useState("visible");
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },
  };
  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  setTimeout(() => {
    setdisplayitem("hidden");
  }, 3000);

  let displaything = `absolute inset-0 flex items-end ${displayitem}`;

  return (
    <div className={displaything}>
      <motion.div
        className="absolute z-40 flex items-center justify-center w-full bg-[#2F2F31]"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <img
          src={image}
          alt=""
          className="h-96 w-96 object-cover fade-in-image -ml-6 pb-6 "
        />
        <motion.svg
          variants={textContainer}
          className="absolute z-40 flex left-[38%] top-[78%] "
        >
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          <text
            className="text-5xl font-bold text-center "
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            SolobyShey
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default EntranceAni;
