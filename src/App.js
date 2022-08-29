import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Welcomepage from "./pages/Welcomepage";
import NoPage from "./pages/NoPage";
export default function App() {
  return (
    <>
      {console.log("Hi")}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/Welcomepage" element={<Welcomepage />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
