import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  imageName: String,
  productName: String,
  price: Number,
  phoneNo: Number,
  sellerName: String,
  details: String,
  duration: String,
  postingDate: {
    type: Date,
    default: Date.now(),
  },
});

const Card = mongoose.model("Card", cardSchema);

export default Card;
