import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("magenta text-sm font-normal", {
  variants: {
    variant: {
      primary: "dark-low",
      secondary: "dark-medium",
      tertiary: "dark-high",
      quaternary: "magenta",
      quinary: "light-solid",
      senary: "light-high",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      xl: "text-xl",
      lg: "text-lg",
      xxl: "text-xxl",
    },
    defaultVariants: {
      variant: "quaternary",
      size: "md",
    },
  },
});

export type TypographyProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements["p"];

const Typography = ({
  children,
  element = "p",
  className,
  ...rest
}: TypographyProps) => {
  const Element = element as any;
  return (
    <Element className={`${textVariants(rest)} ${className}`} {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
