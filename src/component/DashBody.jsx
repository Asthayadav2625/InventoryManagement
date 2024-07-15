import React from "react";
import SalesActivity from "./Dashbody/SalesActivity";
import InventorySummary from "./Dashbody/InventorySummary";
import ProductDetails from "./Dashbody/ProductDetails";
import TopSelling from "./Dashbody/TopSelling";
import PurchaseOrder from "./Dashbody/PurchaseOrder";
import SalesOrder from "./Dashbody/SalesOrder";
function DashBody() {
   
  return (
    <>
           <div className="w-full h-screen bg-slate-50 mt-3">
                    <div className="flex flex-row items-center ml-6">
                      <div><SalesActivity/></div>
                    <div>
                     <InventorySummary />
                    </div>
                  </div>
                <div className="flex flex-row">
                   <div><ProductDetails/></div>
                   <div><TopSelling/></div>
                </div>
                <div className="flex flex-row">
                   <div><PurchaseOrder/></div>
                   <div><SalesOrder/></div>
                </div>
            </div>
    </>
  );
}

export default DashBody;