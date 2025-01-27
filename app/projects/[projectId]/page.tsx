"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { data } from "@/data/projects";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import SectionTitle from "@/components/SectionTitle";
import ButtonAsLink from "@/components/ButtonAsLink";

const ProjectDetailsPage = ({ params }: { params: { projectId: string } }) => {
  useSmoothScroll();

  const router = useRouter();

  const project = data.find((project) => project.id === +params.projectId);

  useEffect(() => {
    if (!project) {
      router.push("/projects");
    }
  }, [project, router]);

  if (!project) {
    return;
  }

  return (
    <main className="mt-24">
      <section className="wrapper section-padding">
        <SectionTitle title={project.title} />

        <div className="mt-20 grid md:grid-cols-2 gap-20 text-2xl">
          <div className="space-y-5">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-light/50 to-light/25"
              >
                {project.shortBio}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
              className="flex gap-5"
            >
              <ButtonAsLink
                href={project.liveLink}
                placeholder="Live"
                target="_blank"
              />
              {project.frontend && (
                <ButtonAsLink
                  href={project.frontend}
                  placeholder="Frontend"
                  target="_blank"
                />
              )}
              {project.backend && (
                <ButtonAsLink
                  href={project.backend}
                  placeholder="Backend"
                  target="_blank"
                />
              )}
              {project.fullstack && (
                <ButtonAsLink
                  href={project.fullstack}
                  placeholder="Fullstack"
                  target="_blank"
                />
              )}
            </motion.div>
          </div>
          <div className="overflow-hidden self-start">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
            >
              {project.description}
            </motion.p>
          </div>
        </div>

        <div className="mt-20 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.6 }}
          >
            <Image
              src={project.moreImages[0]}
              alt={project.title}
              width={1920}
              height={1080}
              priority
            />
          </motion.div>
        </div>

        <div className="mt-20 md:mt-40 grid lg:grid-cols-2 gap-20 md:gap-40 sm:px-20 md:px-40 text-2xl sm:text-4xl">
          <div className="overflow-hidden">
            <motion.p
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              {project.moreDescription[0]}
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
            >
              {project.moreDescription[1]}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding text-2xl">
        <div className="bg-indigo-500/10">
          <div className="wrapper py-20 md:py-40">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 1.5 }}
              >
                <Image
                  src={project.moreImages[1]}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-40 wrapper text-2xl sm:text-4xl">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="sm:px-20 md:px-40"
            >
              {project.moreDescription[2]}
            </motion.p>
          </div>
        </div>
        <div className="bg-green-500/10 mt-20 md:mt-40">
          <div className="wrapper py-20 md:py-40">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 1.5 }}
              >
                <Image
                  src={project.moreImages[2]}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-40">
          <div className="wrapper">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 1.5 }}
              >
                <Image
                  src={project.moreImages[3]}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="wrapper mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="flex gap-5"
          >
            <ButtonAsLink
              href={project.liveLink}
              placeholder="Live"
              target="_blank"
            />
            {project.frontend && (
              <ButtonAsLink
                href={project.frontend}
                placeholder="Frontend"
                target="_blank"
              />
            )}
            {project.backend && (
              <ButtonAsLink
                href={project.backend}
                placeholder="Backend"
                target="_blank"
              />
            )}
            {project.fullstack && (
              <ButtonAsLink
                href={project.fullstack}
                placeholder="Fullstack"
                target="_blank"
              />
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailsPage;
