import Card from "../Models/cardModel.js";

const newCard = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No files were uploaded");
    }
    // console.log(req.body);
    // const { userid } = req.params;
    // const user = await User.findById(userid);
    // if (!user) {
    // return res.status(404).send("User not found");
    // }
    // console.log(user);
    // const sellerName = user.name;
    const { productName, price, details, duration, sellerName, phoneNo } =
      req.body;

    const newCard = new Card({
      imageName: req.file.filename,
      productName: productName,
      price: price,
      sellerName: sellerName,
      details: details,
      duration: duration,
      phoneNo: phoneNo,
      postingDate: new Date(),
    });

    await newCard.save();

    res.send("Card created succesfullly.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export default newCard;
