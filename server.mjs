// necessary imports
import express from "express";

// initializing express app
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.get("/api", (req, res) => {
  res.status(200).json({
    msg: "Hello! from Amazon Scraper, I'm ready scrap the information you need.",
  });
});

// listen to the requests
app.listen(PORT, () => {
  console.info(`Amazon Scraper Server is running on PORT: ${PORT}`); // eslint-disable-line no-console
});

export default app;
