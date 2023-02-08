import { useEffect } from "react";
import { fetchData } from "@/classes";
import { Sun, Moon } from "@/style/icons";
import { darkModeManger } from "@/controllers";
import { convertDateTime } from "@/functions";
import DataContext from "@/context/DataContex";

const TopBar = () => {
  const { darkmode, setDarkMode, weatherData, locationData, setLocationData } = DataContext();
  const { name, sys }: any = weatherData;

  const dataFetcher = async () => {
    const timeapi = import.meta.env.VITE_TIMEAPI;
    let baseurl = `https://timezone.abstractapi.com/v1/current_time/`;
    let urlparams = `?api_key=${timeapi}&location=${name},${sys.country}`;
    const getTimeData = new fetchData(`${baseurl}${urlparams}`);
    const { response } = await getTimeData.getData();
    setLocationData(response);
  };

  useEffect(() => {
    dataFetcher();
  }, [sys]);

  const { datetime, gmt_offset } = locationData;
  let timeAndData: string = convertDateTime(datetime, gmt_offset);

  useEffect(() => {
    darkModeManger();
  }, [darkmode]);

  if (name.length && sys?.country && timeAndData.length)
    return (
      <div className='w-screen h-[6.7vh] mt-[3vh] animate-showDown'>
        <div className='grid grid-flow-col	 items-center justify-between mx-[5vw] h-[62]'>
          <div>
            <h5 className='font-medium text-2xl text-mineshaft-900 dark:text-mineshaft-100'>
              {name}, {sys.country}
            </h5>

            <p className='text-[.9375rem] text-mineshaft-300'>{timeAndData}</p>
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
