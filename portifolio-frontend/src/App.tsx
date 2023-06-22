import { HeaderComponent } from "./components/HeaderComponent";
import { InfoComponent } from "./components/InfoComponent";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="background">
        <HeaderComponent />
        <InfoComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
