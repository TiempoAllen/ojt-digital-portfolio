import Image from "next/image";
import React from "react";
import recommendationsImage from "../../../public/recommendations.svg";

const CommentsSuggestions = () => {
  return (
    <section
      id="comments"
      className="py-16 px-6 xl:px-32 flex flex-col items-center gap-12 bg-white text-gray-900"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        VI. Comments, Suggestions, and Recommendations
      </h1>
      <div className="flex flex-col xl:flex-row items-center xl:items-center justify-between gap-12 w-full max-w-7xl">
        <div className="w-full xl:w-1/2 text-base xl:text-lg leading-relaxed text-justify">
          <p>
            My OJT experience was both meaningful and educational. I am thankful
            for the opportunity to be part of a supportive and skilled team. The
            guidance of my mentor and the welcoming environment helped me adjust
            quickly and perform well.
          </p>
          <p className="mt-4 font-bold">Suggestions and Recommendations:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li className="mt-2 list-inside">
              Continue providing clear guidance and feedback to future trainees.
            </li>
            <li className="mt-2 list-inside">
              Allow trainees to take part in more hands-on tasks and real
              project discussions to improve learning.
            </li>
            <li className="mt-2 list-inside">
              Schedule regular check-ins or short evaluations to track progress
              and boost confidence.
            </li>
          </ul>
          <p className="mt-4">
            Overall, I believe that with continued support and structure, this
            OJT program can help more students prepare for real-world IT
            careers.
          </p>
        </div>
        <div className="relative w-full xl:w-1/2 h-[300px] md:h-[400px] xl:h-[450px]">
          <Image
            src={recommendationsImage}
            alt="recommendations illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CommentsSuggestions;
