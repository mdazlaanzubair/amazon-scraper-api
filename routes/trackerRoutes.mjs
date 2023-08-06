import { Router } from "express";
import { scrapProductData } from "../controllers/getProductController.mjs";
const router = Router();

// Route to the amazon product scraper
router.post("/product", scrapProductData);

export default router;
