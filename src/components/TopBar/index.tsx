import { useEffect } from "react";
import DataContext from "@/context/DataContex";
import { Sun, Moon } from "@/style/icons";

const TopBar = () => {
  const { darkmode, setDarkMode, weatherData, locationData, setLocationData } = DataContext();

  const timeapi = import.meta.env.VITE_TIMEAPI;

  const { name, sys }: any = weatherData;

  function convertDateTime(datetime: string, gmt_offset: number) {
    const date = new Date(datetime);
    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    let hours = date.getUTCHours() + gmt_offset;
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    let finalminutes = minutes < 10 ? `${minutes}`.padStart(2, "0") : minutes;

    return `${dayOfWeek}, ${hours}:${finalminutes} `;
  }

  const getData = async () => {
    let url = `https://timezone.abstractapi.com/v1/current_time/?api_key=${timeapi}&location=${name},${sys.country}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setLocationData(data));
  };

  useEffect(() => {
    getData();
  }, [sys]);

  const { datetime, gmt_offset } = locationData;

  let timeAndData: string = convertDateTime(datetime, gmt_offset);

  useEffect(() => {
    let body: HTMLBodyElement | null;
    body = document.querySelector("body");
    body?.classList.toggle("dark");
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
