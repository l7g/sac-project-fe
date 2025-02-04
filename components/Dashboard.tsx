import { IDashbboard } from "@/lib/utils";
import React from "react";
import Header from "./Header";
import StairTransition from "./StairTransition";
import PageTransition from "./PageTransition";

const Dashboard: React.FC<IDashbboard> = ({ children }) => {
  return (
    <>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </>
  );
};

export default Dashboard;
