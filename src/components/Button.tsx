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
  onClick,
}: {
  text: string;
  className?: string;
  iconType?: iconTypeEnum;
  type?: "button" | "submit";
  disabled: boolean;
  onClick?: any;
}) => {
  return (
    <button
      className={
        "btn btn--primary " + className + (disabled ? " btn--disabled" : "")
      }
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text} {iconType === iconTypeEnum.arrowRight && <ArrowRight />}
    </button>
  );
};

export default Button;
