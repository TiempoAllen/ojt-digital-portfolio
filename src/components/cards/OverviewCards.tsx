import React from "react";
import Overview from "@/model/overview";
import Image from "next/image";

const OverviewCards: React.FC<{ overview: Overview }> = (props) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="tracking-tight text-sm font-medium">
          {props.overview.label}
        </div>
        <Image
          src={`/overview/${props.overview.icon}.svg`}
          alt="icon"
          width={18}
          height={18}
        />
      </div>
      <div className="p-6 pt-0">
        <div className="text-xl font-semibold leading-tight tracking-tighter">
          {props.overview.content}
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
