import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./core/Routes/Routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
