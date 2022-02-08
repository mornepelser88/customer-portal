/** @format */

import React from "react";
import { useState } from "react/cjs/react.development";
import ProductService from "../Services/ProductService";
import { useNavigate } from "react-router-dom";

export default function CreateOrderComponent() {
  const [fieldValues, setFieldValues] = useState({
    orderNumber: "",
    customerName: "",
    orderDescription: "",
  });

  function onChangehandler(event) {
    const { name, value } = event.target;
    setFieldValues((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const navigate = useNavigate();

  function saveOrder(e) {
    e.preventDefault();
    let order = {
      orderNumber: fieldValues.orderNumber,
      customerName: fieldValues.customerName,
      orderDescription: fieldValues.orderDescription,
    };
    console.log("order => " + JSON.stringify(order));

    ProductService.createOrder(order).then((res) => {
      navigate("/listorders");
    });
  }

  return (
    <>
      <div class="container mt-4">
        <h2>Create Order</h2>
        <form class="mt-4">
          <div class="mb-3">
            <label class="form-label">Order Number</label>
            <input
              type="text"
              class="form-control"
              id="orderNumber"
              onChange={onChangehandler}
              name="orderNumber"
              value={fieldValues.orderNumber}></input>
          </div>
          <div class="mb-3">
            <label class="form-label">Customer Name</label>
            <input
              type="text"
              class="form-control"
              id="customerName"
              onChange={onChangehandler}
              name="customerName"
              value={fieldValues.customerName}></input>
          </div>
          <div class="mb-3">
            <label class="form-label">Order Description</label>
            <input
              type="text"
              class="form-control"
              id="orderDescription"
              onChange={onChangehandler}
              name="orderDescription"
              value={fieldValues.orderDescription}></input>
          </div>

          <button type="submit" class="btn btn-primary" onClick={saveOrder}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
