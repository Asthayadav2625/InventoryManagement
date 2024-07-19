// import React from "react";
// import SalesActivity from "./Dashbody/SalesActivity";
// import InventorySummary from "./Dashbody/InventorySummary";
// import ProductDetails from "./Dashbody/ProductDetails";
// import TopSelling from "./Dashbody/TopSelling";
// import PurchaseOrder from "./Dashbody/PurchaseOrder";
// import SalesOrder from "./Dashbody/SalesOrder";

// function DashBody() {
//   return (
//     <div className="w-full h-screen bg-slate-50  flex flex-col justify-center items-center mt-24">
//       {/* Sales Activity and Inventory Summary */}
//       <div className="flex flex-col md:flex-row md:space-x-4 mb-4 w-full justify-between items-center px-10">
//         <div className="mb-4 md:mb-0  ">
//           <SalesActivity />
//         </div>
//         <div>
//           <InventorySummary />
//         </div>
//       </div>

//       {/* Product Details and Top Selling */}
//       <div className="flex flex-col md:flex-row md:space-x-4 mb-4 w-full justify-between items-center px-10">
//         <div className="mb-4 md:mb-0">
//           <ProductDetails />
//         </div>
//         <div>
//           <TopSelling className="mr-4" />
//         </div>
//       </div>

//       {/* Purchase Order and Sales Order */}
//       <div className="flex flex-col md:flex-row md:space-x-4 w-full justify-between items-center px-16">
//         <div className="mb-4 md:mb-0">
//           <PurchaseOrder />
//         </div>
//         <div>
//           <SalesOrder />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashBody;


import React from "react";
import SalesActivity from "./Dashbody/SalesActivity";
import InventorySummary from "./Dashbody/InventorySummary";
import ProductDetails from "./Dashbody/ProductDetails";
import TopSelling from "./Dashbody/TopSelling";
import PurchaseOrder from "./Dashbody/PurchaseOrder";
import SalesOrder from "./Dashbody/SalesOrder";

function DashBody() {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col justify-start items-center pt-5 px-5">
      {/* Sales Activity and Inventory Summary */}
      <div className="flex flex-col ml-14 justify-around items-start ipad:flex-col md:flex-col md:ml-32  md:space-x-4 lg:flex-col lg:items-center lg:m-auto  xl:w-screen xl:flex-row mb-4 w-full">
        <div className="mb-4 ml-4 md:mb-0  w-full md:w-1/2 lg:mr-52">
          <SalesActivity />
        </div>
        <div className="w-full pr-4 md:w-1/2 md:pr-8 lg:ml-10">
          <InventorySummary />
        </div>
      </div>

      {/* Product Details and Top Selling */}
      <div className="flex flex-col ml-12 ipad:flex-col md:flex-col   md:space-x-4  lg:flex-col lg:items-center lg:m-auto xl:flex-row xl:w-screen mb-4  w-full justify-around items-start">
        <div className="mb-4 pl-1 md:w-1/2  md:mb-0">
          <ProductDetails />
        </div>
        <div className="w-60 mb-4 pl-1 md:w-1/2 md:mb-0 lg:pr-20">
          <TopSelling />
        </div>
      </div>

      {/* <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4 w-full justify-center lg:justify-between items-center lg:items-start">
        <div className="mb-4 lg:mb-0 w-full lg:w-1/2">
          <ProductDetails />
        </div>
        <div className="w-full lg:w-1/2">
          <TopSelling />
        </div>
      </div> */}

      {/* Purchase Order and Sales Order */}
      <div className="flex flex-col ml-12 ipad:flex-col md:flex-col lg:flex-col md:space-x-4 lg:items-center lg:m-auto xl:flex-row w-full justify-around items-start">
        <div className="mb-4 md:w-1/2 md:mb-0 pl-3">
          <PurchaseOrder />
        </div>
        <div className="pr-20 md:w-1/2 md:mb-0">
          <SalesOrder />
        </div>
      </div>
    </div>
  );
}

export default DashBody;

