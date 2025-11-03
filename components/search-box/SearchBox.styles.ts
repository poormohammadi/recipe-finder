import { SearchIcon } from "@/icons";
import { styled } from "styled-components/native";

export const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: 24px;
  padding: 12px 16px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  margin-right: 16px;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: "Epilogue_400Regular";
`;
