const mongoose = require("mongoose");
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("the database connnection is done.....");
  })
  .catch((e) => {
    console.log(e);
  });
