import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const HomeIcon: React.FC<SvgProps> = ({
  width = 20,
  height = 20,
  color = "#80E619",
  ...props
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fill={color}
      d="M19.167 9.574V18.4a1.528 1.528 0 0 1-1.528 1.528h-3.82a1.527 1.527 0 0 1-1.527-1.527v-3.82a.764.764 0 0 0-.764-.764H8.473a.764.764 0 0 0-.764.764v3.82a1.528 1.528 0 0 1-1.528 1.527h-3.82a1.527 1.527 0 0 1-1.527-1.527V9.573a1.528 1.528 0 0 1 .493-1.125l7.64-7.207.01-.01a1.528 1.528 0 0 1 2.066.01l7.639 7.207a1.528 1.528 0 0 1 .485 1.125Z"
    />
  </Svg>
);
