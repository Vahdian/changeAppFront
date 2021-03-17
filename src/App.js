import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./core/Routes/Routes";
import Menu from "./shared/components/menu/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
