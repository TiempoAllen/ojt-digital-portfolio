import CompanyProjects from "@/model/company-projects";
import React from "react";
import Image from "next/image";

const CompanyProjectsCard: React.FC<{ projects: CompanyProjects }> = ({
  projects,
}) => {
  return (
    <div className="relative group h-80 aspect-square overflow-hidden rounded-2xl cursor-pointer">
      <Image
        src={`/company-projects/${projects.icon}.jpg`}
        alt={projects.label}
        fill
        sizes="100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-lg font-semibold block group-hover:hidden">
          {projects.label}
        </h3>

        <p className="mt-1 text-sm hidden group-hover:block">
          {projects.content}
        </p>
      </div>
    </div>
  );
};

export default CompanyProjectsCard;
