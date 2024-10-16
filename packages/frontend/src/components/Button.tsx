import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

interface Props {
  onClick?: () => void;
  label: string;
  variant?: Variant;
}

export default function Button({
  label,
  variant = "primary",
  onClick,
  ...rest
}: Props &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) {
  return (
    <button
      {...rest}
      className={clsx(styles.button, styles[variant])}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
