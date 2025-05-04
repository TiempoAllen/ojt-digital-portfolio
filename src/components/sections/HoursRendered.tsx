import Image from "next/image";
import React from "react";
import hoursRenderedImage from "../../../public/hours-rendered.svg";

const HoursRendered = () => {
  return (
    <section
      id="estimated"
      className="py-16 px-6 xl:px-32 flex flex-col items-center gap-12 bg-white text-gray-900"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        VII. Estimated Number Of Hours Rendered
      </h1>
      <div className="flex flex-col xl:flex-row items-center xl:items-center justify-between gap-12 w-full max-w-7xl">
        <div className="relative w-full xl:w-1/2 h-[300px] md:h-[400px] xl:h-[450px]">
          <Image
            src={hoursRenderedImage}
            alt="trainee concerns illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="w-full xl:w-1/2 text-base xl:text-lg leading-relaxed text-justify">
          <h1 className="text-7xl font-bold sm:text-5xl md:text-6xl lg:leading-[1.1]">
            400+ Hours
          </h1>
          <p className="mt-4">
            I estimate that the total number of hours I accumulated during my
            OJT is around 400 to 500 hours, which includes not only the core
            development tasks but also various support activities. Aside from
            working on UI/UX design improvements, I also participated in team
            meetings, planning sessions, and feedback reviews.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HoursRendered;
