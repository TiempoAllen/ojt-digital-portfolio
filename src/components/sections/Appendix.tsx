import { DOCUMENTATION_DATA } from "@/model/documentation";
import React from "react";
import AppendixCard from "../cards/AppendixCard";

const Appendix = () => {
  return (
    <section
      id="appendix"
      className="py-16 px-6 xl:px-32 flex flex-col items-center gap-12 bg-white text-gray-900 w-fit"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        X. Appendix
      </h1>
      <div className="flex flex-col flex-wrap justify-center xl:items-start sm:items-center md:items-center lg:items-center gap-4 p-4 w-auto">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {DOCUMENTATION_DATA.map((documentation, index) => (
            <AppendixCard key={index} documentation={documentation} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appendix;
