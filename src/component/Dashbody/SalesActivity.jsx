import React, { useEffect, useState } from "react";
import { GrNorton } from "react-icons/gr";
const mockData=[
    {count:20,label:'Qty',description:'to be packed'},
    {count:22,label:'Pkgs',description:'to be shipped'},
    {count:30,label:'Pkgs',description:'to be delivered'},
    {count:10,label:'Qty',description:'to be invoiced'},
];

const SalesActivity = () => {
    
    const [salesdata,setSalesdata]=useState([]);

    useEffect(()=>{
       setSalesdata(mockData);
    },[]);

    return (
        <>

            <div>
                <h1 className="text-2xl font-bold pt-5 pl-[60px]">Sales Activity</h1>
                <div className="flex pt-5 pl-[50px] space-x-4">
                     
                     {mockData.map((item,index)=>(
                         <div className="bg-white w-[160px] h-[120px] rounded-lg p-2 shadow-lg">
                         <p className="text-pink-500 font-bold text-2xl flex justify-center items-center">{item.count}</p>
                         <p className="flex justify-center items-center mt-2">{item.label}</p>
                         <div className="flex ml-4 mt-4">
                         <span className="mr-2"><GrNorton /></span>
                         <p className="text-center text-xs">{item.description}</p>
                         </div>
                     </div>
                     ))}
                     
                </div>
            </div>


        </>
    );
}
export default SalesActivity;