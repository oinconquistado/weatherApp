const ClimateItem = ({ children, name, value }) => {
  return (
    <div className='flex gap-2 items-end h-[3.54vh] gap-[.125rem]'>
      <div className='grid place-items-center w-[6.28vw] '>{children}</div>
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
