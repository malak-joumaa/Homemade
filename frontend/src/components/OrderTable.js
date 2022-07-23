import React, { useState, useEffect } from "react";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);
  // Get Orders
  const getOrders = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/order/get-orders/?id=" +
          localStorage.getItem("cook_id")
      ).then(async (res) => {
        const data = await res.json();
        setOrders(data);
        console.log(data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <table>
        <thead>
          <th>Items</th>
          <th>Total</th>
          <th>Status</th>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
