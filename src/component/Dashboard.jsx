import React from "react";
import DashHead from "./dashHead";
import DashBody from "./DashBody";

const  Dashboard = () => {
  return (
    <>
       <div className="contain-head md:ml-40 ml-16">

        <div>
           <DashHead/>
        </div>   
        <div >
           <DashBody/>
        </div>

       </div>
    </>
  );
};

export default  Dashboard;
