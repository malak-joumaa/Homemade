import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import Ordered from "../components/Ordered";
import { Nav, NavItem } from "../styles/Orders.style";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import toast from "react-hot-toast";

const Orders = () => {
  const [isCart, setCart] = useState(true);
  const [isOrdered, setOrdered] = useState(false);
  const [order, setOrder] = useState([]);
  const [subOrder, setSubOrder] = useState([]);

  useEffect(() => {
    getOrders();
    getSubOrders();
  }, []);

  // Redux
  const dispatch = useDispatch();
  const { addOrderData } = bindActionCreators(actionCreators, dispatch);

  // Get Orders
  const getOrders = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/order/get-orders/?id=" +
          localStorage.getItem("customer_id")
      ).then(async (res) => {
        const data = await res.json();
        setOrder(data);
        addOrderData(data);
      });
    } catch (err) {
      toast.error("Error fetching orders");
    }
  };

  // Get Submitted Orders
  const getSubOrders = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/order/get-c-sub-orders/?id=" +
          localStorage.getItem("customer_id")
      ).then(async (res) => {
        const data = await res.json();
        setSubOrder(data);
      });
    } catch (err) {
      toast.error("Error fetching orders");
    }
  };

  return (
    <>
      <Container maxWidth="xl">
        <Navbar />
        <Nav>
          <NavItem
            id="cart"
            type={isCart}
            onClick={() => {
              setCart(true);
              setOrdered(false);
            }}
          >
            Cart
          </NavItem>
          <NavItem
            id="ordered"
            onClick={() => {
              setOrdered(true);
              setCart(false);
            }}
            type={isOrdered}
          >
            Ordered
          </NavItem>
        </Nav>
        {isCart ? <Cart order={subOrder} /> : <Ordered />}
      </Container>
    </>
  );
};

export default Orders;
