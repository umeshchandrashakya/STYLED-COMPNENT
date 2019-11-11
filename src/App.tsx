import React from "react";
import Home from "./pages/Home";
import GlobalsStyles from "./components/globals/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalsStyles />
      <Home />
    </>
  );
};

export default App;
