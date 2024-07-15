 // src/Body.jsx
import React from "react";
import Sidebar from "./Sidebar";
import  Dashboard from "./Dashboard";

const Body = () => {
  return (
    <div className="flex  flex-1">
      <Sidebar />
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
};

export default Body;
