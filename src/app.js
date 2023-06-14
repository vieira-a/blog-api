require("dotenv").config();
const cors = require("cors");
const express = require("express");

const IP = process.env.API_SERVER;
const PORT = process.env.API_PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

try {
  app.listen(PORT, IP, () => {
    console.log(`API server running on port ${PORT}`);
  });
} catch (error) {
  console.log(`API connection error ${error}`);
}
