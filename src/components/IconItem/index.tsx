interface IconItemProps {
  path: string;
  w: string;
  h: string;
  mode: "stroke" | "fill";
}

const IconItem = ({ path, w, h, mode }: IconItemProps) => {
  const fill = "fill-mineshaft-900 dark:fill-mineshaft-200 stroke-none";
  const stroke = "stroke-mineshaft-900 dark:stroke-mineshaft-200 fill-none stroke-2";

  const svgStyle = mode === "stroke" ? stroke : fill;

  if (mode === "stroke") {
  } else {
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      // fill='none'
      viewBox={`0 0 ${w} ${h}`}
      // strokeWidth={1.5}
      // stroke='currentColor'
      className={`w-[${w}] h-[${h}] svgStyle m-0`}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d={path} />
    </svg>
  );
};

export default IconItem;
