import { ClimateItem } from "@/components/";
import { iconsPath } from "@/data/iconsPath";

const Details = () => {
  return (
    <div className='mt-[2.vh]'>
      <div className='grid place-items-center bg-mineshaft-100 text-mineshaft-900 dark:bg-mineshaft-600 dark:text-mineshaft-200 rounded-[1.25rem] h-[11.8vh] w-[90.7vw]'>
        <div className='grid gap-y-[.75rem] gap-x-[2.5rem] grid-rows-2 grid-cols-2 w-[79.1vw] h-[7.7vh]'>
          {iconsPath.map(({ path, name }, index) => (
            <ClimateItem key={index} path={path} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
