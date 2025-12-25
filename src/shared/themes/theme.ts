import { createTheme, Theme } from "@mui/material";

const CONTAINER_WIDTH = 600;
const CONTAINER_INLINE_SPACE = 20;

function getTheme(): Theme {
  const defaultTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1280
      }
    },
    palette: {
      common: {
        black: "rgba(0, 0, 0, 0.87)",
        white: "#FFFFFF"
      },
      primary: {
        main: "#9C27B0"
      },
      error: {
        main: "#D32F2F",
        "100": "##C62828"
      },
      success: {
        main: "#1B5E20",
        "100": "#2E7D32"
      }
    },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(",")
    }
  });

  defaultTheme.typography.body1 = {
    fontSize: 16,
    lineHeight: 1.5
  };

  defaultTheme.typography.body2 = {
    fontSize: 14,
    lineHeight: 1.7
  };

  defaultTheme.typography.caption = {
    fontSize: 14,
    lineHeight: 1.7
  };

  defaultTheme.components = {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: CONTAINER_WIDTH + CONTAINER_INLINE_SPACE * 2,
          paddingInline: CONTAINER_INLINE_SPACE,
          [defaultTheme.breakpoints.up("sm")]: {
            maxWidth: CONTAINER_WIDTH,
            paddingInline: CONTAINER_INLINE_SPACE
          },
          [defaultTheme.breakpoints.up("md")]: {
            maxWidth: CONTAINER_WIDTH,
            paddingInline: CONTAINER_INLINE_SPACE
          },
          [defaultTheme.breakpoints.up("lg")]: {
            maxWidth: CONTAINER_WIDTH,
            paddingInline: CONTAINER_INLINE_SPACE
          }
        }
      }
    }
  };

  return defaultTheme;
}

export default getTheme;
