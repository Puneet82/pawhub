import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import dbConnect from "./config/dbConfig.js";
import route from "./routes/index.js";

dotenv.config();
dbConnect();
const app = express();
const PORT = process.env.PORT || 5050;

//middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Pawsitivity API");
});

// routes
app.use("/auth", route.userRoute);
app.use("/pet", route.petRoute);
app.use("/booking", route.bookingRoute);
app.use("/sub", route.newsletterRoute);

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}`);
});

// Default response for other request
app.use((req, res) => {
  res.status(404);
});
