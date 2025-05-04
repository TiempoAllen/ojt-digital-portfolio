import { Pin, Target, User } from "lucide-react";
import React from "react";

const DivisionAssignment = () => {
  return (
    <section
      id="department"
      className="py-8 px-6 xl:px-28 flex flex-col justify-center items-center gap-12 leading-tight tracking-tighter my-8"
    >
      <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:leading-[1.1]">
        III. Department / Division Assignment
      </h1>
      <div className="flex items-start justify-center gap-4">
        <div className="flex flex-col items-center justify-start gap-2">
          <div className="flex items-start justify-center gap-2 text-foreground font-bold text-xl">
            <Pin className="h-7 w-auto" />
            <h2>Overview</h2>
          </div>
          <p className="text-left font-light leading-relaxed text-base">
            As part of the internship program, I was assigned to the Software
            Development Department, a dynamic division responsible for creating,
            maintaining, and enhancing digital solutions that support both
            internal operations and public-facing services for the Local
            Government Unit (LGU).
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2 text-foreground font-bold text-xl">
            <User className="h-7 w-auto" />
            <h2>Supervision & Mentorship</h2>
          </div>
          <p className="text-left font-light leading-relaxed text-base">
            Mr. Lagunsad played a pivotal role in guiding my daily tasks,
            offering valuable insights into best practices in front-end
            development, and helping me build a solid foundation in
            user-centered design methodologies.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-2">
          <div className="flex items-start justify-start gap-2 text-foreground font-bold text-xl">
            <Target className="h-7 w-auto" />
            <h2>Scope of Function / Duty / Responsibility</h2>
          </div>
          <p className="text-left font-light leading-relaxed text-base">
            My primary role involved conducting UI/UX research and proposing
            design enhancements for an existing LGU web system. I evaluated the
            current interface for usability issues and, using tools like Figma,
            created improved layouts and visual elements focused on clarity,
            accessibility, and user-friendly navigation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DivisionAssignment;
