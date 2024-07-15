import React from 'react';
import { RiAddBoxFill } from "react-icons/ri";
import { PiClockClockwiseFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { IoPeople } from "react-icons/io5";import { MdInventory } from "react-icons/md";

const Header = () => {

  return (
    <>
      <div className=" w-full h-[48px] bg-[#eceaf0]  ">
        <div className="flex justify-between items-center h-full ">
          <div className="flex items-center space-x-2">
            <div className='w-[97px] h-[48px] md:w-[200px] bg-[#29343b] shadow-lg
             text-white  text-[15px] md:text-[25px] flex items-center justify-center space-x-1'>
                <div><MdInventory className="mt-1"/></div>
                <div>Inventory</div>
            </div>
            <RiAddBoxFill className="text-[purple] text-[25px] md:text-[38px]"/>
            <PiClockClockwiseFill className="text-[15px] md:text-[22px]" />
            <div className="flex items-center bg-[#f3cff944] rounded-[10px] w-28 h-5 md:w-[250px] md:h-[35px] pl-2">
              <IoIosSearch className="text-[15px] md:text-[22px]" />
              <GoChevronDown className="text-md md:text-[18px] mt-1"/>
              <input
                type="text"
                placeholder="Search in Customers(/)"
                className="text-[7px] md:text-[15px] bg-transparent outline-none w-full ml-1"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 pr-2 md:pr-4">
            <div>
            <IoPeople className="text-[10px] md:text-[22px] text-gray-700 " />
            </div>
            <div>
            <GoBell className="text-[10px] md:text-[22px] text-gray-700 " />
            </div>
            <div>

            <BsPersonCircle className="text-[10px] md:text-[22px] text-gray-700 " />
            </div>
            <div>

            <IoSettingsOutline className="text-[10px] md:text-[22px] text-gray-700 " />
            </div>
            <div>

            <FiMenu className="text-[10px] md:text-[22px] text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;