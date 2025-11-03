import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const StartHalfIcon = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill="#80E619"
      d="M6 0v9.715l-3.218 1.692a.452.452 0 0 1-.657-.477l.615-3.584L.137 4.81a.454.454 0 0 1 .251-.774l3.597-.523L5.593.252C5.673.093 5.833.001 6 0Z"
    />
    <Path
      fill="#8A967B"
      d="M6 0a.45.45 0 0 1 .407.252l1.608 3.26 3.597.523a.452.452 0 0 1 .25.774L9.26 7.346l.615 3.584a.453.453 0 0 1-.657.477L6 9.715v-1.25c.2 0 .4.048.582.144l1.788.94-.342-1.991a1.25 1.25 0 0 1 .36-1.107L9.835 5.04l-2-.29a1.25 1.25 0 0 1-.941-.685L6 2.253V0Z"
    />
  </Svg>
);
