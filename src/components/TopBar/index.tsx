import { useEffect } from "react";
import { IconItem } from "@/components";
import { darkModeIcons } from "@/data/iconsPath";
import DataContext from "@/context/DataContex";

const TopBar = () => {
  const { sun, moon } = darkModeIcons;
  const { darkmode, setDarkMode } = DataContext();

  useEffect(() => {
    let body: HTMLBodyElement | null;
    body = document.querySelector("body");
    body?.classList.toggle("dark");
  }, [darkmode]);

  return (
    <div className='w-[430px] h-[62px] mt-[22px]'>
      <div className='flex items-center justify-between mx-[25px]'>
        <div>
          <h5 className='font-medium text-2xl text-mineshaft-900 dark:text-mineshaft-100'>
            São Luis, MA
          </h5>
          <p className='text-[15px] text-mineshaft-300'>Sunday, 1AM</p>
        </div>
        <div
          className='grid place-items-center w-[25px] h-[25px] cursor-pointer'
          onClick={(e) => {
            e.preventDefault();
            setDarkMode(!darkmode);
          }}
        >
          <IconItem mode='stroke' path={moon} w='25px' h='25px' />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
