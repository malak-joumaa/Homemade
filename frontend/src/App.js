import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AddMenu from "./pages/AddMenu";
import RegisterFollowUp from "./pages/RegisterFollowUp";
import MainPage from "./pages/MainPage";
import { Toaster } from "react-hot-toast";
import SingleCook from "./pages/SingleCook";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/add-menu" element={<AddMenu />}></Route>
        <Route path="/follow-up" element={<RegisterFollowUp />}></Route>
        <Route path="/main-page" element={<MainPage />}></Route>
        <Route path="/cook" element={<SingleCook />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
