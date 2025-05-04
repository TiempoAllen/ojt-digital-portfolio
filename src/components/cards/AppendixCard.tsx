import Documentation from "@/model/documentation";
import Image from "next/image";
import React from "react";

const AppendixCard: React.FC<{ documentation: Documentation }> = ({
  documentation,
}) => {
  return (
    <div className="relative mb-4 break-inside-avoid rounded-lg overflow-hidden">
      <Image
        src={`/screenshots/${documentation.image}.png`}
        alt={documentation.title}
        width={350}
        height={350}
        className="w-full h-auto rounded-lg object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-start p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
        <p className="text-lg font-bold text-left">{documentation.title}</p>
        <p className="text-sm">{documentation.date}</p>
      </div>
    </div>
  );
};

export default AppendixCard;
