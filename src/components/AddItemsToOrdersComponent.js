/** @format */

// /** @format */

// import { React, useEffect, useState } from "react";
// import ProductService from "../Services/ProductService";
// import { useNavigate, useParams } from "react-router-dom";

// export default function AddItemsToOrders() {
//   const params = useParams();
//   // const [orders, setOrders] = useState({ id: params.id });
//   const [items, setItems] = useState([]);
//   const [newItems, setNewItems] = useState([]);

//   useEffect(() => {
//     ProductService.getItems().then((res) => {
//       setItems(res.data);
//       console.log(items);
//     });
//   }, []);

//   const navigate = useNavigate();

//   function addProductToOrder() {
//     ProductService.getItems().then((res) => {
//       setItems(res.data);
//       console.log(items);
//     });
//   }

//   return (
//     <>
//       <div>
//         <h2 className="text-center">Item List</h2>
//         <div className="row">
//           <table class="table table-striped table-bordered">
//             <thead>
//               <tr>
//                 <th scope="col">Id</th>
//                 <th scope="col">SKU</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Description</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.sku}</td>
//                   <td>{item.name}</td>
//                   <td>{item.description}</td>
//                   <td>{item.price}</td>
//                   <td>
//                     <button
//                       onClick={() => addProductToOrder(item.orderId)}
//                       className="btn btn-primary me-md-3">
//                       Add To Order
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
