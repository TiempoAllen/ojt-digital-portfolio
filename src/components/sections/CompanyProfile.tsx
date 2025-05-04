import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OVERVIEW_DATA } from "@/model/overview";
import OverviewCards from "../cards/OverviewCards";
import { COMPANY_PROJECTS_DATA } from "@/model/company-projects";
import CompanyProjectsCard from "../cards/CompanyProjectsCard";
import TargetMarket from "./TargetMarket";
import { COMPANY_CONTACT_DATA } from "@/model/company-contact";
import CompanyContactCard from "../cards/CompanyContactCard";

const CompanyProfile = () => {
  return (
    <section
      id="companyProfile"
      className="py-8 px-6 xl:px-28 flex flex-col items-center justify-center my-8"
    >
      <h1 className="text-2xl leading-tight tracking-tighter font-bold sm:text-3xl md:text-4xl lg:leading-[1.1]">
        II. Company Profile
      </h1>
      <div className="flex items-center justify-center py-8 px-6">
        <p className="text-lg text-center font-light text-foreground w-3/4">
          <span className="font-medium leading-tight tracking-tighter">
            ​SparkSoft Solutions, Inc.
          </span>{" "}
          is a Philippine-based software development company headquartered in
          Quezon City. Specializing in custom web, mobile, and embedded systems,
          SparkSoft serves both local and international clients with a focus on
          digital transformation for government and enterprise sectors.​
        </p>
      </div>
      <Tabs
        defaultValue="core-services"
        className="w-full flex items-center justify-center"
      >
        <TabsList className="mb-5">
          <TabsTrigger value="overview">Company Overview</TabsTrigger>
          <TabsTrigger value="core-services">
            Core Services & Solutons
          </TabsTrigger>
          <TabsTrigger value="market">Market Focus</TabsTrigger>
          <TabsTrigger value="contact">Contact Information</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {OVERVIEW_DATA.map((overview, index) => (
              <OverviewCards key={index} overview={overview} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="core-services">
          <div className="flex flex-wrap justify-center gap-4">
            {COMPANY_PROJECTS_DATA.map((projects, index) => (
              <CompanyProjectsCard key={index} projects={projects} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="market">
          <TargetMarket />
        </TabsContent>
        <TabsContent value="contact">
          <div className="flex justify-center gap-4 items-start">
            {COMPANY_CONTACT_DATA.map((contact, index) => (
              <CompanyContactCard key={index} contact={contact} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default CompanyProfile;
