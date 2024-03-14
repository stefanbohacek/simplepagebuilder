import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/about.handlebars", {});
});

export default router;
