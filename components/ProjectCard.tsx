"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonAsLink from "./ButtonAsLink";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string;
  live: string;
  front: string;
  back: string;
  full: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  image,
  description,
  tech,
  live,
  front,
  back,
  full,
}) => {
  return (
    <div className="grid lg:grid-cols-9 gap-20">
      {/* LEFT */}
      <div className="lg:col-span-4 w-full h-full">
        {/* BEHIND IMAGE */}
        <motion.div
          initial={{ scale: 0, borderRadius: "100px" }}
          whileInView={{ scale: 1, borderRadius: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="w-full lg:h-[30rem] bg-black/40 border border-light/10"
        >
          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0, borderRadius: "100px" }}
            whileInView={{ scale: 1, borderRadius: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            className="w-full lg:h-[30rem] overflow-hidden group"
          >
            <Link
              href={`/projects/${id}`}
              className="w-full lg:h-[30rem] overflow-hidden block"
            >
              <Image
                src={image}
                alt={title}
                width={1280}
                height={720}
                priority
                className="w-full h-full object-cover group-hover:scale-[1.155] duration-[2000ms]"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      {/* RIGHT */}
      <div className="lg:col-span-5 space-y-5 text-2xl">
        {/* TITLE */}
        <div className="relative inline-block">
          <Link href={`/projects/${id}`} className="linear-flow inline-block">
            <h3 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">
              {title}
            </h3>
          </Link>
          {/* SHUTTER ONE */}
          <motion.div
            initial={{ width: "100%" }}
            whileInView={{ width: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
            className="shutter absolute w-0 h-full bg-accent z-[1] left-0 top-0 pointer-events-none"
          ></motion.div>
          {/* SHUTTER TWO */}
          <motion.div
            initial={{ width: "100%" }}
            whileInView={{ width: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
            className="shutter absolute w-0 h-full bg-dark z-[2] left-0 top-0 pointer-events-none"
          ></motion.div>
        </div>
        {/* TECH */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.7 }}
            className="text-accent"
          >
            {tech}
          </motion.p>
        </div>
        {/*  DESCRIPTION */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
            className="text-light/60"
          >
            {description}
          </motion.p>
        </div>
        {/*  LINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.1 }}
          className="flex flex-wrap md:flex-nowrap gap-5"
        >
          <ButtonAsLink href={live} placeholder="Live" target="_blank" />
          {front && (
            <ButtonAsLink href={front} placeholder="Frontend" target="_blank" />
          )}
          {back && (
            <ButtonAsLink href={back} placeholder="Backend" target="_blank" />
          )}
          {full && (
            <ButtonAsLink href={full} placeholder="Fullstack" target="_blank" />
          )}
          <ButtonAsLink href={`/projects/${id}`} placeholder="View Details" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
