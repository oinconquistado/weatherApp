import { IconItem } from "@/components";

const ClimateItem = ({ path, name }) => {
  return (
    <div className='grid grid-flow-col items-end border border-blue-500 h-[32.4px] gap-1.5 w-[34.9vw]'>
      <div className='grid place-items-center border border-red-500 w-[30px]'>
        <IconItem mode='fill' path={path} w='auto' h='30px' />

        {/* <div>
          <p>A</p>
        </div> */}
      </div>
      <div className=''>
        <p className=''>{name}</p>
      </div>
      <div className=''>
        <p>75%</p>
      </div>
    </div>
  );
};

export default ClimateItem;
