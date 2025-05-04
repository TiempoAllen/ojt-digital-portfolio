import Document from "@/model/document";
import Image from "next/image";
import React from "react";

const DocumentCard: React.FC<{ document: Document }> = ({ document }) => {
  return (
    <a
      href={document.src}
      target="_blank"
      rel="noopener noreferrer"
      className="transform transition duration-300 hover:scale-105"
    >
      <div className="w-[160px] md:w-[190px] lg:w-[210px] xl:w-[220px] h-[200px] rounded-xl border bg-card text-card-foreground shadow flex flex-col items-center justify-center">
        <div className="relative w-full h-[120px] md:h-[150px]">
          <Image
            src={`/${document.icon}.svg`}
            alt="icon"
            fill
            priority
            className="object-contain p-4"
          />
        </div>

        <div className="p-4 w-full flex flex-col items-start justify-start space-y-1">
          <div className="text-sm font-medium">{document.name}</div>
          <div className="text-xs text-muted-foreground font-light tracking-tight">
            {document.date}
          </div>
        </div>
      </div>
    </a>
  );
};

export default DocumentCard;
