const router = require("express").Router();
const { Movie } = require("../models");

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
