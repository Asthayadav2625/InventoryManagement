import React from "react";
import DashHead from "./dashHead";
import DashBody from "./DashBody";

const  Dashboard = () => {
  return (
    <>
       <div className="contain-head">

        <div>
           <DashHead/>
        </div>   
        <div>
           <DashBody/>
        </div>

       </div>
    </>
  );
};

export default  Dashboard;
