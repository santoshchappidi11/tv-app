import React from "react";
import "./MainPage.css";
import HomePage from "../HomePage/HomePage";
import Navbar from "../Navbar/Navbar";
import ScrollContent from "../HomeAdditionalContent/ScrollContent";

const MainPage = () => {
  return (
    <div className="main-page">
      <Navbar />
      <HomePage />
      <ScrollContent />
    </div>
  );
};

export default MainPage;
