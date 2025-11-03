import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

export const BackIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <G
      stroke="#F7F8F6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      clipPath="url(#a)"
    >
      <Path d="M17.498 10h-15 .417M8.331 15.833 2.498 10l5.833-5.833" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
