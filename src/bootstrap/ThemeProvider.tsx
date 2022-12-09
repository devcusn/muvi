import React from "react";

import {
  ThemeProvider as AwsThemeProvider,
  Theme as AwsTheme,
} from "@aws-amplify/ui-react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const theme: AwsTheme = {
    name: "my-theme",
    tokens: {
      components: {
        heading: {
          color: { value: "#ffffff" },
        },
        button: {
          color: { value: "{colors.white}" },

          primary: {
            color: { value: "{colors.white}" },
            backgroundColor: { value: "red" },
            _hover: {
              backgroundColor: { value: "#9b0808" },
            },
            _active: {
              backgroundColor: { value: "#505050" },
            },
          },
        },
        fieldcontrol: {
          borderColor: {
            value: "#505050",
          },
          _focus: {
            borderColor: { value: `#fafafa` },
          },
          color: {
            value: "{colors.white}",
          },
          _error: {
            borderColor: { value: "{colors.red.80}" },
          },
        },
        tabs: {
          backgroundColor: { value: "#f00a0a" },
          item: {
            color: { value: "#f00a0a" },
            _active: {
              color: { value: "#fafafa" },
            },
            _hover: {
              color: { value: "#707070" },
            },
            _focus: {
              color: { value: "#fafafa" },
            },
          },
        },
      },
      colors: {
        background: { primary: { value: "{colors.black}" } },
        teal: { 90: { value: "#202020" }, 80: { value: "#202020" } },
        font: {
          interactive: {
            value: "#cccccc",
          },
        },
      },
    },
  };
  return (
    <AwsThemeProvider theme={theme}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AwsThemeProvider>
  );
};

export default Provider;
