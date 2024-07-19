import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { FiSettings, FiShoppingCart, FiShoppingBag, FiBarChart, FiFileText } from 'react-icons/fi';

const Sidebar = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (accordion) => {
    setOpenAccordion(accordion === openAccordion ? null : accordion);
  };

  return (
    <div className="fixed p-4 bg-[#212629] md:w-[200px] h-full z-10 mt-10">
      <ul className="space-y-4">
        <li>
          <Link 
            to="/" 
            className="flex items-center justify-between p-2 transition duration-300 ease-in-out text-white rounded hover:bg-gray-700"
          >
            <div className="flex items-center pr-2">
              <FaHome className="mr-2" />
              <span className="hidden md:block">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <div 
            onClick={() => toggleAccordion('inventory')}
            className="flex items-center justify-between p-2 transition duration-300 ease-in-out text-white rounded cursor-pointer hover:bg-gray-700"
          >
            <div className="flex items-center pr-2">
              <FiSettings className="mr-2" />
              <span className="hidden md:block">Inventory</span>
            </div>
            {openAccordion === 'inventory' ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {openAccordion === 'inventory' && (
            <ul className="ml-2 space-y-4 p-2">
              <li>
                <Link to='/inventory/items' className="p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Items</Link>
              </li>
              <li>
                <Link to="/inventory/inventoryadjustment" className="p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Inventory Adjustment</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div 
            onClick={() => toggleAccordion('sales')}
            className="flex items-center justify-between p-2 transition duration-300 ease-in-out text-white rounded cursor-pointer hover:bg-gray-700"
          >
            <div className="flex items-center pr-2">
              <FiShoppingCart className="mr-2" />
              <span className="hidden md:block">Sales</span>
            </div>
            {openAccordion === 'sales' ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {openAccordion === 'sales' && (
            <ul className="ml-2 space-y-4 p-2">
              <li>
                <Link to='/sales/customer' className=" p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Customer</Link>
              </li>
              <li>
                <Link to="/sales/salesorder" className="p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Sales Order</Link>
              </li>
              <li>
                <Link to="/sales/invoice" className="p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Invoice</Link>
              </li>
              <li>
                <Link to="/sales/paymentreceive" className="p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Payment Receive</Link>
              </li>
              <li>
                <Link to="/sales/salesreturn" className="p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Sales Return</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div 
            onClick={() => toggleAccordion('purchase')}
            className="flex items-center justify-between p-2 transition duration-300 ease-in-out text-white rounded cursor-pointer hover:bg-gray-700"
          >
            <div className="flex items-center pr-2">
              <FiShoppingBag className="mr-2" />
              <span className="hidden md:block">Purchase</span>
            </div>
            {openAccordion === 'purchase' ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {openAccordion === 'purchase' && (
            <ul className="ml-2 space-y-4 p-2">
              <li>
                <Link to='/purchase/purchaseorder' className="p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Purchase Order</Link>
              </li>
              <li>
                <Link to="/purchase/purchasereceive" className="p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Purchase Receive</Link>
              </li>
              <li>
                <Link to="/purchase/bills" className="p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Bills</Link>
              </li>
              <li>
                <Link to="/purchase/purchasemade" className="p-2 rounded-lg text-white transition duration-300 ease-in-out hover:bg-gray-700">Purchase Made</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link 
            to="/reports" 
            className="flex items-center justify-between p-2 transition duration-300 ease-in-out text-white rounded hover:bg-gray-700"
          >
            <div className="flex items-center pr-2">
              <FiBarChart className="mr-2" />
              <span className="hidden md:block">Reports</span>
            </div>
          </Link>
        </li>
        <li>
          <Link 
            to="/documents" 
            className="flex items-center justify-between p-2 transition duration-300 ease-in-out text-white rounded hover:bg-gray-700"
          >
            <div className="flex items-center pr-2">
              <FiFileText className="mr-2" />
              <span className="hidden md:block">Documents</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
