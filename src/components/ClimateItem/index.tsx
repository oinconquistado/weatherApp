const ClimateItem = ({ children, name, value }) => {
  return (
    <div className='flex gap-2 items-end h-[3.54vh] gap-[.250rem]'>
      <div className='grid place-items-center w-[6.28vw] '>{children}</div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ClimateItem;
