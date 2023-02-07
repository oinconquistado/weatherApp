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
    <svg className={svgStyle} width={w} height={h}>
      <path d={path} />
    </svg>
  );
};

export default IconItem;
