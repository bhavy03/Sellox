const router = express.Router();
import express from "express";
import { allCards, cardDetails } from "../controllers/cardDetails.js";

router.get("/all", allCards);

export default router;
