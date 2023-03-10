import { Sun, Moon } from "@/style/icons";
import { convertDateTime } from "@/functions";
import DataContext from "@/context/DataContext";
import Spinner from "../Spinner/Spinner";

const TopBar = () => {
  const { darkmode, setDarkMode, locationData, weatherData } = DataContext();
  const { name, sys }: any = weatherData;

  const { datetime, gmt_offset } = locationData;
  let timeAndData: string = convertDateTime(datetime, gmt_offset);

  if (name && sys?.country && timeAndData.length)
    return (
      <div className='animate-showDown'>
        <div className='grid grid-flow-col items-center justify-between mx-[5vw] h-full mt-4'>
          <div>
            <h5 className='font-medium text-2xl text-mineshaft-900 dark:text-mineshaft-100'>
              {name}, {sys.country}
            </h5>

            <p className='text-[.9375rem] text-mineshaft-300'>{timeAndData}</p>
          </div>
          <div
            className='grid place-items-center w-[3vh] h-[3vh] cursor-pointer'
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
  else {
    return (
      <div className='grid place-items-center h-[6.7vh] w-screen h-2 mt-[3vh]'>
        <div>
          <Spinner h='8' w='8' />
        </div>
      </div>
    );
  }
};

export default TopBar;
