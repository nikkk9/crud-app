import express from "express";
import User from "../model/user.js";
const router = express.Router();

// add user
router.post("/addData", async (req, res) => {
  const { name, phone, email, hobby } = req.body;
  const data = await User.create({
    name,
    phone,
    email,
    hobby,
  });
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(400).send("add data failed!");
  }
});

// get all users
router.get("/getData", async (req, res) => {
  const data = await User.find().sort("-createdAt");
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(400).send("data is  not found!");
  }
});

// get a user
router.get("/user/:id", async (req, res) => {
  const data = await User.findById(req.params.id);
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(400).send("user is  not found!");
  }
});

// update user details
router.put("/updateData/:id", async (req, res) => {
  const data = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    }
  );
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(400).send("data is not updated!");
  }
});

// delete user
router.delete("/deleteData/:id", async (req, res) => {
  const data = await User.findByIdAndDelete(req.params.id);
  if (data) {
    res.status(200).send("data is deleted");
  } else {
    res.status(400).send("data is  not deleted!");
  }
});

export default router;
