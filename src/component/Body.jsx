 // src/Body.jsx
import React from "react";
import Sidebar from "./Sidebar";
import Container from "./Container";

const Body = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Container />
      </div>
    </div>
  );
};

export default Body;
