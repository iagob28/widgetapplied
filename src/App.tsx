import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";
import { ChallengeContextProvider } from "./contexts/challengeContext";
import { TimerContextProvider } from "./contexts/timerContext";
import { Home } from "./pages/Home/index";
import { Login } from "./pages/Login";
import "./style/global.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <TimerContextProvider>
            <ChallengeContextProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
              </Routes>
            </ChallengeContextProvider>
          </TimerContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
