import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();

  return (
    <div className="single-page">
      <h1>SinglePage</h1>
      <span>{id}</span>
    </div>
  );
};

export default SinglePage;
