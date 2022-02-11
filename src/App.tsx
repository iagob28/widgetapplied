import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TimerContextProvider } from "./contexts/timerContext";
import { Home } from "./pages/Home/index";
import { Login } from "./pages/Login";
import "./style/global.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <TimerContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </TimerContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
