"use client";

import { ArrowRight } from "@mui/icons-material";

enum iconTypeEnum {
  arrowRight = "ARROW_RIGHT",
}

const Button = ({
  text,
  className,
  iconType,
}: {
  text: string;
  className?: string;
  iconType?: iconTypeEnum;
}) => {
  return (
    <button className={"btn btn--primary " + className}>
      {text} {iconType === iconTypeEnum.arrowRight && <ArrowRight />}
    </button>
  );
};

export default Button;
