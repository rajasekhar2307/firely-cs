"use client";

import { ArrowRight } from "@mui/icons-material";

enum iconTypeEnum {
  arrowRight = "ARROW_RIGHT",
}

const Button = ({
  text,
  className,
  iconType,
  type,
  disabled,
}: {
  text: string;
  className?: string;
  iconType?: iconTypeEnum;
  type?: "button" | "submit";
  disabled: boolean;
}) => {
  return (
    <button
      className={
        "btn btn--primary " + className + (disabled ? " btn--disabled" : "")
      }
      disabled={disabled}
      type={type}
    >
      {text} {iconType === iconTypeEnum.arrowRight && <ArrowRight />}
    </button>
  );
};

export default Button;
