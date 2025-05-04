import React from "react";
import { Cinzel } from "next/font/google";
import Image from "next/image";
import sparksoftLogo from "../../../public/sparksoft-logo.png";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

const CompanyName = () => {
  return (
    <section
      id="companyName"
      className="py-16 px-6 xl:px-32 flex flex-col items-center justify-center gap-12 bg-white text-gray-900 w-full"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        I. Company Name
      </h1>
      <div className="aspect-square relative w-24 h-24">
        <Image
          src={sparksoftLogo}
          alt="sparksoft-logo"
          sizes="10"
          fill
          className="aspect-square object-cover"
        />
      </div>
      <h1 className={`${cinzel.className} text-5xl font-bold`}>
        SPARKSOFT SOLUTIONS INC.
      </h1>
    </section>
  );
};

export default CompanyName;
