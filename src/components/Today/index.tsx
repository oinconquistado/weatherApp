import DataContext from "@/context/DataContext";
import Spinner from "../Spinner/Spinner";

const Today = () => {
  const { weatherData } = DataContext();

  interface todayInterface {
    temp_min: number;
    temp_max: number;
    feels_like: number;
  }

  const { main } = weatherData;
  let { temp_min, temp_max, feels_like }: todayInterface = main;

  if (temp_min && temp_max && feels_like)
    return (
      <div className='grid h-[9.12vh] md:h-full place-items-center bg-mineshaft-100 text-mineshaft-800 dark:text-mineshaft-200 dark:bg-mineshaft-600 rounded-[1.25rem] md:rounded-[0] md:bg-transparent md:dark:bg-transparent md:w-10/12 centralize'>
        <div className='grid grid-cols-2 grid-rows-2 w-11/12 md:w-full'>
          <div>
            <p className='font-bold'>Today</p>
          </div>
          <div className='flex items-center justify-end'>
            <div>
              <p className='text-[.9375rem] text-right'>{temp_min.toFixed(0)}º min</p>
            </div>
            <div>
              <div className='mx-2'>
                <p>/</p>
              </div>
            </div>
            <div>
              <p className='text-[.9375rem] text-right'>{temp_max.toFixed(0)}º max</p>
            </div>
          </div>
          <div></div>
          <div>
            <p className='text-[.875rem] text-mineshaft-400 dark:text-mineshaft-300 text-right'>
              Feels like {feels_like.toFixed(0)}º
            </p>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div className='grid place-items-center h-[9.1vh] w-[90.7vw]'>
        <Spinner w='8' h='8' />
      </div>
    );
  }
};

export default Today;
