const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const dbConnect = require("./config/dbConnect.js");
const authRouter = require("./routes/authRoutes.js");
const itemRouter = require("./routes/itemRoutes.js");
const app = express()
app.use(cors(
    {
      origin: "*",
      credentials: true,
  }
  ));
app.use(cookieParser());
app.use(bodyParser.json())
dbConnect();

app.get("/", (req, res) => {
    res.json({
      message: "backend is running",
      success: true,
    });
  });
  app.use("/api/auth", authRouter);
  app.use("/api/item", itemRouter);
  app.listen(process.env.PORT || 5000, () => {
    console.log(
      `server running at ${process.env.PORT ? process.env.PORT : 5000}`
    );
  });