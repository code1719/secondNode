const express = require("express");
const app = express();
const routes = require("./routes/index");

const PORT = process.env.PORT || 3000;

app.use("/", routes);

app.listen(3000, () => {
  console.log(`Test server running on port ${PORT}`);
});
