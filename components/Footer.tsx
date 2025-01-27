"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ borderRadius: "0 0 0 0" }}
      whileInView={{ borderRadius: "1.5rem 1.5rem 0 0" }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="wrapper section-padding bg-accent text-dark rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="overflow-hidden">
        <motion.h3
          initial={{ opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0 }}
          transition={{  duration: 1, delay: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold text-center flex gap-5 justify-center items-center"
        >
          <span className="text-xl md:text-xl lg:text-2xl xl:text-xl 2xl:text-8xl animate-transform-x-full">
         
          </span>
          <span>Eager to hear from you!</span>
          <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl animate-linear">
         
          </span>
        </motion.h3>
      </div>

      <div className="mt-10  text-center px-20 text-lg md:text-xl">
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            &copy; {new Date().getFullYear()} John Willian Navarrete
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0 }}
            transition={{  duration: 1, delay: 0.9 }}
          >
            All Rights Reserved
          </motion.p>
        </div>
        
      </div>
    </motion.footer>
  );
};

export default Footer;
