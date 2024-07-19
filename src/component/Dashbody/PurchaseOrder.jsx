// import React, { useState, useEffect } from "react";
// import { SlArrowDown } from "react-icons/sl";

// const PurchaseOrder = () => {
//   const [purchaseOrderData, setPurchaseOrderData] = useState({
//     quantityOrdered: 0,
//     totalCost: 0,
//   });

//   useEffect(() => {
    
//     const data = {
//       quantityOrdered: 2.00,
//       totalCost: 14500.0,
//     };
//     setPurchaseOrderData(data);
//   }, []);

//   return (
//     <>
//       <div className="w-[350px] h-[260px] border border-gray-400 rounded-lg bg-white ml-20 mt-12 relative">
//         <div className="bg-gray-200 h-[55px] w-full rounded-t-lg flex justify-between p-4">
//           <div>
//             <h1 className="ml-2 text-md">Purchase Order</h1>
//           </div>
//           <div>
//             <h2 className="text-base ml-20 font-medium">This Month</h2>
//           </div>
//           <div className="text-blue-500 text-xs mt-2">
//             <SlArrowDown />
//           </div>
//         </div>
//         <div className="text-center py-8">
//           <h1 className="text-sm font-normal">Quantity Ordered</h1>
//           <h2 className="text-2xl text-pink-500">{purchaseOrderData.quantityOrdered.toFixed(2)}</h2>
//         </div>
//         <div className="text-center">
//           <h1 className="text-sm font-normal">Total Cost</h1>
//           <h2 className="text-2xl text-pink-500">Rs-{purchaseOrderData.totalCost.toFixed(2)}</h2>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PurchaseOrder;


import React, { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

const PurchaseOrder = () => {
  const [purchaseOrderData, setPurchaseOrderData] = useState({
    quantityOrdered: 0,
    totalCost: 0,
  });

  useEffect(() => {
    const data = {
      quantityOrdered: 2.00,
      totalCost: 14500.0,
    };
    setPurchaseOrderData(data);
  }, []);

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border border-gray-400 rounded-lg bg-white mt-12 mx-auto">
      <div className="bg-gray-200 h-[55px] w-full rounded-t-lg flex justify-between items-center px-4">
        <h1 className="text-md">Purchase Order</h1>
        <div className="flex items-center">
          <h2 className="text-base font-medium">This Month</h2>
          <div className="text-blue-500 text-xs ml-2">
            <SlArrowDown />
          </div>
        </div>
      </div>
      <div className="text-center py-8">
        <h1 className="text-sm font-normal">Quantity Ordered</h1>
        <h2 className="text-2xl text-pink-500">{purchaseOrderData.quantityOrdered.toFixed(2)}</h2>
      </div>
      <div className="text-center pb-8">
        <h1 className="text-sm font-normal">Total Cost</h1>
        <h2 className="text-2xl text-pink-500">Rs-{purchaseOrderData.totalCost.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default PurchaseOrder;
