const express = require("express");
const cors = require("cors");
const config= require("./config");
const port=config.port;

//Controller
const operationController=require("./controllers/operation-controller");

const server = express();
server.use(cors());
server.use(express.json());

server.use("/api/operations", operationController);
server.use("*", (request, response) => {
    response.status(404).send(`Route not found ${request.originalUrl}`);
});

//Server  listens on port 5000
server.listen(port, () => {
    console.log(`Listening on ${port}`);
}).on("error", (err) => {
    if (err.code === "EADDRINUSE")
        console.log("Error: Address in use");
    else 
        console.log("Error: Unknown error");
});