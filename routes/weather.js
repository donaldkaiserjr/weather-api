const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/weather", function (req, res, next) {
  request(
    "https://api.openweathermap.org/data/2.5/weather?q=malibu&appid=528346c17fd4f857836b41f1d29ec4c1&units=imperial",
    { method: "POST" }
  )
    .on("data", function (chunk) {
      console.log(chunk);
    })
    .on("end", function (err) {
      if (err) return console.log("connection closed due to errors", err);

      console.log("end");
    });
});
module.exports = router;
