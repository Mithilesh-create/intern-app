const express = require("express");
const router = new express.Router();
router.use(express.json());
const {
  SendDataFront,
  AddData,
  DeleteData,
  UpdateData,
  PostData,
} = require("../Controllers/controller");
//
router.get("/send", SendDataFront);
router.post("/add", AddData);
router.patch("/update", UpdateData);
router.post("/delete", DeleteData);
router.post("/post", PostData);

module.exports = router;
