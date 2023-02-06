import IconItem from "../IconItem";

const Today = () => {
  return (
    <div className='mt-[100px]'>
      <div className='grid place-items-center bg-mineshaft-100 text-mineshaft-800 dark:text-mineshaft-200 dark:bg-mineshaft-600 rounded-[20px] h-[85px] w-[390px]'>
        <div className='grid grid-cols-2 grid-rows-2 h-[50px] w-[350px]'>
          <div>
            <p className='font-bold'>Today</p>
          </div>
          <div className='flex items-center justify-end'>
            <div>
              <p className='text-[15px] text-right'>29º max</p>
            </div>
            <div>
              <div className='mx-2'>
                <p>/</p>
              </div>
            </div>
            <div>
              <p className='text-[15px] text-right'>26º min</p>
            </div>
          </div>
          <div></div>
          <div>
            <p className='text-[14px] text-mineshaft-400 dark:text-mineshaft-300 text-right'>
              Feels like 32º
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
