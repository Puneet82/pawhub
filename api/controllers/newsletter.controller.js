import model from "../models/index.js";

export const sendNewsLetter = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).send({ success: false, message: "Enter a valid email" });
    }

    const subExists = await model.NewsLetterSub.findOne({ email });
    if (subExists) {
      return res.status(400).send({ success: false, message: "Email is already subscribed" });
    }

    const payload = await model.NewsLetterSub.create({
      email,
    });
    return res.status(201).send({ data: payload, success: true, message: "Newsletter request sent" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
