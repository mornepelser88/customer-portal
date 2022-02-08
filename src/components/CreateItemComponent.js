/** @format */

import React from "react";
import { useState } from "react/cjs/react.development";
import ProductService from "../Services/ProductService";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateItemComponent() {
  const params = useParams();
  console.log(params);
  const [orders, setOrders] = useState({ id: params.id });
  const [fieldValues, setFieldValues] = useState({
    name: "",
    description: "",
    sku: "",
    price: "",
  });

  function onChangehandler(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFieldValues((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const navigate = useNavigate();

  function saveProduct(e) {
    e.preventDefault();
    let product = {
      description: fieldValues.description,
      name: fieldValues.name,
      price: fieldValues.price,
      sku: fieldValues.sku,
      orderId: params.id,
    };
    console.log("product => " + JSON.stringify(product));

    ProductService.createItem(product.orderId, product).then((res) => {
      navigate("/");
    });
  }

  return (
    <>
      <div class="container mt-4">
        <h2>Create Product</h2>
        <form class="mt-4">
          <div class="mb-3">
            <label class="form-label">Stock Code</label>
            <input
              type="text"
              class="form-control"
              id="sku"
              onChange={onChangehandler}
              name="sku"
              value={fieldValues.sku}></input>
          </div>
          <div class="mb-3">
            <label class="form-label">Product Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              onChange={onChangehandler}
              name="name"
              value={fieldValues.name}></input>
          </div>
          <div class="mb-3">
            <label class="form-label">Description</label>
            <input
              type="text"
              class="form-control"
              id="description"
              onChange={onChangehandler}
              name="description"
              value={fieldValues.description}></input>
          </div>

          <div class="mb-3">
            <label class="form-label">Price</label>
            <input
              type="text"
              class="form-control"
              id="price"
              onChange={onChangehandler}
              name="price"
              value={fieldValues.price}></input>
          </div>

          <button
            type="submit"
            class="btn btn-primary me-md-3"
            onClick={saveProduct}>
            Submit
          </button>
          <button
            type="submit"
            class="btn btn-secondary"
            onClick={() => navigate(-1)}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}
