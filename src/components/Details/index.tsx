import { ClimateItem } from "@/components/";
import { Humidity, Wind, Cloud, Barometer } from "@/icons/";

const data = [
  {
    icon: <Humidity />,
    name: "Humidity",
    value: "25%",
  },
  {
    icon: <Wind />,
    name: "Wind",
    value: "23 km/h ",
  },
  {
    icon: <Barometer />,
    name: "Bar.",
    value: "1010 mb",
  },
  {
    icon: <Cloud />,
    name: "Clouds",
    value: "40%",
  },
];

const Details = () => {
  return (
    <div className='mt-[0.1vh]'>
      <div className='grid place-items-center text-[14.5px] bg-mineshaft-100 text-mineshaft-900 dark:bg-mineshaft-600 dark:text-mineshaft-200 rounded-[1.25rem] h-[11.8vh] w-[90.7vw]'>
        <div className='grid gap-x-[1.7rem] grid-rows-2 grid-cols-2 w-[80vw] h-[9vh]'>
          {data.map((item, index) => (
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
