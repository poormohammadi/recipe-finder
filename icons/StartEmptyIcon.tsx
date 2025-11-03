import * as React from "react";
import Svg, { G, Mask, Path, SvgProps } from "react-native-svg";

export const StartEmptyIcon = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Mask
      id="a"
      width={12}
      height={12}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path
        fill="#80E619"
        fillRule="evenodd"
        d="M7.835 4.75a1.25 1.25 0 0 1-.941-.685L6 2.253l-.894 1.812a1.25 1.25 0 0 1-.941.684l-2 .291 1.447 1.411c.295.287.43.701.36 1.107L3.63 9.549l1.788-.94a1.25 1.25 0 0 1 1.164 0l1.788.94-.342-1.991a1.25 1.25 0 0 1 .36-1.107L9.835 5.04l-2-.29Zm3.777-.715a.452.452 0 0 1 .25.774L9.26 7.346l.615 3.584a.453.453 0 0 1-.657.477L6 9.715l-3.218 1.692a.453.453 0 0 1-.657-.477l.615-3.584L.137 4.81a.454.454 0 0 1 .25-.774l3.598-.523L5.593.252a.455.455 0 0 1 .814 0l1.608 3.26 3.597.523Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#8A967B" d="M0 0h12v12H0z" />
    </G>
  </Svg>
);
