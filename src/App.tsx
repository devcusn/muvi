import { ThemeProvider, defaultDarkModeOverride } from "@aws-amplify/ui-react";
import React from "react";

import RouterCapsule from "./bootstrap/RouterCapsule";

const theme = {
  name: "my-theme",
  overrides: [defaultDarkModeOverride],
};

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterCapsule></RouterCapsule>;
    </ThemeProvider>
  );
};

export default App;
