import { ThemeProvider } from "@material-ui/styles";
import theme from "./themes/platter";
import React from "react";
import Appbar from "./pages/AppBar/Appbar";
import Searchengin from "./pages/SearchEngin/Searchengin";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Searchengin />
    </ThemeProvider>
  );
};

export default App;
