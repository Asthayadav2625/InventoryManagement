// import React, { useEffect, useState } from "react";
// import { GrNorton } from "react-icons/gr";
// const mockData=[
//     {count:20,label:'Qty',description:'to be packed'},
//     {count:22,label:'Pkgs',description:'to be shipped'},
//     {count:30,label:'Pkgs',description:'to be delivered'},
//     {count:10,label:'Qty',description:'to be invoiced'},
// ];

// const SalesActivity = () => {
    
//     const [salesdata,setSalesdata]=useState([]);

//     useEffect(()=>{
//        setSalesdata(mockData);
//     },[]);

//     return (
//         <>

//             <div>
//                 <h1 className="text-2xl font-bold pt-5 pl-[60px]">Sales Activity</h1>
//                 <div className="flex pt-5 pl-[50px] space-x-4">
                     
//                      {mockData.map((item,index)=>(
//                          <div className="bg-white w-[160px] h-[120px] rounded-lg p-2 shadow-lg">
//                          <p className="text-pink-500 font-bold text-2xl flex justify-center items-center">{item.count}</p>
//                          <p className="flex justify-center items-center mt-2">{item.label}</p>
//                          <div className="flex ml-4 mt-4">
//                          <span className="mr-2"><GrNorton /></span>
//                          <p className="text-center text-xs">{item.description}</p>
//                          </div>
//                      </div>
//                      ))}
                     
//                 </div>
//             </div>


//         </>
//     );
// }
// export default SalesActivity;

import React, { useEffect, useState } from "react";
import { GrNorton } from "react-icons/gr";

const mockData = [
    { count: 20, label: 'Qty', description: 'to be packed' },
    { count: 22, label: 'Pkgs', description: 'to be shipped' },
    { count: 30, label: 'Pkgs', description: 'to be delivered' },
    { count: 10, label: 'Qty', description: 'to be invoiced' },
];

const SalesActivity = () => {
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        setSalesData(mockData);
    }, []);

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-xl  md:text-2xl lg:text-center xl:text-center font-bold pt-5 ">Sales Activity</h1>
            <div className=" sm:w-96 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:w-[680px] gap-8 pt-5 justify-center ">
                {salesData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white w-36 h-[120px] rounded-lg shadow-lg flex flex-col items-center p-4"
                    >
                        <p className="text-pink-500 font-bold text-xl md:text-2xl">{item.count}</p>
                        <p className="mt-2 text-sm md:text-base">{item.label}</p>
                        <div className="flex items-center mt-4">
                            <GrNorton className="mr-2 text-xs md:text-sm"/>
                            <p className="text-xs text-center">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesActivity;
