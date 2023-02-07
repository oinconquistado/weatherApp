import { IconItem } from "@/components";

const ClimateItem = ({ path, name }) => {
  return (
    <div>
      <div className='flex gap-1.5 w-[34.9vw] h-[3.4vh]'>
        <div className='grid w-[6.5vw] h-[3.4vh]'>
          <IconItem
            mode='fill'
            path={path}
            w='auto'
            h='3.4vh
          '
          />
        </div>
        <div className='grid place-items-center h-[3.4vh]'>
          <p>{name}</p>
        </div>
        <div className='grid place-items-center h-[3.4vh]'>
          <p>75%</p>
        </div>
      </div>
    </div>
  );
};

export default ClimateItem;
