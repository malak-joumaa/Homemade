import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import Ordered from "../components/Ordered";
import { Nav, NavItem, Button } from "../styles/Orders.style";

const Orders = () => {
  const [isCart, setCart] = useState(true);
  const [isOrdered, setOrdered] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);
  console.log(order);

  // Get Orders
  const getOrders = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/order/get-orders/?id=" +
          localStorage.getItem("customer_id")
      ).then(async (res) => {
        const data = await res.json();
        setOrder(data);
      });
    } catch (err) {
      console.log(err);
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
        {isCart ? <Cart /> : <Ordered />}
      </Container>
    </>
  );
};

export default Orders;
