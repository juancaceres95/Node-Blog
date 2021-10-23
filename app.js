const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

// routes ----------------------------------------------------------------
const postRoute = require("./routes/posts");

// initialize app --------------------------------
dotenv.config({ path: ".env" });
const app = express();

// global middlewares ----------------------------------------------------------------
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": "*",
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use(morgan('dev'));

// static files
app.use("/", express.static("build"));

// mounting the routes -----------------------------------------
// app.use("/post", postRoute);

// error handler --------------------------------
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "Something doesnt look good!",
    message: `Can't find the ${req.originalUrl} on this server!`,
  });
});

// export app --------------------------------
module.exports = app;
