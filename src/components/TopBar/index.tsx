import { useEffect } from "react";

const TopBar = () => {
  let body: HTMLBodyElement | null;

  useEffect(() => {
    body = document.querySelector("body");
    // body?.classList.add("dark");
  }, []);

  return (
    <div className='w-[430px] h-[62px] mt-[22px]'>
      <div className='flex items-center justify-between mx-[25px]'>
        <div>
          <h5 className='font-medium text-2xl text-mineshaft-900 dark:text-mineshaft-100 '>
            São Luis, MA
          </h5>
          <p className='text-[15px] text-mineshaft-300'>Sunday, 1AM</p>
        </div>
        <div
          className='cursor-pointer'
          onClick={() => {
            window.alert("Hello World");
          }}
        >
          <div>
            <img src='./icons/moon.svg' alt='moon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
