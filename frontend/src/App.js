import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AddMenu from "./pages/AddMenu";
import RegisterFollowUp from "./pages/RegisterFollowUp";
import MainPage from "./pages/MainPage";
import { Toaster } from "react-hot-toast";
import SingleCook from "./pages/SingleCook";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import CookProfile from "./pages/CookProfile";
import LandingPage from "./pages/LandingPage";
import Chat from "./pages/chat/Chat";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const verifyToken = async () => {
    const res = await fetch("http://localhost:5000/api/user/verify", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    });
    const data = await res.json();
    console.log("Verify: ", data);
    if (data.decoded) {
      setIsLoggedIn(true);
      setIsLoading(false);
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      {isLoggedIn ? (
        <Routes>
          <Route path="/add-menu" element={<AddMenu />}></Route>
          <Route path="/main-page" element={<MainPage />}></Route>
          <Route path="/cook" element={<SingleCook />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/cook-profile" element={<CookProfile />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="*" element={<Navigate to="/main-page" />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/follow-up" element={<RegisterFollowUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
