import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const ProfileIcon = ({ color = "#DBDFD6", ...props }: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fill={color}
      d="M15 5A5 5 0 1 1 5 5a5 5 0 0 1 10 0ZM1.667 16.667a5 5 0 0 1 5-5h6.666a5 5 0 0 1 5 5v.833a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5v-.833Z"
    />
  </Svg>
);
