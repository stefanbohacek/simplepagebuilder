import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/app.handlebars", {
    layout: "app",
    hello: "world",
  });
});

export default router;
