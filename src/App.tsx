import React from "react";
import ThemeProvider from "./bootstrap/ThemeProvider";

import RouterCapsule from "./bootstrap/RouterCapsule";
import Guard from "./bootstrap/Guard";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <Guard>
        <RouterCapsule />
      </Guard>
    </ThemeProvider>
  );
};

export default App;
