import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { FiSettings, FiShoppingCart, FiShoppingBag, FiBarChart, FiFileText } from 'react-icons/fi';

const Sidebar = () => {
  const [accordionState, setAccordionState] = useState({
    inventory: false,
    sales: false,
    purchase: false,
  });

  const toggleAccordion = (accordion) => {
    setAccordionState(prevState => ({
      ...prevState,
      [accordion]: !prevState[accordion],
    }));
  };

  return (
    <div className=" p-4 bg-[#212629] md:w-[200px] h-full ">
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
            {accordionState.inventory ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {accordionState.inventory && (
            <ul className="ml-8 space-y-2">
              <li>
                <Link to='/inventory/items' className="text-white">Items</Link>
              </li>
              <li>
                <Link to="/inventory/inventoryadjustment" className="text-white">Inventory Adjustment</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div 
            onClick={() => toggleAccordion('sales')}
            className="flex items-center justify-between p-2 transition duration-300 ease-in-out text-white rounded cursor-pointer hover:bg-gray-700"
          >
            < div className="flex items-center pr-2">
              <FiShoppingCart className="mr-2" />
              <span className="hidden md:block">Sales</span>
            </div>
            {accordionState.sales ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {accordionState.sales && (
            <ul className="ml-8 space-y-2">
              <li>
                <Link to='/sales/customer' className="text-white">Customer</Link>
              </li>
              <li>
                <Link to="/sales/salesorder" className="text-white">Sales Order</Link>
              </li>
              <li>
                <Link to="/sales/invoice" className="text-white">Invoice</Link>
              </li>
              <li>
                <Link to="/sales/paymentreceive" className="text-white">Payment Receive</Link>
              </li>
              <li>
                <Link to="/sales/salesreturn" className="text-white">Sales Return</Link>
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
            {accordionState.purchase ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {accordionState.purchase && (
            <ul className="ml-8 space-y-2">
              <li>
                <Link to='/purchase/purchaseorder' className="text-white">Purchase Order</Link>
              </li>
              <li>
                <Link to="/purchase/purchasereceive" className="text-white">Purchase Receive</Link>
              </li>
              <li>
                <Link to="/purchase/bills" className="text-white">Bills</Link>
              </li>
              <li>
                <Link to="/purchase/purchasemade" className="text-white">Purchase Made</Link>
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
