import CompanyContact from "@/model/company-contact";
import Image from "next/image";
import React from "react";

const CompanyContactCard: React.FC<{ contact: CompanyContact }> = ({
  contact,
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 p-4 w-2/6">
      <div className="flex items-center justify-start gap-2">
        <Image
          src={`/company-contact/${contact.icon}.svg`}
          alt={contact.label}
          height={24}
          width={24}
        />
        <h3 className="text-lg font-bold">{contact.label}</h3>
      </div>
      <p className="text-gray-700">{contact.content}</p>
    </div>
  );
};

export default CompanyContactCard;
