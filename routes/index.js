import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/home.handlebars", {
    hello: "world",
  });
});

export default router;
