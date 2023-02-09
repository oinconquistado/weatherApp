import DataContext from "@/context/DataContext";
import Spinner from "../Spinner/Spinner";

const Main = () => {
  const { weatherData } = DataContext();

  const { main, weather } = weatherData;
  const { temp }: { temp: number } = main;
  let { description, icon }: { description: string; icon: string } = weather[0];
  description = description.charAt(0).toUpperCase() + description.slice(1);

  if (main && weather)
    return (
      <div className='grid place-items-center'>
        <img className='md:h-[200px] h-72' src={`./graph/${icon}.svg`} alt={description} />
        <div>
          <h1 className='font-bold text-mineshaft-900 dark:text-mineshaft-100 text-5xl md:text-5xl'>
            {temp.toFixed(0)}º
          </h1>
        </div>
        <div>
          <p className='text-lg md:text-2xl text-mineshaft-300'>{description}</p>
        </div>
      </div>
    );
  else {
    return (
      <div className='grid place-items-center h-[46.1vh] mt-[6.4vh] w-screen'>
        <Spinner w='64' h='64' />
      </div>
    );
  }
};

export default Main;
