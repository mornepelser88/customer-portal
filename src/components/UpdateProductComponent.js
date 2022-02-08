/** @format */

// /** @format */

// import React from "react";
// import { useEffect, useState } from "react/cjs/react.development";
// import ProductService from "../Services/ProductService";
// import { useNavigate, useParams, useHistory } from "react-router-dom";

// export default function UpdateProductComponent() {
//   const params = useParams();
//   const [fieldValues, setFieldValues] = useState({
//     id: params.id,
//     name: "",
//     category: "",
//     location: "",
//   });
//   console.log(fieldValues.id);

//   useEffect(() => {
//     ProductService.getProductById(fieldValues.id).then((res) => {
//       let product = res.data;
//       setFieldValues({
//         name: product.name,
//         category: product.category,
//         location: product.location,
//       });
//       console.log(product);
//     });
//   }, []);

//   function onChangehandler(event) {
//     const { name, value } = event.target;
//     setFieldValues((prevValue) => {
//       return {
//         ...prevValue,
//         [name]: value,
//       };
//     });
//   }

//   const navigate = useNavigate();

//   function updateProduct(e) {
//     e.preventDefault();
//     let product = {
//       name: fieldValues.name,
//       category: fieldValues.category,
//       location: fieldValues.location,
//     };
//     console.log("product => " + JSON.stringify(product));
//     ProductService.updateProduct(product, params.id).then((res) => {
//       navigate("/");
//     });
//   }

//   return (
//     <div class="container">
//       <h2>Update Product</h2>
//       <form>
//         <div class="mb-3">
//           <label class="form-label">Product Name</label>
//           <input
//             type="text"
//             class="form-control"
//             id="name"
//             onChange={onChangehandler}
//             name="name"
//             value={fieldValues.name}></input>
//         </div>
//         <div class="mb-3">
//           <label class="form-label">Category</label>
//           <input
//             type="text"
//             class="form-control"
//             id="category"
//             onChange={onChangehandler}
//             name="category"
//             value={fieldValues.category}></input>
//         </div>
//         <div class="mb-3">
//           <label class="form-label">Location</label>
//           <input
//             type="text"
//             class="form-control"
//             id="location"
//             onChange={onChangehandler}
//             name="location"
//             value={fieldValues.location}></input>
//         </div>

//         <button type="submit" class="btn btn-primary" onClick={updateProduct}>
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }
