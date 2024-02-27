import jwt from "jsonwebtoken";

const sendCookie = (user, res, statusCode = 200) => {
  console.log(user);
  const token = jwt.sign({ id: user._id }, "secured");
  // console.log(token);
  res
    .status(statusCode)
    .cookie("token", token, {
      httponly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      //   sameSite: process.env.NODE_ENV === "devleopment" ? "lax" : "none",
      //   secure: process.env.NODE_ENV === "devleopment" ? false : true,
    })
    .json({
      success: true,
      user,
    });
};

export default sendCookie;
