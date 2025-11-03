import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
export const FavoritesIcon = ({
  color = "#80E619",
  width = 20,
  height = 20,
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fill={color}
      d="M5.625 1.156C2.644 1.156.208 3.552.208 6.53c0 1.117.225 2.93 1.464 5.08 1.236 2.145 3.448 4.566 7.334 6.955l.004.002a1.904 1.904 0 0 0 1.98 0l.003-.002c3.887-2.39 6.099-4.81 7.335-6.954 1.239-2.15 1.464-3.964 1.464-5.081 0-2.977-2.436-5.373-5.417-5.373-1.57 0-2.9.84-3.758 1.552-.23.191-.437.381-.617.558a9.837 9.837 0 0 0-.617-.558c-.859-.712-2.187-1.552-3.758-1.552Z"
    />
  </Svg>
);
