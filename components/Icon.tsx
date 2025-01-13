import React from "react";
import Image from "next/image";

interface IconProps {
  className: string;
  width?: number;
  height?: number;
}

function Icon(props: IconProps) {
  return (
    <Image
      src="/Porsche.png"
      width={props.width || 24}
      height={props.height || 24}
      alt="Icon"
      className={props.className}
    />
  );
}

export default Icon;
