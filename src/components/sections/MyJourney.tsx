import Image from "next/image";
import React from "react";
import journeyImage from "../../../public/journey.svg";

const MyJourney = () => {
  return (
    <section
      id="journey"
      className="py-16 px-6 xl:px-32 flex flex-col items-center gap-12 bg-white text-gray-900"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        VIII. My BSIT Internship Journey Reflection
      </h1>
      <div className="flex flex-col xl:flex-row items-center xl:items-center justify-between gap-12 w-full max-w-7xl">
        <div className="w-full xl:w-1/2 text-base xl:text-lg leading-relaxed text-justify">
          <p>
            My BSIT internship journey was a valuable chapter in my college
            life. It gave me the chance to experience how the things I learned
            in school are used in real workplaces. At first, I felt nervous
            because I wasn’t sure if I was ready for real tasks. But as days
            went by, I became more confident and excited to learn.
          </p>
          <p className="mt-4">
            One of the highlights of my internship was working on improving
            UI/UX design for an LGU project. It was the first time I got to use
            design tools like Figma on a real system. I learned how to make
            designs that are not just nice to look at, but also easy for users
            to understand and use. My mentor and teammates were very supportive
            and helped me improve my skills by giving feedback and letting me
            try new things.
          </p>
          <p className="mt-4">
            Aside from technical skills, I also learned important soft skills
            like communication, teamwork, and time management. I learned how to
            ask for help when I needed it and how to share my ideas clearly. I
            also learned the value of being responsible and finishing tasks on
            time.
          </p>
          <p className="mt-4">
            Looking back, I am proud of how much I have grown. My OJT experience
            taught me lessons that I will carry with me as I continue my journey
            in the IT field. It gave me a better picture of what kind of
            professional I want to become and reminded me why I chose this
            course in the first place.
          </p>
        </div>
        <div className="relative w-full xl:w-1/2 h-[300px] md:h-[400px] xl:h-[450px]">
          <Image
            src={journeyImage}
            alt="trainee concerns illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
