import express from "express";
const iRouter = express.Router();
//
import { Museum } from "../models/mod_museum.js";
//

//
iRouter.get("/", async (req, res) => {
  return res.render("index");
});

//
iRouter.get("/search", async (req, res) => {
  try {
    const query = req.query.q;
    const regex = new RegExp("^" + query, "i");
    const museumName = await Museum.find({ name: { $regex: regex } }).limit(10);
    res.send(museumName);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default iRouter;
