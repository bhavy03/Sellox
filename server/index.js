import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import cardRouter from "./routes/cardRouter.js";
import cookieParser from "cookie-parser";
import isAuthenticated from "./middlewares/authenticated.js";

mongoose
  .connect("mongodb+srv://bhavya0360:ku2vycg2Ruz6k4mo@cluster0.ywvevuv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("connected to mongodb");
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
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/user", userRouter);
app.use("/card", cardRouter);

app.get("/", async (req, res) => {
  res.send("SERVER");
});

app.listen(3000, () => {
  console.log("server is on");
});
