import { FOOTER_DATA } from "@/model/footer";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 xl:px-32 flex flex-col items-center gap-6 bg-white text-gray-900 w-full"
    >
      <h1 className="font-bold text-2xl leading-tight tracking-tighter">
        ALLEN TIEMPO
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {FOOTER_DATA.map((footer, index) => (
          <a
            href={footer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-105"
            key={index}
          >
            <Image
              src={`/${footer.icon}.svg`}
              alt="icon"
              width={36}
              height={36}
              className="font-black"
            />
          </a>
        ))}
      </div>
      <p>Copyright © 2024 Allen Tiempo All Rights Reserved</p>
    </section>
  );
};

export default Footer;
