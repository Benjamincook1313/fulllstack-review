const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { login } = require("./ctrl");

app.post("/login", login);

app.listen(4040, () => console.log("Server listening on port 4040"));