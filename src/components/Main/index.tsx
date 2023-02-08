import DataContext from "@/context/DataContex";

const Main = () => {
  const { weatherData } = DataContext();

  const { main, weather } = weatherData;
  const { temp }: { temp: number } = main;
  let { description, icon }: { description: string; icon: string } = weather[0];
  description = description.charAt(0).toUpperCase() + description.slice(1);

  if (main && weather)
    return (
      <div className='grid place-items-center h-[46.1vh] mt-[6.4vh] w-screen animate-showDown'>
        <div className='grid place-items-center w-[88.4vw] h-[30.8vh]'>
          <img className='h-[200px]' src={`./graph/${icon}.svg`} alt={description} />
          <div>
            <h1 className='font-bold text-mineshaft-900 dark:text-mineshaft-100 text-[2.5rem] font-bold'>
              {temp.toFixed(0)}º
            </h1>
          </div>
          <div>
            <p className='text-mineshaft-300'>{description}</p>
          </div>
        </div>
      </div>
    );
  else return <>Carregando...</>;
};

export default Main;
