import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWT_SECRET;

const authIsAdmin = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({ success: false, message: "Not authorized" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);
    }

    // console.log(decodedData);
    if (decodedData?.isAdmin === true) {
      next();
    } else {
      return res.status(401).send({ message: "Admin only authorized" });
    }
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

export default authIsAdmin;
