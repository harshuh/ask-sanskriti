import express from "express";
const Router = express.Router();

//
import { Museum } from "../models/mod_museum.js";

//
Router.get("/museum", (req, res) => {
  res.render("main_admin");
});
//

//
Router.post("/museum", async (req, res) => {
  const {
    name,
    mlocation,
    Otimings,
    Ctimings,
    closingDay,
    entry_price_adult,
    entry_price_child,
    entry_price_Foreign,
  } = req.body;
  try {
    await Museum.create({
      name,
      mlocation,
      Otimings,
      Ctimings,
      closingDay,
      entry_price_adult,
      entry_price_child,
      entry_price_Foreign,
    });
    return res.redirect("/museum");
  } catch (error) {
    res.render("main_admin", { error: "Bad" });
  }
});
export default Router;
