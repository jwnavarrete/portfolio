"use client";

import { motion } from "framer-motion";
import { FiNavigation } from "react-icons/fi";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{  duration: 1 }}
        className="text-[3.5rem] xs:text-[4rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[10rem] font-semibold flex flex-col"
      >
        {title}{" "}
        <motion.span
          initial={{ rotate: "-45deg" }}
          whileInView={{ rotate: "90deg" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
          className="text-accent self-start"
        >
          <FiNavigation />
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
