const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/user", require("./api/user"));

app.listen(PORT, () => {
  console.log(`I am listening on port number ${PORT}`);
});
