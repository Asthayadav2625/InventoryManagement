import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import backimage from '../assets/background.png';

const DashHead = () => {
  return (
    <>
      <div className='header relative'>
        <img src={backimage} alt='Background' className='inset-0 object-cover w-full h-[160px] relative border-b-2' />

        <div className='absolute top-0 left-0 p-4 mt-5'>
          <div className='flex'>
            <div className='user-img w-[35px] h-[35px] md:h-[50px] md:w-[50px] border rounded bg-white m-2'>
              <IoIosPerson className='mx-auto my-3'/>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-semibold text-sm md:text-2xl'>
                Hello,<span className='md:hidden'><br /></span>Demo User
              </h1>
              <p className='text-gray-500 text-[10px] md:text-lg'>Demo org</p>
            </div>
          </div>
        </div>

        <div className='absolute top-0 right-0 p-4 mt-5'>
          <div className='text-right'>
            <div className='text-[12px] md:text-[15px]'>
              Zoho Inventory India Helpline: <span className='font-bold'>8100810020</span>
            </div>
            <span className='text-[8px] md:text-[11px] text-gray-500'>
              Mon - Fri / 9:00 AM - 7:00 PM / Toll Free
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashHead;
