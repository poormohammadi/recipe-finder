import { Theme } from "@/theme/theme";
import "styled-components/native";

declare module "styled-components/native" {
  export type DefaultTheme = Theme;
}
