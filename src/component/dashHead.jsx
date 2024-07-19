// import React from 'react';
// import { IoIosPerson } from 'react-icons/io';
// import backimage from '../assets/background.png';

// const DashHead = () => {
//   return (
//     <>
//       <div className='header relative mt-5 ml-5'>
//         <img src={backimage} alt='Background' className='inset-0 object-cover w-full h-44 relative border-b-2' />

//         <div className='absolute top-0 left-0 p-4 mt-10'>
//           <div className='flex'>
//             <div className='user-img w-[35px] h-[35px] md:h-[50px] md:w-[50px] border rounded bg-white m-2'>
//               <IoIosPerson className='mx-auto my-3'/>
//             </div>
//             <div className='flex flex-col'>
//               <h1 className='font-semibold text-sm md:text-2xl'>
//                 Hello,<span className='md:hidden'><br /></span>Demo User
//               </h1>
//               <p className='text-gray-500 text-[10px] md:text-lg'>Demo org</p>
//             </div>
//           </div>
//         </div>

//         <div className='absolute top-0 right-0 p-4 mt-10'>
//           <div className='text-right'>
//             <div className='text-[12px] md:text-[15px]'>
//               Zoho Inventory India Helpline: <span className='font-bold'>8100810020</span>
//             </div>
//             <span className='text-[8px] md:text-[11px] text-gray-500'>
//               Mon - Fri / 9:00 AM - 7:00 PM / Toll Free
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashHead;
import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import backimage from '../assets/background.png';

const DashHead = () => {
  return (
    <div className='header relative mt-5 ml-5 lg:ml-0'>
      <img 
        src={backimage} 
        alt='Background' 
        className='object-cover w-full h-32 sm:h-44 lg:h-56 relative border-b-2' 
      />

      <div className='absolute top-0 left-6 p-4 mt-10'>
        <div className='flex items-center space-x-4 lg:ml-2'>
          <div className='user-img w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 border rounded bg-white flex items-center justify-center'>
            <IoIosPerson className='text-xl lg:text-2xl' />
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-sm sm:text-xl lg:text-2xl'>
              Hello,<span className='lg:hidden'><br /></span> Demo User
            </h1>
            <p className='text-gray-500 text-xs sm:text-sm lg:text-lg'>Demo org</p>
          </div>
        </div>
      </div>

      <div className='absolute top-0 right-0 p-4 mt-10'>
        <div className='text-right'>
          <div className='text-xs hidden sm:block sm:text-sm lg:block lg:text-base'>
            Zoho Inventory India Helpline: <span className='font-bold'>8100810020</span>
          </div>
          <span className='text-[8px] sm:text-xs lg:text-sm text-gray-500'>
            Mon - Fri / 9:00 AM - 7:00 PM / Toll Free
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashHead;

