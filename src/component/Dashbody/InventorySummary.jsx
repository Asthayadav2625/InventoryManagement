import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const dummyData=[
    {label:'Quantity in hand',value:23232},
    {label:'Quantity to be recieved',value:23232},
]
const InventorySummary = () => {
    const [summaryData,setSummaryData]=useState([]);

    useEffect(()=>{
       setSummaryData(dummyData);
    },[]);
    return (
        <>
            <div>
                <h2 className="text-2xl font-bold pl-[50px] pt-5">Inventory Summary</h2>
                <div className="flex flex-col pl-[35px] pt-5">
                    {dummyData.map((item,index)=>(
                        <div className="bg-gray-200 w-[250px] h-[45px] rounded-sm m-2 flex items-center gap-12 pl-2">
                        <div className="text-lg">{item.label}</div>
                         <Link><div className="text-xl font-bold" >{item.value}</div>
                         </Link>
                    </div>
                    ))}
                     
                     
                </div>
            </div>
        </>
    );
};
export default InventorySummary;