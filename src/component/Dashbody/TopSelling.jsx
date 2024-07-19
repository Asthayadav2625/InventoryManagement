// import React, { useState, useEffect } from "react";
// import img2 from "../../assets/bed.png";
// import img3 from "../../assets/sofa.png";
// import img4 from "../../assets/shirt.png";
// import { SlArrowDown } from "react-icons/sl";

// const TopSelling = () => {
//   const [topItems, setTopItems] = useState([]);

//   useEffect(() => {
//     // Simulated data from backend
//     const data = [
//       { id: 1, name: "Beds", quantity: 230, img: img2 },
//       { id: 2, name: "Sofa", quantity: 320, img: img3 },
//       { id: 3, name: "T-shirt", quantity: 260, img: img4 },
//     ];
//     setTopItems(data);
//   }, []);

//   return (
//     <>
//       <div className="bg-white w-full max-w-xs sm:max-w-md md:w-[470px] rounded-lg border border-gray-300 ml-20 mt-12 relative mx-auto">
//         <div className="bg-gray-200 h-[58px] w-full rounded-t-lg flex justify-between p-4">
//           <h5 className="pl-6">Top selling</h5>
//           <h6 className="pl-[200px]">This Month</h6>
//           <div className="text-blue-500 text-xs mt-2 ml-1">
//             <SlArrowDown />
//           </div>
//         </div>
//         <div className="flex justify-center items-center text-center">
//           {topItems.map(item => (
//             <div className="space-y-5 mt-2" key={item.id}>
//               <div className="m-2">  
//               <img src={item.img} alt={item.name} className="w-1/2 mx-auto" />
//               </div>
//               <div className="">
//               <h1 className="text-lg">{item.name}</h1>
//               </div>
//               <h5 className="text-lg">
//                 {item.quantity}
//                 <span className="text-gray-400 text-base"> Pcs</span>
//               </h5>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default TopSelling;

import React, { useState, useEffect } from "react";
import img2 from "../../assets/bed.png";
import img3 from "../../assets/sofa.png";
import img4 from "../../assets/shirt.png";
import { SlArrowDown } from "react-icons/sl";

const TopSelling = () => {
  const [topItems, setTopItems] = useState([]);

  useEffect(() => {
    // Simulated data from backend
    const data = [
      { id: 1, name: "Beds", quantity: 230, img: img2 },
      { id: 2, name: "Sofa", quantity: 320, img: img3 },
      { id: 3, name: "T-shirt", quantity: 260, img: img4 },
    ];
    setTopItems(data);
  }, []);

  return (
    <>
      <div className="bg-white w-full max-w-xs sm:max-w-md md:w-[470px] lg:max-w-xl xl:max-w-2xl rounded-lg border border-gray-300 mt-12 mx-auto">
        <div className="bg-gray-200 h-14 w-full rounded-t-lg flex justify-between items-center px-4">
          <h5 className="text-lg">Top Selling</h5>
          <div className="flex items-center">
            <h6 className="text-sm md:text-base">This Month</h6>
            <div className="text-blue-500 text-xs mt-2 ml-1">
              <SlArrowDown />
            </div>
          </div>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topItems.map(item => (
            <div className="space-y-2 text-center" key={item.id}>
              <div className="m-2">
                <img src={item.img} alt={item.name} className="w-1/2 mx-auto" />
              </div>
              <h1 className="text-lg">{item.name}</h1>
              <h5 className="text-lg">
                {item.quantity}
                <span className="text-gray-400 text-base"> Pcs</span>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopSelling;

