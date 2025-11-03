import { Text } from "react-native";
import { styled } from "styled-components/native";

export const Typography = styled(Text)<{ variant: string }>`
  ${({ variant }) => {
    switch (variant) {
      case "h1":
        return `
          font-size: 24px;
          font-weight: 800;
          font-family: 'Epilogue_800ExtraBold';
        `;
      case "h2":
        return `
          font-size: 18px;
          font-weight: 800;
          font-family: 'Epilogue_800ExtraBold';
        `;
      case "h3":
        return `
          font-size: 16px;
          font-weight: 800;
          line-height: 18px;
          font-family: 'Epilogue_800ExtraBold';
        `;
      case "h4":
        return `
          font-size: 14px;
          font-weight: 700;
          line-height: 18px;
          font-family: 'Epilogue_700Bold';
        `;
      case "h5":
        return `
          font-size: 12px;
          line-height: 700;
          font-weight: bold;
          font-family: 'Epilogue_700Bold';
        `;
      case "body":
        return `
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          font-family: 'Epilogue_400Regular';
        `;
      case "body5":
        return `
          font-size: 12px;
          line-height: 16px;
          font-weight: 400;
          font-family: 'Epilogue_400Regular';
        `;
      case "caption":
        return `
          font-size: 12px;
          line-height: 12px;
          font-weight: 600;
          font-family: 'Epilogue_600SemiBold';
        `;
      case "action":
        return `
          font-size: 10px;
          line-height: 14px;
          font-weight: 700;
          font-family: 'Epilogue_700Bold';
        `;
      default:
        return `
          font-size: 16px;
          line-height: 24px;
          font-family: 'Epilogue_400Regular';
        `;
    }
  }}
`;
