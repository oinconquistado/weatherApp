import { ClimateItem, Spinner } from "@/components/";
import DataContext from "@/context/DataContext";
import { Humidity, Wind, Cloud, Barometer } from "@/style/icons/";

const Details = () => {
  const { weatherData } = DataContext();

  const { wind, main, clouds } = weatherData;

  const infoData = [
    {
      icon: <Humidity />,
      name: "Humidity",
      value: `${main.humidity.toFixed(0)}%`,
    },
    {
      icon: <Wind />,
      name: "Wind",
      value: `${wind.speed.toFixed(0)} km/h`,
    },
    {
      icon: <Barometer />,
      name: "Pressure",
      value: `${main.pressure.toFixed(0)} mb`,
    },
    {
      icon: <Cloud />,
      name: "Clouds",
      value: `${clouds.all.toFixed(0)}%`,
    },
  ];

  return (
    <div className='mt-[0.1vh] h-[12vh] md:h-[30vh] md:w-12/12'>
      <div className='grid place-items-center h-full text-[.9063rem] bg-mineshaft-100 text-mineshaft-900 dark:bg-mineshaft-600 dark:text-mineshaft-200 md:rounded-[0px] rounded-[1.25rem] md:bg-transparent md:dark:bg-transparent'>
        <div className='grid place-items-center gap-x-4 md:gap-x-4 md:gap-y-4 grid-rows-2 grid-cols-2 md:grid-cols-1 md:grid-rows-4 md:grid-flow-col md:h-6/6 md:w-10/12 h-4/6'>
          {infoData.map((item, index) => (
            <ClimateItem key={index} name={item.name} value={item.value}>
              {item.icon}
            </ClimateItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
