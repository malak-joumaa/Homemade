import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProfilePhoto from "./pages/AddProfilePhoto";
import OpenningHours from "./pages/OpenningHours";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/profile-photo" element={<AddProfilePhoto />}></Route>
        <Route path="/openning-hours" element={<OpenningHours />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
