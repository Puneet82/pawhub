import model from "../models/index.js";

export const getAllBookings = async (req, res) => {
  try {
    const bookingList = await model.Booking.find();
    return res.status(200).send({ data: bookingList, success: true, message: "bookings list loaded" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

// export const getAllBookingsByPet = async (req, res) => {
//   const { pet_id } = req.params;
//   try {
//     const bookingList = await model.Booking.find({ pet: pet_id });
//     return res.status(200).send({ data: bookingList, success: true, message: "bookings list loaded by pet" });
//   } catch (error) {
//     return res.status(500).send({ success: false, message: error.message });
//   }
// };

export const getBookingByID = async (req, res) => {
  const { booking_id } = req.params;
  try {
    const bookingInfo = await model.Booking.findById({ _id: booking_id });
    if (!bookingInfo) {
      return res.status(404).send({ success: false, message: "booking not found" });
    }
    return res.status(200).send({ data: bookingInfo, success: true, message: "booking info loaded" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const getAllBookingsByUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const bookingList = await model.Booking.find({ user: user_id });
    return res.status(200).send({ data: bookingList, success: true, message: "bookings list loaded by user" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const getAllBookingsByStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const bookingList = await model.Booking.find({ status });
    return res.status(200).send({ data: bookingList, success: true, message: "bookings list loaded by status" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const createBooking = async (req, res) => {
  const { user, service, status, appointmentOn } = req.body;
  try {
    if (!user || !service) {
      return res.status(400).send({ success: false, message: "Please fill all required info" });
    }
    const bookingPayload = await model.Booking.create({
      user,
      service,
      status,
      appointmentOn,
    });
    return res.status(201).send({ data: bookingPayload, success: true, message: "Booking created" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { service } = req.body;
  try {
    const existingBooking = await model.Booking.findById({ _id: id });
    if (!existingBooking) {
      return res.status(404).send({ success: false, message: "Booking info does not exist" });
    }
    const bookingPayload = await model.Booking.findOneAndUpdate(
      { _id: id },
      {
        service,
      },
      { new: true }
    );
    return res.status(200).send({ data: bookingPayload, success: true, message: "Booking info updated" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const updateBookingPayment = async (req, res) => {
  const { id } = req.params;
  try {
    const existingBooking = await model.Booking.findById({ _id: id });
    if (!existingBooking) {
      return res.status(404).send({ success: false, message: "Booking info does not exist" });
    }
    const bookingPayload = await model.Booking.findOneAndUpdate(
      { _id: id },
      {
        paymentStatus: "COMPLETED",
      },
      { new: true }
    );
    return res.status(200).send({ data: bookingPayload, success: true, message: "Booking payment completed" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const existingBooking = await model.Booking.findById({ _id: id });
    if (!existingBooking) {
      return res.status(404).send({ success: false, message: "Booking info does not exist" });
    }
    const bookingPayload = await model.Booking.findOneAndUpdate(
      { _id: id },
      {
        status,
      },
      { new: true }
    );
    return res.status(200).send({ data: bookingPayload, success: true, message: "Booking status updated" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    await model.Booking.deleteOne({
      _id: id,
    });
    return res.status(200).send({ success: true, message: "Booking info deleted" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
