import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Welcomepage from "./pages/Welcomepage";
import NoPage from "./pages/NoPage";
import NameProvider from "./pages/Loginpage";
export default function App() {
  return (
    <>
      {/* <NameProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/Welcomepage" element={<Welcomepage />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* </NameProvider> */}
    </>
  );
}
