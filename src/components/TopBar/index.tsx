import { useEffect } from "react";
import DataContext from "@/context/DataContex";
import { Sun, Moon } from "@/style/icons";
import { QueryData } from "@/services";

const TopBar = () => {
  const { darkmode, setDarkMode, weatherData } = DataContext();

  const { name, sys, timezone }: { name: string; sys: any; timezone: number } = weatherData;

  // let url = "http://worldtimeapi.org/api/ip";

  // const getTime = new QueryData("timezone", url);

  // const { data } = getTime.getData();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  useEffect(() => {
    let body: HTMLBodyElement | null;
    body = document.querySelector("body");
    body?.classList.toggle("dark");
  }, [darkmode]);

  if (name.length && sys?.country)
    return (
      <div className='w-screen h-[6.7vh] mt-[3vh]'>
        <div className='grid grid-flow-col	 items-center justify-between mx-[5vw] h-[62]'>
          <div className=''>
            <h5 className='font-medium text-2xl text-mineshaft-900 dark:text-mineshaft-100'>
              {name}, {sys.country}
            </h5>

            <p className='text-[.9375rem] text-mineshaft-300'>Sunday, 1AM</p>
          </div>
          <div
            className='grid place-items-center w-[6.3vw] h-[62] cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              setDarkMode(!darkmode);
            }}
          >
            {darkmode ? <Sun /> : <Moon />}
          </div>
        </div>
      </div>
    );
  else return <>Carregando...</>;
};

export default TopBar;
