// Set up     https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors"); 
                              
const requests = require("requests");

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");

const app = express();
app.use(cors());

app.get("/weather/:cityName", (req, res) => {
  console.log(req.params);
  requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.params.cityName}&appid=528346c17fd4f857836b41f1d29ec4c1&units=imperial`,
    { method: "POST" }
  )
    .on("data", function (chunk) {
      // console.log(chunk);
      res.send(chunk);
    })
    .on("end", function (err) {
      if (err) return console.log("connection closed due to errors", err);

      console.log("end");
    });
});
// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(logger("dev"));
// app.use(express.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// app.use("/weather", weatherRouter)
// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;
