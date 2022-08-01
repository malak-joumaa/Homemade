import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import Ordered from "../components/Ordered";
import { Nav, NavItem, Button } from "../styles/Orders.style";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Orders = () => {
  const [isCart, setCart] = useState(true);
  const [isOrdered, setOrdered] = useState(false);
  const [order, setOrder] = useState([]);
  const [modal, setModal] = useState(false);
  const [cook, setCook] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);
  console.log(order);

  // Redux
  const dispatch = useDispatch();
  const { addOrderData } = bindActionCreators(actionCreators, dispatch);
  const toggleModal = () => setModal(!modal);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

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
      console.log(err);
    }
  };

  order.forEach((order) => {
    if (
      order.status === "delivered" &&
      order.rated === false &&
      cook.indexOf(order.cook) == -1
    ) {
      console.log("rated");
      setCook([...cook, order.cook]);
      toggleModal();
    }
  });

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
        {isCart ? <Cart modal={modal} /> : <Ordered />}
      </Container>
    </>
  );
};

export default Orders;
