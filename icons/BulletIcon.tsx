import * as React from "react";
import Svg, { Rect, SvgProps } from "react-native-svg";

export const BulletIcon = (props: SvgProps) => (
  <Svg width={8} height={8} fill="none" {...props}>
    <Rect width={8} height={8} fill="#80E619" rx={4} />
  </Svg>
);
