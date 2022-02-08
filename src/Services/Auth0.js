/** @format */

// /** @format */

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";

// export default function Auth0() {
//   const {
//     loginWithPopup,
//     loginWithRedirect,
//     logout,
//     user,
//     isAuthenticated,
//     getAccessTokenSilently,
//   } = useAuth0();

//   function callApi() {
//     axios
//       .get("http://localhost:4000/")
//       .then((response) => console.log(response.data))
//       .catch((error) => console.log(error.message));
//   }

//   async function callProtectedApi() {
//     try {
//       const token = await getAccessTokenSilently();
//       const response = await axios.get("http://localhost:4000/protected", {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   return (
//     <div>
//       <h1>Auth0</h1>
//       <ul>
//         <li>
//           <button onClick={loginWithPopup}>Login With Popup</button>
//         </li>
//         <li>
//           <button onClick={loginWithRedirect}>Login With Redirect</button>
//         </li>
//         <li>
//           <button onClick={logout}>logout</button>
//         </li>
//       </ul>
//       <h3>User is {isAuthenticated ? "Logged in" : "Not Logged in"}</h3>

//       <ul>
//         <li>
//           <button onClick={callApi}>Call Api route</button>
//         </li>
//         <li>
//           <button onClick={callProtectedApi}>Call protected Api route</button>
//         </li>
//       </ul>

//       {isAuthenticated && (
//         <pre style={{ textAlign: "start" }}>
//           {JSON.stringify(user, null, 2)}
//         </pre>
//       )}
//     </div>
//   );
// }
