const ClimateItem = ({ children, name, value }) => {
  return (
    <div className='grid place-items-center grid-flow-col gap-2-4 md:gap-2 items-end  w-full gap-[.250rem]'>
      <div className='grid place-items-center w-[2.7vh] h-[2.7vh]'>{children}</div>
      <div className='text-left w-16 '>
        <p>{name}</p>
      </div>
      <div className='w-16 '>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ClimateItem;
