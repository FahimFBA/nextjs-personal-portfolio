import React from "react";
import ProjectCard from "../Card/ProjectCard";

const Portfolio = ({ projects }: { projects: any[] }) => {
  console.log(projects);
  return (
    <section id="portfolio" className="pt-20 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer text-2xl">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 justify-center">
          {projects?.map((item) => <ProjectCard key={item?._id} {...item} />)}
          {projects?.map((item) => <ProjectCard key={item?._id} {...item} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
