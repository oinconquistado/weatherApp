import { ClimateItem } from "@/components/";
import { iconsPath } from "@/data/iconsPath";

const Details = () => {
  return (
    <div className='mt-[20px]'>
      <div className='grid place-items-center bg-mineshaft-100 text-mineshaft-900 dark:bg-mineshaft-600 dark:text-mineshaft-200 rounded-[20px] h-[110px] w-[390px]'>
        <div className='grid gap-y-[12px] gap-x-[40px] grid-rows-2 grid-cols-2 w-[340px] h-[72px]'>
          {iconsPath.map(({ path, name }, index) => (
            <ClimateItem key={index} path={path} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
