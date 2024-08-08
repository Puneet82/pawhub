import model from "../models/index.js";

export const getAllPets = async (req, res) => {
  try {
    const petList = await model.Pet.find();

    return res.status(200).send({ data: petList, success: true, message: "pets list loaded" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const getAllPetsByType = async (req, res) => {
  const { type } = req.params;
  try {
    const petList = await model.Pet.find({ type });
    return res.status(200).send({ data: petList, success: true, message: "pets list loaded by pet type" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const getPetById = async (req, res) => {
  const { id } = req.params;
  try {
    const petList = await model.Pet.findById({ _id: id });
    return res.status(200).send({ data: petList, success: true, message: "pet info loaded" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const addPetInfo = async (req, res) => {
  const { name, type, desc, breed, age, imgurl } = req.body;
  try {
    if (!name || !age || !breed) {
      return res.status(400).send({ success: false, message: "Please fill all required info" });
    }
    const petPayload = await model.Pet.create({
      name,
      type,
      desc,
      age,
      breed,
      imgurl,
    });
    return res.status(201).send({ data: petPayload, success: true, message: "Pet info added" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const updatePetInfo = async (req, res) => {
  const { id } = req.params;
  const { name, desc, age, imgurl } = req.body;
  try {
    const oldPet = await model.Pet.findById({ _id: id });
    if (!oldPet) {
      return res.status(404).send({ success: false, message: "Pet info does not exist" });
    }
    const petPayload = await model.Pet.findOneAndUpdate(
      { _id: id },
      {
        name,
        desc,
        age,
        imgurl,
      },
      { new: true }
    );
    return res.status(200).send({ data: petPayload, success: true, message: "Pet info updated" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const deletePetInfo = async (req, res) => {
  const { id } = req.params;
  try {
    await model.Pet.deleteOne({
      _id: id,
    });
    return res.status(200).send({ success: true, message: "Pet info deleted" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
