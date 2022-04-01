var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/users", function (req, res, next) {
  res.render("users", { title: "Express" });
  console.log("test");
  res.send("respond with a resource");
});

module.exports = router;
