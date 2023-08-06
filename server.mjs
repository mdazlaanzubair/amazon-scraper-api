// necessary imports
import express from "express";
import cors from "cors";
import trackerRoutes from "./routes/trackerRoutes.mjs";

// initializing express app
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/api", (req, res) => {
  res.status(200).json({
    msg: "Hello! from Amazon Scraper, I'm ready scrap the information you need.",
  });
});

app.use("/api", trackerRoutes);

// listen to the requests
app.listen(PORT, () => {
  console.log(`Amazon Scraper Server is running on PORT: ${PORT}`);
});
