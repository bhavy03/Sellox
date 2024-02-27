import Card from "../Models/cardModel.js";

export const cardDetails = async (req, res) => {};

export const allCards = async (req, res) => {
  try {
    // Fetch all cards from the database
    const cards = await Card.find();
    // Send the cards as JSON response
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
