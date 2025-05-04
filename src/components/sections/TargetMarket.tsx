import Image from "next/image";
import React from "react";
import TargetMarketImage from "../../../public/target-market.jpg";

const TargetMarket = () => {
  return (
    <section className="flex md:flex-wrap lg:flex-wrap xl:flex-nowrap items-start justify-center gap-8 py-8 px-6 xl:px-28 w-full">
      <div className="relative w-full xl:w-1/2 aspect-[4/3]">
        <Image
          src={TargetMarketImage}
          alt="target-market-image"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <p className="text-left w-full xl:w-1/2 xl:text-lg font-light text-foreground">
        SparkSoft Solutions Inc. primarily focuses on delivering digital
        transformation solutions to government institutions in the Philippines,
        particularly local government units (LGUs), state universities, and
        government-owned corporations. The company specializes in automating
        traditional, paper-based workflows through cloud-based platforms
        designed to improve transparency, efficiency, and public service
        delivery. Their systems address a wide range of needs—from permit
        processing and infrastructure monitoring to social welfare
        distribution—making them a valuable partner for agencies striving to
        comply with mandates like the Ease of Doing Business (EODB) Act. <br />
        {/* <br /> With a strong understanding of public sector operations and
        compliance requirements, SparkSoft provides not just software, but
        end-to-end implementation support, including training and onboarding.
        While their core market remains local, they are expanding into sectors
        like education and are exploring collaborations with NGOs and
        development agencies. By focusing on scalable, user-friendly, and
        modular solutions, SparkSoft positions itself as a key player in
        enabling digital governance across the Philippines. */}
      </p>
    </section>
  );
};

export default TargetMarket;
