import clsx from "clsx";
import { PropsWithChildren } from "react";

import styles from "./Stack.module.css";

type Direction = "horizontal" | "vertical";

interface Props {
  direction?: Direction;
  gap?: 0 | 1 | 2;
}

export default function Stack({
  direction = "vertical",
  gap = 1,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={clsx(styles.stack, styles[direction], styles[`gap-${gap}`])}
    >
      {children}
    </div>
  );
}

export const YStack = Stack;

export function XStack({ children }: PropsWithChildren) {
  return <Stack direction="horizontal"> {children}</Stack>;
}
