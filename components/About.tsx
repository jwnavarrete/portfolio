"use client";

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="wrapper section-padding">
      <SectionTitle title="About Me" />

      {/* ABOUT */}
      <div className="mt-20 grid xl:grid-cols-5 gap-20">
        {/* CONTENTS */}
        <div className="lg:col-span-3 text-4xl overflow-hidden">
          <motion.p
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
            className="leading-[1.2]"
          >
            Hello, I am John Navarrete, a passionate web developer with a
            intense focus on MERN stack. I started my web development journey
            from January 2015. I am fond of programming from my university life.
          </motion.p>

            <motion.p
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.7 }}
            className="leading-[1.2] mt-8 text-2xl"
            >
            My dedication to personal and professional
            growth ensures that I am always ready to tackle new challenges and
            contribute effectively to any team.
            </motion.p>
          {/* STATS */}
          {/* <div className="mt-20 flex flex-wrap xl:flex-nowrap gap-20">
            <div>
              <CountUp
                enableScrollSpy
                end={data.repos}
                className="text-8xl font-semibold text-accent"
              />
              <div className="text-2xl">
                <ButtonAsLink
                  href="https://github.com/jwnavarrete"
                  target="_blank"
                  placeholder="Repositories"
                />
              </div>
            </div>
            <div>
              <CountUp
                enableScrollSpy
                end={data.contributions}
                duration={2}
                className="text-8xl font-semibold text-accent"
              />
              <div className="text-2xl">
                <ButtonAsLink
                  href="https://github.com/jwnavarrete"
                  target="_blank"
                  placeholder="Contributions"
                />
              </div>
            </div>
         
          </div> */}
        </div>
        {/* BEHIND IMAGE */}
        <motion.div
          initial={{ scale: 0, borderRadius: "100px" }}
          whileInView={{ scale: 1, borderRadius: "23rem" }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="lg:col-span-2 w-full h-[28rem] bg-black/40 border border-light/10 rounded-2xl shadow-xl"
        >
          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0, borderRadius: "100px" }}
            whileInView={{ scale: 1, borderRadius: "23rem" }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            className="w-full h-[28rem] overflow-hidden rounded-2xl group relative shadow-xl"
          >
            {/* OVERLAY */}
            <div className="absolute z-[1] top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-accent/10 to-accent/50 w-full h-full group-hover:opacity-0 duration-[4000ms]"></div>
            <Image
              src="/foto.png"
              alt="John Willian Navarrete"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover group-hover:scale-125 duration-[4000ms]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
