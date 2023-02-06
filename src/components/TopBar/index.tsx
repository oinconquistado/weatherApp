import React from "react";

const TopBar = () => {
  return (
    <div className='w-[430px] h-[62px] mt-[22px]'>
      <div className='flex items-center justify-between mx-[25px]'>
        <div>
          <h5 className='font-medium text-2xl font'>São Luis, MA</h5>
          <p className='text-[15px] text-mineshaft-300'>Sunday, 1AM</p>
        </div>
        <div>
          <img src='./icons/moon.svg' alt='moon' />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
