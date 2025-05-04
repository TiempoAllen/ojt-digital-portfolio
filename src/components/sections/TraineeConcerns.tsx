import Image from "next/image";
import React from "react";
import thingsLearnedImage from "../../../public/things-learned.svg";

const TraineeConcerns = () => {
  return (
    <section
      id="concerns"
      className="py-16 px-6 xl:px-32 flex flex-col items-center gap-12 bg-white text-gray-900"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        V. OJT Trainee Concerns
      </h1>
      <div className="flex flex-col xl:flex-row items-center xl:items-center justify-between gap-12 w-full max-w-7xl">
        <div className="relative w-full xl:w-1/2 h-[300px] md:h-[400px] xl:h-[450px]">
          <Image
            src={thingsLearnedImage}
            alt="trainee concerns illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="w-full xl:w-1/2 text-base xl:text-lg leading-relaxed text-justify">
          <p>
            During my OJT, I learned many useful things that helped me grow both
            as a student and as a future IT professional. I learned how to
            improve user interface (UI) and user experience (UX) design by
            studying real systems and applying design tools like Figma.
          </p>
          <p className="mt-4">
            I also gained knowledge about how software teams work together,
            share ideas, and solve problems. I developed better time management
            skills and learned the importance of meeting deadlines. Most of all,
            I realized how important teamwork, communication, and being open to
            feedback are in the workplace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TraineeConcerns;
