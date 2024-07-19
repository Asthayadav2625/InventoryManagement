// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const dummyData = [
//     { label: 'Quantity in hand', value: 23232 },
//     { label: 'Quantity to be received', value: 23232 },
// ];

// const InventorySummary = () => {
//     const [summaryData, setSummaryData] = useState([]);

//     useEffect(() => {
//         setSummaryData(dummyData);
//     }, []);

//     return (
//         <div className="p-4 md:p-8">
//             <h2 className="text-xl md:text-2xl font-bold pl-4 md:pl-8 pt-5">Inventory Summary</h2>
//             <div className="flex flex-col pl-4 md:pl-8 pt-5">
//                 {summaryData.map((item, index) => (
//                     <div key={index} className="bg-gray-200 w-full md:w-[250px] h-[45px] rounded-sm m-2 flex items-center justify-between p-2">
//                         <div className="text-sm md:text-lg">{item.label}</div>
//                         <Link>
//                             <div className="text-base md:text-xl font-bold">{item.value}</div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default InventorySummary;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const dummyData = [
    { label: 'Quantity in hand', value: 23232 },
    { label: 'Quantity to be received', value: 23232 },
];

const InventorySummary = () => {
    const [summaryData, setSummaryData] = useState([]);

    useEffect(() => {
        setSummaryData(dummyData);
    }, []);

    return (
        <div className="p-4 md:p-8 w-full">
            <h2 className="text-xl md:text-2xl font-bold pl-4 md:pl-8 pt-5">Inventory Summary</h2>
            <div className="flex flex-col pl-3 md:pl-8 pt-5">
                {summaryData.map((item, index) => (
                    <div key={index} className="bg-gray-200 w-48 md:w-[250px] h-[45px] rounded-sm m-2 flex items-center justify-between p-2">
                        <div className="text-sm md:text-lg">{item.label}</div>
                        <Link>
                            <div className="text-base md:text-xl font-bold">{item.value}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InventorySummary;
