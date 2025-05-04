import { DOCUMENTS_DATA } from "@/model/document";
import React from "react";
import DocumentCard from "../cards/DocumentCard";

const SchoolRequirements = () => {
  return (
    <section
      id="requirements"
      className="py-16 px-6 xl:px-32 flex flex-col items-center gap-12 bg-white text-gray-900"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        IX. School Requirements
      </h1>
      <div className="flex flex-col flex-wrap justify-center gap-4 p-4">
        <div className="flex flex-col w-full mb-4">
          <h2 className="text-xl font-bold">Documents</h2>
          <p className="text-muted-foreground text-md">
            Please click the document to view.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {DOCUMENTS_DATA.map((document, index) => (
            <DocumentCard document={document} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolRequirements;
