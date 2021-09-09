require("dotenv").config();
require("./Database/dbconn")
const express = require("express");
const app = express();
const cors = require("cors");
const router =require("./Router/routes");
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(router);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("Client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is Up at port ${port}`);
});
