const Today = () => {
  return (
    <div className='mt-[100px]'>
      <div className='grid place-items-center bg-mineshaft-100 rounded-[20px] h-[85px] w-[390px]'>
        <div className='grid grid-cols-2 grid-rows-2 h-[47px] w-[351px]'>
          <div>
            <p className='font-bold'>Today</p>
          </div>
          <div>
            <p className='text-[15px] text-right'>29º max xx 32º min</p>
          </div>
          <div></div>
          <div>
            <p className='text-[14px] text-mineshaft-400 text-right'>Feels like 32º</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
