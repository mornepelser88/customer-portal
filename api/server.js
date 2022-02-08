/** @format */

// /** @format */

// const express = require("express");
// const cors = require("cors");
// const jwt = require("express-jwt");
// const jwks = require("jwks-rsa");
// const axios = require("axios");

// const app = express();
// app.use(cors());

// var jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "https://dev-hhebyewg.us.auth0.com/.well-known/jwks.json",
//   }),
//   audience: "Moyo Customer Portal",
//   issuer: "https://dev-hhebyewg.us.auth0.com/",
//   algorithms: ["RS256"],
// }).unless({ path: ["/"] });

// app.get("/", function (req, res) {
//   res.send("Hello from index route");
// });

// app.get("/protected", function (req, res) {
//   res.send("Hello from protected Route");
// });

// app.use(jwtCheck);

// app.use((req, res, next) => {
//   const error = new Error("Not Found");
//   error.status = 404;
//   next(error);
// });

// app.use((error, req, res, next) => {
//   const status = error.status || 500;
//   const message = error.message || "Internal Server Error";
//   res.status(status).send(message);
// });

// app.listen(4000, () => {
//   console.log("Server Running on port 4000");
// });
