import CompanyName from "@/components/sections/CompanyName";
import CompanyProfile from "@/components/sections/CompanyProfile";
import DivisionAssignment from "@/components/sections/DivisionAssignment";
import HomeNav from "@/components/sections/HomeNav";
import TasksSummary from "@/components/sections/TasksSummary";
import TraineeConcerns from "@/components/sections/TraineeConcerns";
import CommentsSuggestions from "@/components/sections/CommentsSuggestions";
import React from "react";
import MyJourney from "@/components/sections/MyJourney";
import HoursRendered from "@/components/sections/HoursRendered";
import SchoolRequirements from "@/components/sections/SchoolRequirements";
import Appendix from "@/components/sections/Appendix";
import Footer from "@/components/Footer";
import MyName from "@/components/sections/MyName";

const HomePage = () => {
  return (
    <>
      <HomeNav />
      <MyName />
      <CompanyName />
      <CompanyProfile />
      <DivisionAssignment />
      <TasksSummary />
      <TraineeConcerns />
      <CommentsSuggestions />
      <HoursRendered />
      <MyJourney />
      <SchoolRequirements />
      <Appendix />
      <Footer />
    </>
  );
};

export default HomePage;
