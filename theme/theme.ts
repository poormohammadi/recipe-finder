export type Theme = {
  colors: {
    text: {
      primary: string;
      secondary: string;
      midnight: string;
      void: string;
    };
    background: {
      paper: string;
      default: string;
    };
    success: {
      light: string;
      main: string;
    };
    icon: {
      default: string;
      selected: string;
    };
  };
};

export const lightTheme: Theme = {
  colors: {
    text: {
      primary: "#0A0B0A",
      secondary: "#959990",
      midnight: "#262824",
      void: "#000000",
    },
    success: {
      light: "#D1F6AC",
      main: "#64B313",
    },
    background: {
      paper: "#fff",
      default: "#F7F8F6",
    },
    icon: {
      default: "#DBDFD6",
      selected: "#80E619",
    },
  },
};
