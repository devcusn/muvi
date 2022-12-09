import React from "react";
import ThemeProvider from "./bootstrap/ThemeProvider";

import RouterCapsule from "./bootstrap/RouterCapsule";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <RouterCapsule></RouterCapsule>
    </ThemeProvider>
  );
};

export default App;
