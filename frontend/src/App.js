import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../src/state/index";
import LandingPage from "./pages/LandingPage";
import Chat from "./pages/chat/Chat";

function App() {
  const dispatch = useDispatch();
  const { addSocket } = bindActionCreators(actionCreators, dispatch);

  const [socket, setSocket] = useState(null);
  useEffect(() => {
    setSocket(io("http://localhost:4000"));
    addSocket(io("http://localhost:4000"));
  }, []);

  const user = useSelector((state) => state.login);
  console.log(user.email);

  useEffect(() => {
    if (localStorage.getItem("user_type") === "customer") {
      socket?.emit("newUser", user.customer_id);
    } else {
      socket?.emit("newUser", user.cook_id);
    }
    console.log("socket", socket);
  }, [socket, user]);

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/add-menu" element={<AddMenu />}></Route>
        <Route path="/follow-up" element={<RegisterFollowUp />}></Route>
        <Route path="/main-page" element={<MainPage />}></Route>
        <Route path="/cook" element={<SingleCook />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/cook-profile" element={<CookProfile />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
