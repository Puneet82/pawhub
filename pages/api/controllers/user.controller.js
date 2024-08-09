import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import model from "../models/index.js";
import util from "../util/index.js";

dotenv.config();
const secret = process.env.JWT_SECRET;

// google auth
export const signinGoogle = async (req, res) => {
  const { email, name } = req.body;
  try {
    const userPayload = await model.User.findOne({ email });

    if (!userPayload) {
      userPayload = await model.User.create({
        name,
        email,
        password: "NA",
      });
    }
    const token = jwt.sign({ email: userPayload.email, id: userPayload._id }, secret, {
      expiresIn: "2h",
    });
    const authPayload = {
      result: userPayload,
      token,
    };
    return res.status(200).send({ data: authPayload, success: true, message: "Google login successful" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

//sign in
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await model.User.findOne({ email });
    if (!oldUser) return res.status(404).send({ success: false, message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).send({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, isAdmin: oldUser.isAdmin, id: oldUser._id }, secret, {
      expiresIn: "2h",
    });

    res.status(201).send({ data: { result: oldUser, token }, success: true, message: "Sign in successful" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: "Something went wrong" });
  }
};

//sign up
export const signup = async (req, res) => {
  const { email, password, phone, name, isAdmin, otp } = req.body;

  try {
    const otpPayload = await model.Otp.find({ phone }).sort({ createdAt: -1 }).limit(1);
    if (otpPayload.length === 0 || otp !== otpPayload[0].otp) {
      return res.status(400).send({ success: false, message: "OTP is incorrect or has expired" });
    }

    const oldUserPh = await model.User.find({ phone });
    if (oldUserPh.length !== 0)
      return res.status(400).send({ success: false, message: "Phone number is already registered" });

    const oldUser = await model.User.find({ email });
    if (oldUser.length !== 0) return res.status(400).send({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await model.User.create({
      email,
      password: hashedPassword,
      name,
      phone,
      isAdmin,
    });

    const token = jwt.sign({ email: result.email, isAdmin: result.isAdmin, id: result._id }, secret, {
      expiresIn: "2h",
    });

    res.status(201).send({ data: { result, token }, success: true, message: "Sign up successful" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something went wrong" });
    console.log(error);
  }
};

//update user details
export const updateProfile = async (req, res) => {
  const { email, password, phone, name, otp } = req.body;

  try {
    const otpPayload = await model.Otp.find({ phone }).sort({ createdAt: -1 }).limit(1);
    if (otpPayload.length === 0 || otp !== otpPayload[0].otp) {
      return res.status(400).send({ success: false, message: "OTP is incorrect or has expired" });
    }

    const oldUser = await model.User.find({ email });
    if (oldUser.length === 0) return res.status(400).send({ success: false, message: "User does not exist" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await model.User.findOneAndUpdate(
      { email },
      {
        phone,
        hashedPassword,
        name,
      },
      { new: true }
    );

    const token = jwt.sign({ email: result.email, isAdmin: result.isAdmin, id: result._id }, secret, {
      expiresIn: "2h",
    });

    res.status(201).send({ data: { result, token }, success: true, message: "Sign up successful" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something went wrong" });
    console.log(error);
  }
};

// get OTP
export const getOTP = async (req, res) => {
  const { phone, email } = req.body;
  try {
    if (!phone) {
      return res.status(400).send({ success: false, message: "Please enter a phone number" });
    }
    if (!email) {
      return res.status(400).send({ success: false, message: "Please enter an email ID" });
    }

    const OTP = await util.getOTP();
    const otpPayload = await model.Otp.create({
      otp: OTP,
      phone,
      email,
    });

    return res.status(200).send({ data: otpPayload, success: true, message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).send({ success: false, message: "Error generating OTP" });
  }
};

// get all users
export const getUsers = async (req, res) => {
  try {
    const usersList = await model.User.find();
    return res.status(200).send({ data: usersList, success: true, message: "user list loaded" });
  } catch (error) {
    return res.status(500).send({ success: false, message: "Error getting users" });
  }
};

// get user by id
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await model.User.findById({ _id: id });
    return res.status(200).send({ data: user, success: true, message: "user info loaded" });
  } catch (error) {
    return res.status(500).send({ success: false, message: "Error getting user" });
  }
};
