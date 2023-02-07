const ClimateItem = ({ children, name, value }) => {
  return (
    <div className='flex gap-2 items-end h-[33px] gap-[2px]'>
      <div className='grid place-items-center w-[27px] '>{children}</div>
      <div className=''>
        <p className=''>{name}</p>
      </div>

      <div className=''>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ClimateItem;
