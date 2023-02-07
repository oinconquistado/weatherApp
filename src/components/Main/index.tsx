const Main = () => {
  return (
    <div className='grid place-items-center h-[46.1vh] mt-[6.4vh] w-screen'>
      <div className='grid place-items-center w-[88.4vw] h-[30.8vh]'>
        <img src='./graph/sun.svg' alt='sun' />
        <div>
          <h1 className='font-bold text-mineshaft-900 dark:text-mineshaft-100 text-[2.5rem] font-bold'>
            28º
          </h1>
        </div>
        <div>
          <p className='text-mineshaft-300'>Partly Cloudly</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
