/** @format */

import React from "react";
import { useState } from "react/cjs/react.development";
import ProductService from "../Services/ProductService";
import { useNavigate } from "react-router-dom";

export default function CreateProductComponent() {
  const [fieldValues, setFieldValues] = useState({
    name: "",
    category: "",
    location: "",
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

  function saveProduct(e) {
    e.preventDefault();
    let product = {
      name: fieldValues.name,
      category: fieldValues.category,
      location: fieldValues.location,
    };
    console.log("product => " + JSON.stringify(product));

    ProductService.createProduct(product).then((res) => {
      navigate("/");
    });
  }

  return (
    <>
      <div class="container">
        <h2>Create Product</h2>
        <form>
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
            <label class="form-label">Category</label>
            <input
              type="text"
              class="form-control"
              id="category"
              onChange={onChangehandler}
              name="category"
              value={fieldValues.category}></input>
          </div>
          <div class="mb-3">
            <label class="form-label">Location</label>
            <input
              type="text"
              class="form-control"
              id="location"
              onChange={onChangehandler}
              name="location"
              value={fieldValues.location}></input>
          </div>

          <button type="submit" class="btn btn-primary" onClick={saveProduct}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
