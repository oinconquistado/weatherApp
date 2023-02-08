import { ClimateItem } from "@/components/";
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
      name: "Bar.",
      value: `${main.pressure.toFixed(0)} mb`,
    },
    {
      icon: <Cloud />,
      name: "Clouds",
      value: `${clouds.all.toFixed(0)}%`,
    },
  ];

  return (
    <div className='mt-[0.1vh] animate-showUP'>
      <div className='grid place-items-center text-[.9063rem] bg-mineshaft-100 text-mineshaft-900 dark:bg-mineshaft-600 dark:text-mineshaft-200 rounded-[1.25rem] h-[11.8vh] w-[90.7vw]'>
        <div className='grid gap-x-[1.7rem] grid-rows-2 grid-cols-2 w-[80vw] h-[9vh]'>
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
