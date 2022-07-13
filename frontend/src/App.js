import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AddMenu from "./pages/AddMenu";
import RegisterFollowUp from "./pages/RegisterFollowUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/add-menu" element={<AddMenu />}></Route>
        <Route path="/follow-up" element={<RegisterFollowUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
