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
    <div className='w-screen h-[6.7vh] mt-[3vh]'>
      <div className='flex items-center justify-between mx-[5vw]'>
        <div>
          <h5 className='font-medium text-2xl text-mineshaft-900 dark:text-mineshaft-100'>
            São Luis, MA
          </h5>
          <p className='text-[.9375rem] text-mineshaft-300'>Sunday, 1AM</p>
        </div>
        <div
          className='grid place-items-center w-[6.3vw] h-[2.9vh] cursor-pointer'
          onClick={(e) => {
            e.preventDefault();
            setDarkMode(!darkmode);
          }}
        >
          <IconItem mode='stroke' path={darkmode ? sun : moon} w='2.4vh' h='2.7vh' />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
