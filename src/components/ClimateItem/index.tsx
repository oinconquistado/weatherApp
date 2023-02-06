import { IconItem } from "@/components";

const ClimateItem = ({ path, name }) => {
  return (
    <div>
      <div className='flex gap-1.5 w-[150px] h-[32px]'>
        <div className='grid w-[28px] h-[32px]'>
          <IconItem mode='fill' path={path} w='28px' h='28px' />
        </div>
        <div className='grid place-items-center h-[32px]'>
          <p>{name}</p>
        </div>
        <div className='grid place-items-center h-[32px]'>
          <p>75%</p>
        </div>
      </div>
    </div>
  );
};

export default ClimateItem;
