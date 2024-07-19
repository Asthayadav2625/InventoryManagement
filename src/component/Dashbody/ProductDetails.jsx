// import React, { useState, useEffect } from "react";
// import Progressbar from "./Progressbar";
// import { SlArrowDown } from "react-icons/sl";

// const ProductDetails = () => {
  
//   const [lowStockItems, setLowStockItems] = useState(0);
//   const [allItemsGroup, setAllItemsGroup] = useState(0);
//   const [allItems, setAllItems] = useState(0);
//   const [unconfirmedItems, setUnconfirmedItems] = useState(0);
//   const [activeItems, setActiveItems] = useState(0);
//   const [totalItems, setTotalItems] = useState(0);

  
//   useEffect(() => {
 
//     const data = {
//       lowStockItems: 3,
//       allItemsGroup: 39,
//       allItems: 190,
//       unconfirmedItems: 121,
//       activeItems: 30,
//       totalItems: 100,
//     };
//     setLowStockItems(data.lowStockItems);
//     setAllItemsGroup(data.allItemsGroup);
//     setAllItems(data.allItems);
//     setUnconfirmedItems(data.unconfirmedItems);
//     setActiveItems(data.activeItems);
//     setTotalItems(data.totalItems);
//   }, []);

//   return (
//     <div className="bg-white w-[470px] h-[300px] rounded-lg border border-gray-300 ml-20 mt-12 relative">
//       <div className="bg-gray-200 h-[58px] w-full rounded-t-lg flex justify-between p-4">
//         <h5 className="pl-6">Product Details</h5>
//         <h6 className="pl-[170px]">This Month</h6>
//         <div className="text-blue-500 text-xs mt-2 ml-1">
//           <SlArrowDown />
//         </div>
//       </div>
//       <div className="flex justify-between p-4">
//         <div className="flex flex-col">
//           <ul className="list-none pl-10 pt-4 text-lg space-y-4">
//             <li className="text-red-500 flex justify-between">
//               Low stock items <span className="pl-7">{lowStockItems}</span>
//             </li>
//             <li className="flex justify-between">
//               All items Group <span className="pl-7">{allItemsGroup}</span>
//             </li>
//             <li className="flex justify-between">
//               All items <span className="pl-20">{allItems}</span>
//             </li>
//             <li className="text-red-500 flex justify-between">
//               Unconfirmed items <span className="pl-1">{unconfirmedItems}</span>
//             </li>
//           </ul>
//         </div>
//         <div className="pl-2 mr-6">
//           <div className="font-normal mt-2">Active items</div>
//           <div className="mt-3">
//             <Progressbar activeItems={activeItems} totalItems={totalItems} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect } from "react";
import Progressbar from "./Progressbar";
import { SlArrowDown } from "react-icons/sl";

const ProductDetails = () => {
  const [lowStockItems, setLowStockItems] = useState(0);
  const [allItemsGroup, setAllItemsGroup] = useState(0);
  const [allItems, setAllItems] = useState(0);
  const [unconfirmedItems, setUnconfirmedItems] = useState(0);
  const [activeItems, setActiveItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const data = {
      lowStockItems: 3,
      allItemsGroup: 39,
      allItems: 190,
      unconfirmedItems: 121,
      activeItems: 30,
      totalItems: 100,
    };
    setLowStockItems(data.lowStockItems);
    setAllItemsGroup(data.allItemsGroup);
    setAllItems(data.allItems);
    setUnconfirmedItems(data.unconfirmedItems);
    setActiveItems(data.activeItems);
    setTotalItems(data.totalItems);
  }, []);

  return (
    <div className="bg-white w-full max-w-xs sm:max-w-md md:w-[470px] h-auto rounded-lg border border-gray-300 mt-12 mx-auto">
      <div className="bg-gray-200 h-14 w-full rounded-t-lg flex justify-between items-center px-4">
        <h5 className="text-lg pr-1">Product Details</h5>
        <div className="flex items-center">
          <h6 className="text-sm md:text-base">This Month</h6>
          <div className="text-blue-500 text-xs mt-2 ml-1">
            <SlArrowDown />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
        <div className="flex flex-col">
          <ul className="list-none text-base sm:text-lg space-y-4">
            <li className="text-red-500 flex justify-between">
              Low stock items <span className="pl-2 sm:pl-7">{lowStockItems}</span>
            </li>
            <li className="flex justify-between">
              All items Group <span className="pl-2 sm:pl-7">{allItemsGroup}</span>
            </li>
            <li className="flex justify-between">
              All items <span className="pl-10 sm:pl-20">{allItems}</span>
            </li>
            <li className="text-red-500 flex justify-between">
              Unconfirmed items <span className="pl-1 sm:pl-1">{unconfirmedItems}</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
          <div className="font-normal">Active items</div>
          <div className="mt-3">
            <Progressbar activeItems={activeItems} totalItems={totalItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
