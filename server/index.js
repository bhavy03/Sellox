import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import userRouter from "./routes/userRouter.js";
import cardRouter from "./routes/cardRouter.js";
import cookieParser from "cookie-parser";

config({
  path: "./features/config.env",
});

mongoose
  .connect(process.env.MONGO_URI,{
    dbName:process.env.DB_NAME,
  })
  .then((c) => {
    console.log(`connected to ${c.connection.host}`);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
const corsOptions = {
  origin: `${process.env.FRONTEND_URI}`,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/user", userRouter);
app.use("/card", cardRouter);

app.get("/", async (req, res) => {
  res.send("SERVER");
});

app.listen(process.env.PORT, () => {
  console.log(
    `server is working on port: ${process.env.PORT} in ${process.env.Node_ENV} mode`
  );
});
// set NODE_ENV=Development&&
