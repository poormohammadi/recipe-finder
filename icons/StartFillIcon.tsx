import * as React from "react";
import Svg, { ClipPath, Defs, G, Mask, Path, SvgProps } from "react-native-svg";

export const StartFillIcon = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Mask
        id="b"
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
          d="m11.612 4.035-3.597-.523L6.407.252a.455.455 0 0 0-.813 0l-1.609 3.26-3.597.523a.453.453 0 0 0-.25.774L2.74 7.346l-.615 3.584a.453.453 0 0 0 .657.477L6 9.715l3.218 1.692a.453.453 0 0 0 .657-.477L9.26 7.346l2.603-2.537a.453.453 0 0 0-.25-.774Z"
        />
      </Mask>
      <G mask="url(#b)">
        <Path fill="#80E619" d="M0 0h12v12H0z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
