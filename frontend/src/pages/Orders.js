import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SingleOrder from "../components/SingleOrder";
import { Nav, NavItem, Button } from "../styles/Orders.style";

const Orders = () => {
  const [isCart, setCart] = useState(true);
  const [isOrdered, setOrdered] = useState(false);
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
            Pre-Ordered
          </NavItem>
        </Nav>
        <SingleOrder cart={true} />
        <Button>Go to checkout</Button>
      </Container>
    </>
  );
};

export default Orders;
