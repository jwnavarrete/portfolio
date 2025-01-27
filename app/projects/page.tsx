"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  useSmoothScroll();

  return (
    <main className="mt-24">
      <Projects showAll={true} />
    </main>
  );
};

export default ProjectsPage;
