import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import SingleOrder from "../components/SingleOrder";
import { Nav, NavItem, Button } from "../styles/Orders.style";

const Orders = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Navbar />
        <Nav>
          <NavItem>Cart</NavItem>
          <NavItem>Pre-Ordered</NavItem>
        </Nav>
        <SingleOrder />
        <Button>Go to checkout</Button>
      </Container>
    </>
  );
};

export default Orders;
