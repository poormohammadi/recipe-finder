import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import {
  SearchInputContainer,
  StyledSearchIcon,
  StyledTextInput,
} from "./SearchBox.styles";

export const SearchBox: React.FC<TextInputProps> = ({ ...props }) => {
  const theme = useTheme();
  return (
    <SearchInputContainer>
      <StyledSearchIcon />
      <StyledTextInput
        placeholderTextColor={theme.colors.text.secondary}
        returnKeyType="search"
        {...props}
      />
    </SearchInputContainer>
  );
};
