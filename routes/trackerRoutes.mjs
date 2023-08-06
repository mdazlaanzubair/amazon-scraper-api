import { Router } from "express";
import { scrapProductData } from "../controllers/getProductController.mjs";
const router = Router();

// Route to the amazon product scraper
router.get("/products/:productId", scrapProductData);

export default router;
