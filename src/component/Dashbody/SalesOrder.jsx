import React, { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

const SalesOrder = () => {
  const [salesData, setSalesData] = useState([
    {
      channel: "Direct Sales",
      draft: 0,
      confirmed: 0,
      packed: 0,
      shipped: 0,
      invoiced: 0,
    },
  ]);

  useEffect(() => {
    // Simulated data from backend
    const data = [
      {
        channel: "Direct Sales",
        draft: 23,
        confirmed: 51,
        packed: 10,
        shipped: 10,
        invoiced: 40,
      },
    ];
    setSalesData(data);
  }, []);

  return (
    <>
      <div className="w-[600px] h-[260px] bg-white border border-gray-400 rounded-lg ml-20 mt-12">
        <div className="bg-gray-200 h-[60px] w-full rounded-t-lg flex justify-between p-4">
          <h1 className="ml-2 text-md">Sales Orders</h1>
          <h2 className="ml-[400px] text-base font-medium">This Month</h2>
          <div className="text-blue-500 text-xs mt-2 ml-1">
            <SlArrowDown />
          </div>
        </div>
        <div className="p-6">
          <table className="w-full bg-white">
            <thead>
              <tr className="w-full h-[60px] bg-gray-200">
                <th className="text-left pl-4">Channel</th>
                <th className="text-left pl-4">Draft</th>
                <th className="text-left pl-4">Confirmed</th>
                <th className="text-left pl-4">Packed</th>
                <th className="text-left pl-4">Shipped</th>
                <th className="text-left pl-4">Invoiced</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((item, index) => (
                <tr key={index} className="h-[60px] border-t">
                  <td className="pl-4">{item.channel}</td>
                  <td className="pl-4">{item.draft}</td>
                  <td className="pl-4">{item.confirmed}</td>
                  <td className="pl-4">{item.packed}</td>
                  <td className="pl-4">{item.shipped}</td>
                  <td className="pl-4">{item.invoiced}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SalesOrder;
