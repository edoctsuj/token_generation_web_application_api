require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const api = require("./app/routes/api");
const web = require("./app/routes/web");

app.use(express.json());
app.use("/api", api);
app.use("/", web);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
